 
import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
 
export const appRoutes: Routes = [
  {
    path: 'job',
    loadComponent: () =>
      import('./ui/job/job.component')
        .then(m => m.JobComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'recruitment',
    loadComponent: () =>
      import('./ui/recruitment/recruitment.component')
        .then(m => m.RecruitmentComponent)
  },
  {
    path: 'schedule',
    loadComponent: () =>
      import('./ui/schedule/schedule.component')
        .then(m => m.ScheduleComponent)
  },
  {
    path: 'talent-pool',
    loadComponent: () =>
      import('./ui/talent-pool/talent-pool.component')
        .then(m => m.TalentPoolComponent)
  },
  {
    path: 'recruitment-campaign',
    loadComponent: () =>
      import('./ui/recruitment-campaign/recruitment-campaign.component')
        .then(m => m.RecruitmentCampaignComponent)
  },
  {
    path: 'task',
    loadComponent: () =>
      import('./ui/task/task.component')
        .then(m => m.TaskComponent)
  },
  {
    path: 'mailbox-ai-marketing',
    loadComponent: () =>
      import('./ui/mailbox-ai-marketing/mailbox-ai-marketing.component')
        .then(m => m.MailboxAiMarketingComponent)
  },
  {
    path: 'candidate-conversation',
    loadComponent: () =>
      import('./ui/candidate-conversation/candidate-conversation.component')
        .then(m => m.CandidateConversationComponent)
  },
  {
    path: 'report',
    loadComponent: () =>
      import('./ui/report/report.component')
        .then(m => m.ReportComponent)
  },
  {
    path: 'setting',
    loadComponent: () =>
      import('./ui/setting/setting.component')
        .then(m => m.SettingComponent)
  },
  {
    path: 'product',
    loadComponent: () =>
      import('./ui/product/product.component')
        .then(m => m.ProductComponent),
    canActivateChild: [AuthGuard]
  },

  {
    path: 'product/:id',
    loadComponent: () =>
      import('./ui/product/productDetail/productDetail.component')
        .then(m => m.ProductDetailComponent)
  },


  { path: '', redirectTo: 'job', pathMatch: 'full' },

  {
    path: '403',
    loadComponent: () =>
      import('./ui/403/403.component')
        .then(m => m.NotAllowedComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./ui/notFound/notFound.component')
        .then(m => m.NotFoundComponent)
  }
];
