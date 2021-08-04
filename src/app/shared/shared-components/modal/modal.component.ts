import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../../definitions/enum';
import { HttpService } from '../../../http/http.service';
import { Pokemon } from '../../definitions/models';
import { forkJoin } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
    @Input() showModal = false;
    @Input() title: string;
    @Input() closeText = 'Cancelar';
    @Input() submitText: string;
    @Input() pokemonList: Pokemon[];

    @Output() submitEvent: EventEmitter<void> = new EventEmitter<void>();
    @Output() closeEvent: EventEmitter<void> = new EventEmitter<void>();

    buttonColor = Color;
    pokemonResponse: Pokemon[] = [];

    constructor(private httpService: HttpService) {}

    ngOnInit() {
        this.getPokemonInfo();
        document.body.style.overflow = 'hidden';
    }

    getPokemonInfo() {
        const pokemonList$ = this.pokemonList.map((item) =>
            this.httpService.getPokemonByName(item.name),
        );

        forkJoin(pokemonList$)
            .pipe(take(1))
            .subscribe((pokemon) => (this.pokemonResponse = pokemon));
    }

    onSubmit() {
        this.submitEvent.emit();
    }

    onClose() {
        this.showModal = false;
        this.closeEvent.emit();
        document.body.style.overflow = 'initial';
    }
}
