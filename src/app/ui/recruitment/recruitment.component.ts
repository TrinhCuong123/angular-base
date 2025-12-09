import { Component } from '@angular/core';
import { PermissionDirection } from 'src/app/directive/permission.directive';

@Component({
  selector: 'app-recruitment',
  standalone: true,
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.scss'],
  imports: [PermissionDirection]
})
export class RecruitmentComponent {
}