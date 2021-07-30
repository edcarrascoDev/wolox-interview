import { NavigationMenu } from '../models';

export const NAVIGATION_MENU: NavigationMenu[] = [
    { title: 'Inicio', link: '/', sectionId: 'home', hasScrollEffect: false },
    { title: 'Benificios', sectionId: 'benefitsSection', hasScrollEffect: true },
    {
        title: 'Registro',
        link: '/registro',
        sectionId: 'registryPage',
        hasScrollEffect: false,
        isButton: true,
        hideOnSessionOpen: true,
    },
];
