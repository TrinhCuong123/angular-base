import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from "@angular/core";

@Directive({
    selector: '[HighLightText]',
    standalone: true,
})

export class TextHighLightDirective {
    originalText = '';
    @Input() searchValue = ''

    constructor(private er: ElementRef, private renderer: Renderer2) {

    }
    ngOnInit() {
        setTimeout(() => {
            this.originalText = this.er.nativeElement.textContent;
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['searchValue'].firstChange) return;
        let escaped = this.searchValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let regex = new RegExp(`(${escaped})`, "gi");
        this.renderer.setProperty(this.er.nativeElement, 'innerHTML', this.originalText.replace(regex, `<span style='color: red;'>$1</span>`));
        
    }
}