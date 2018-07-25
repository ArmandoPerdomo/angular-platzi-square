import { Directive, HostListener, Input } from "../../../node_modules/@angular/core";

@Directive({
    selector: 'li[count-visitors]'
})
export class CountVisitors{
    @Input('count-visitors') place :any;
    @HostListener('click', ['$event.target']) countVisits() {
        this.place.visits++;
        console.log('Numero de visitas', this.place.visits);
    }
}
