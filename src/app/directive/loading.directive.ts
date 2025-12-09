import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[Loader]',
    standalone: true
})
export class LoaderDirective  {
    @Input() isLoading = false;
    originalHTML = '';
    constructor(private er: ElementRef, private renderer: Renderer2) {

    }
    ngOnInit() {
        this.originalHTML = this.er.nativeElement.textContent;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['isLoading'].firstChange) return;

        if (this.isLoading) {
            this.renderer.setProperty(this.er.nativeElement, 'innerHTML', `loading...`);
        } else {
            this.renderer.setProperty(this.er.nativeElement, 'innerHTML', this.originalHTML);
        }
    }
}