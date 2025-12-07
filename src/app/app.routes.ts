 
import { Routes } from '@angular/router';
 
export const appRoutes: Routes = [
  {
    path: 'job',
    loadComponent: () =>
      import('./ui/job/job.component')
        .then(m => m.JobComponent)
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

  { path: '', redirectTo: 'job', pathMatch: 'full' },

  {
    path: '**',
    loadComponent: () =>
      import('./ui/notFound/notFound.component')
        .then(m => m.NotFoundComponent)
  }
];
