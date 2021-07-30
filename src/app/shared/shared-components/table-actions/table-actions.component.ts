import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonComponent } from '../../abstract/common-component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-table-actions',
    templateUrl: './table-actions.component.html',
    styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent extends CommonComponent implements OnInit {
    form: FormGroup;
    currentPage = 1;
    pages: number[];
    pagesToShow: number[];

    TOTAL_COUNT: number;
    @Input() set totalCount(value: number) {
        if (value) {
            this.TOTAL_COUNT = value;

            this.setPages();
        }
    }

    get totalCount(): number {
        return this.TOTAL_COUNT;
    }

    @Input() nextPage: string;
    @Input() prevPage: string;

    @Output() emitLimitChange: EventEmitter<number> = new EventEmitter<number>();
    @Output() emitOffsetChange: EventEmitter<number> = new EventEmitter<number>();

    constructor(private formBuilder: FormBuilder) {
        super();
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.form = this.formBuilder.group({
            limit: [20],
        });

        this.listenToFormChange();
    }

    listenToFormChange() {
        const { limit } = this.form.controls;
        limit.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((value) => {
            this.emitLimitChange.emit(value);
            this.currentPage = 1;
            this.setPages();
        });
    }

    setPages() {
        const arrayLength = this.TOTAL_COUNT / this.form.get('limit').value;
        this.pages = Array.from(Array(Math.ceil(arrayLength)).keys());

        if (this.pages.length > 6) {
            const startItem = this.currentPage <= 3 ? 1 : this.currentPage - 2;
            const endItem = this.currentPage <= 3 ? 6 : this.currentPage + 2;
            this.pagesToShow = this.pages.slice(startItem, endItem);
            if (this.pagesToShow[0] > 1) {
                this.pagesToShow.unshift(1);
            }

            if (this.pagesToShow[this.pagesToShow.length - 1] < this.pages.length) {
                this.pagesToShow.push(this.pages.length);
            }
        } else {
            this.pagesToShow = this.pages;
        }
    }

    goToPage(page: number) {
        this.currentPage = page + 1;
        this.emitOffsetChange.emit(page * this.form.get('limit').value);
        this.setPages();
    }

    showMaxDots(page): boolean {
        return (
            this.pages[this.pages.length - 1] > this.pagesToShow[this.pagesToShow.length - 2] &&
            page === this.pages.length
        );
    }
}
