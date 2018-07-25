import { Directive, OnInit, ElementRef, Renderer2, Input } from '../../../node_modules/@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HightLightDirective implements OnInit {
    constructor(private ref: ElementRef, private render: Renderer2) {
        // has to be empty
    }
    @Input('highlight') plan = '';

    ngOnInit() {
        if (this.plan === 'premiun') {
            this.render.addClass(this.ref.nativeElement, 'list-group-item-info');
        }
    }
}
