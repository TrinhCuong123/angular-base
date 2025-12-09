import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsInputComponent } from 'src/app/components/ms-input/MsInput.component';
import { DxTooltipModule } from 'devextreme-angular';
import { LoaderDirective } from 'src/app/directive/loading.directive';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [MsInputComponent, DxTooltipModule, LoaderDirective],
})
export class HeaderComponent {
  fullName: string = '';
  isLoading = false;
  onFocusName() {
    console.log('Input focused');
  }
  ngAfterViewInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
