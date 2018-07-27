import { Directive, HostListener, Input } from "../../../node_modules/@angular/core";
import { Router } from "../../../node_modules/@angular/router";

@Directive({
    selector: 'li[count-visitors]'
})
export class CountVisitors{

    constructor(private _router: Router){}

    @Input('count-visitors') place :any;
    @HostListener('click', ['$event.target']) countVisits() {
        this.place.visits++;
        this._router.navigate(['/details'],{ queryParams: { id: this.place.id } });
        console.log('Numero de visitas', this.place.visits);
    }
}
