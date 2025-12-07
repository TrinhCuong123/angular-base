import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ms-input',
  standalone: true,
  templateUrl: './MsInput.component.html',
  styleUrls: ['./MsInput.component.scss'],
  imports: [CommonModule],
})
export class MsInputComponent {
  
  @Input() label: string = '';          // label input
  @Input() placeholder: string = '';     // placeholder
  @Input() value: string = '';           // giá trị truyền từ cha
  @Input() width: string = '250px';      // custom style

  @Output() valueChange = new EventEmitter<string>(); // emit value
  @Output() focusInput = new EventEmitter<void>();    // emit khi focus

  onInput(event: any) {
    this.valueChange.emit(event.target.value);
  }

  onFocus() {
    this.focusInput.emit();
  }
}
