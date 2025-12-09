import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { permissions } from 'src/app/auth/permission';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  items = [
    { SubSystemCode: 'Recruitment',name: 'Tin tuyển dụng', url: '/job', icon: 'icon-overview'},
    { SubSystemCode: 'Candidate',name: 'Ứng viên', url: '/recruitment', icon: 'icon-salary-components'},
    { SubSystemCode: 'Schedule',name: 'Lịch', url: '/schedule', icon: 'icon-payroll-tmpl'},
    { SubSystemCode: 'TalentPool',name: 'Kho tiềm năng', url: '/talent-pool', icon: 'icon-payroll-data'},
    { SubSystemCode: 'RecruitmentCampaign',name: 'Chiến dịch tuyển dụng', url: '/recruitment-campaign', icon: 'icon-payroll-calc'},
    { SubSystemCode: 'Task',name: 'Công việc', url: '/task', icon: 'icon-pay'},
    { SubSystemCode: 'AIMarketing',name: 'aiMarketing', url: '/mailbox-ai-marketing', icon: 'icon-reports'},
    { SubSystemCode: 'Conversation',name: 'Trao đổi với ứng viên', url: '/candidate-conversation', icon: 'icon-config'},
    { SubSystemCode: 'Report',name: 'Báo cáo', url: '/report', icon: 'icon-reports'},
    { SubSystemCode: '',name: 'Thiết lập', url: '/setting', icon: 'icon-config'},
    { SubSystemCode: '',name: 'Sản phẩm', url: '/product', icon: 'icon-config'}
  ];
  intersection: any[] = [];
  ngOnInit() {
    this.intersection = this.items.filter((obj) =>
    permissions.some((item) => (item.SubSystemCode === obj.SubSystemCode) && item.Permissions.includes('View') ));
      console.log(this.intersection);
  }
}
