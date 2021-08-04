export interface Pokemon {
    name: string;
    url: string;
    id?: number;
    generation?: Generation;
    effect_entries?: Effect[];
}

export interface Generation {
    name: string;
    url: string;
}

export interface Effect {
    effect: string;
    language: Language;
    short_effect: string;
}

export interface Language {
    name: string;
    url: string;
}
