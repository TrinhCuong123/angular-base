import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  items = [
    { name: 'Tin tuyển dụng', url: '/job', icon: 'icon-overview'},
    { name: 'Ứng viên', url: '/recruitment', icon: 'icon-salary-components'},
    { name: 'Lịch', url: '/schedule', icon: 'icon-payroll-tmpl'},
    { name: 'Kho tiềm năng', url: '/talent-pool', icon: 'icon-payroll-data'},
    { name: 'Chiến dịch tuyển dụng', url: '/recruitment-campaign', icon: 'icon-payroll-calc'},
    { name: 'Công việc', url: '/task', icon: 'icon-pay'},
    { name: 'aiMarketing', url: '/mailbox-ai-marketing', icon: 'icon-reports'},
    { name: 'Trao đổi với ứng viên', url: '/candidate-conversation', icon: 'icon-config'},
    { name: 'Báo cáo', url: '/report', icon: 'icon-reports'},
    { name: 'Thiết lập', url: '/setting', icon: 'icon-config'},
    { name: 'Sản phẩm', url: '/product', icon: 'icon-config'}
  ];

}
