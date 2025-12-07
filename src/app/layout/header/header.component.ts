import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsInputComponent } from 'src/app/components/ms-input/MsInput.component';
import { DxTooltipModule } from 'devextreme-angular';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MsInputComponent, DxTooltipModule],
})
export class HeaderComponent {
  fullName: string = '';

  onFocusName() {
    console.log('Input focused');
  }
}
