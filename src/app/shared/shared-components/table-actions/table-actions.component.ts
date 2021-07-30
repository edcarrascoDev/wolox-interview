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

    TOTAL_COUNT: number;
    @Input() set totalCount(value: number) {
        if (value) {
            this.TOTAL_COUNT = value;

            const arrayLength = this.TOTAL_COUNT / this.form.get('limit').value;
            this.pages = new Array(Math.round(arrayLength));
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
            this.setPages();
        });
    }

    setPages() {
        const arrayLength = this.TOTAL_COUNT / this.form.get('limit').value;
        this.pages = new Array(Math.ceil(arrayLength));
    }

    goToPage(page: number) {
        this.currentPage = page + 1;
        this.emitOffsetChange.emit(page * this.form.get('limit').value);
    }
}
