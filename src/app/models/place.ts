export class Place {
    constructor(
        public id: number = 0,
        public name: string = '',
        public description: string = '',
        public plan: string = 'free',
        public closeness: number = 1,
        public distance: number = 1,
        public lat: number = 10.0724655,
        public lng: number = -69.29871921,
        public visits: number = 0,
        public favorite: boolean = false,
        public disabled: boolean = false,
    ){}
}