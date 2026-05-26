src/
│
├── app/
│   │
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   └── terms-and-conditions/
│   │       └── page.tsx
│   │
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx
│   │   │
│   │   ├── otp/
│   │   │   └── page.tsx
│   │   │
│   │   ├── registration/
│   │   │   └── page.tsx
│   │   │
│   │   ├── forgot-password/
│   │   │   └── page.tsx
│   │   │
│   │   └── reset-password/
│   │       └── page.tsx
│   │
│   ├── (dashboard)/
│   │   │
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   │
│   │   ├── admin/
│   │   │   │
│   │   │   ├── page.tsx
│   │   │   │
│   │   │   ├── users/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── create/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx
│   │   │   │       └── edit/
│   │   │   │           └── page.tsx
│   │   │   │
│   │   │   ├── roles/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── permissions/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── audit-logs/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── maintenance/
│   │   │   │   ├── school-year/
│   │   │   │   ├── semester/
│   │   │   │   ├── departments/
│   │   │   │   ├── sections/
│   │   │   │   ├── subjects/
│   │   │   │   └── rooms/
│   │   │   │
│   │   │   ├── reports/
│   │   │   │   ├── enrollment/
│   │   │   │   ├── academic/
│   │   │   │   ├── finance/
│   │   │   │   └── faculty/
│   │   │   │
│   │   │   └── settings/
│   │   │       ├── general/
│   │   │       ├── security/
│   │   │       └── appearance/
│   │   │
│   │   │
│   │   ├── registrar/
│   │   │   │
│   │   │   ├── basic-ed/
│   │   │   │   │
│   │   │   │   ├── page.tsx
│   │   │   │   │
│   │   │   │   ├── enrollment/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── create/
│   │   │   │   │   └── [id]/
│   │   │   │   │
│   │   │   │   ├── students/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── create/
│   │   │   │   │   └── [id]/
│   │   │   │   │
│   │   │   │   ├── sections/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── create/
│   │   │   │   │   └── [id]/
│   │   │   │   │
│   │   │   │   ├── grading/
│   │   │   │   │   ├── quarterly/
│   │   │   │   │   ├── final/
│   │   │   │   │   └── report-cards/
│   │   │   │   │
│   │   │   │   ├── attendance/
│   │   │   │   │
│   │   │   │   └── records/
│   │   │   │       ├── sf1/
│   │   │   │       ├── sf2/
│   │   │   │       ├── sf9/
│   │   │   │       └── sf10/
│   │   │   │
│   │   │   │
│   │   │   └── college/
│   │   │       │
│   │   │       ├── page.tsx
│   │   │       │
│   │   │       ├── enrollment/
│   │   │       │   ├── page.tsx
│   │   │       │   ├── regular/
│   │   │       │   ├── irregular/
│   │   │       │   └── transferee/
│   │   │       │
│   │   │       ├── students/
│   │   │       │   ├── page.tsx
│   │   │       │   ├── regular/
│   │   │       │   ├── irregular/
│   │   │       │   └── graduating/
│   │   │       │
│   │   │       ├── evaluation/
│   │   │       │
│   │   │       ├── curriculums/
│   │   │       │
│   │   │       ├── schedules/
│   │   │       │
│   │   │       ├── grades/
│   │   │       │
│   │   │       └── records/
│   │   │           ├── tor/
│   │   │           ├── cog/
│   │   │           └── diploma/
│   │   │
│   │   │
│   │   ├── faculty/
│   │   │   │
│   │   │   ├── teachers/
│   │   │   │   │
│   │   │   │   ├── page.tsx
│   │   │   │   │
│   │   │   │   ├── advisory/
│   │   │   │   ├── attendance/
│   │   │   │   ├── grades/
│   │   │   │   ├── schedules/
│   │   │   │   └── students/
│   │   │   │
│   │   │   └── instructors/
│   │   │       │
│   │   │       ├── page.tsx
│   │   │       │
│   │   │       ├── classes/
│   │   │       ├── attendance/
│   │   │       ├── grades/
│   │   │       ├── schedules/
│   │   │       ├── subject-loads/
│   │   │       └── students/
│   │   │
│   │   │
│   │   ├── students/
│   │   │   │
│   │   │   ├── basic-ed/
│   │   │   │   │
│   │   │   │   ├── page.tsx
│   │   │   │   ├── profile/
│   │   │   │   ├── grades/
│   │   │   │   ├── attendance/
│   │   │   │   ├── schedules/
│   │   │   │   ├── billing/
│   │   │   │   └── announcements/
│   │   │   │
│   │   │   └── college/
│   │   │       │
│   │   │       ├── page.tsx
│   │   │       ├── profile/
│   │   │       ├── grades/
│   │   │       ├── schedules/
│   │   │       ├── evaluation/
│   │   │       ├── subjects/
│   │   │       ├── billing/
│   │   │       └── announcements/
│   │   │
│   │   │
│   │   ├── accounting/
│   │   │   │
│   │   │   ├── page.tsx
│   │   │   │
│   │   │   ├── billing/
│   │   │   ├── payments/
│   │   │   ├── invoices/
│   │   │   ├── expenses/
│   │   │   ├── discounts/
│   │   │   ├── scholarships/
│   │   │   └── reports/
│   │   │
│   │   │
│   │   ├── shared/
│   │   │   ├── profile/
│   │   │   ├── notifications/
│   │   │   ├── announcements/
│   │   │   ├── calendar/
│   │   │   └── help/
│   │   │
│   │   │
│   │   └── system/
│   │       ├── components/
│   │       ├── tables/
│   │       ├── charts/
│   │       └── blank/
│   │
│   │
│   ├── api/
│   │   │
│   │   ├── auth/
│   │   │
│   │   ├── admin/
│   │   │
│   │   ├── registrar/
│   │   │   ├── basic-ed/
│   │   │   └── college/
│   │   │
│   │   ├── faculty/
│   │   │   ├── teachers/
│   │   │   └── instructors/
│   │   │
│   │   ├── students/
│   │   │   ├── basic-ed/
│   │   │   └── college/
│   │   │
│   │   ├── accounting/
│   │   │
│   │   ├── reports/
│   │   │
│   │   └── notifications/
│   │
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── error.tsx
│   └── page.tsx
│
│
├── components/
│   │
│   ├── providers/
│   │   ├── theme-provider.tsx
│   │   ├── auth-provider.tsx
│   │   ├── session-provider.tsx
│   │   └── query-provider.tsx
│   │
│   │
│   ├── ui/
│   │
│   │
│   ├── layout/
│   │   ├── app-sidebar.tsx
│   │   ├── mobile-sidebar.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── page-header.tsx
│   │   └── dashboard-shell.tsx
│   │
│   │
│   ├── shared/
│   │   ├── loading-spinner.tsx
│   │   ├── empty-state.tsx
│   │   ├── error-state.tsx
│   │   ├── no-data.tsx
│   │   └── section-title.tsx
│   │
│   │
│   ├── dashboard/
│   │   ├── stat-card.tsx
│   │   ├── analytics-card.tsx
│   │   ├── chart-card.tsx
│   │   ├── recent-activity.tsx
│   │   └── dashboard-header.tsx
│   │
│   │
│   ├── registrar/
│   │   │
│   │   ├── basic-ed/
│   │   │   ├── enrollment/
│   │   │   ├── sections/
│   │   │   ├── grading/
│   │   │   └── records/
│   │   │
│   │   └── college/
│   │       ├── evaluation/
│   │       ├── curriculums/
│   │       ├── schedules/
│   │       └── records/
│   │
│   │
│   ├── faculty/
│   │   │
│   │   ├── teachers/
│   │   │   ├── advisory/
│   │   │   ├── grades/
│   │   │   └── attendance/
│   │   │
│   │   └── instructors/
│   │       ├── classes/
│   │       ├── grades/
│   │       └── schedules/
│   │
│   │
│   ├── students/
│   │   │
│   │   ├── basic-ed/
│   │   │
│   │   └── college/
│   │
│   │
│   ├── accounting/
│   │   ├── billing/
│   │   ├── invoices/
│   │   └── payments/
│   │
│   │
│   ├── forms/
│   │   │
│   │   ├── auth/
│   │   │   ├── login-form.tsx
│   │   │   ├── otp-form.tsx
│   │   │   └── reset-password-form.tsx
│   │   │
│   │   ├── employee/
│   │   │   ├── employee-form.tsx
│   │   │   ├── teacher-fields.tsx
│   │   │   ├── instructor-fields.tsx
│   │   │   ├── role-selector.tsx
│   │   │   └── validation.ts
│   │   │
│   │   ├── student/
│   │   │   │
│   │   │   ├── shared/
│   │   │   │   ├── personal-info-fields.tsx
│   │   │   │   ├── guardian-fields.tsx
│   │   │   │   └── address-fields.tsx
│   │   │   │
│   │   │   ├── basic-ed/
│   │   │   │   ├── enrollment-form.tsx
│   │   │   │   ├── section-form.tsx
│   │   │   │   └── grading-form.tsx
│   │   │   │
│   │   │   └── college/
│   │   │       ├── evaluation-form.tsx
│   │   │       ├── subject-load-form.tsx
│   │   │       └── curriculum-form.tsx
│   │   │
│   │   ├── registrar/
│   │   │   ├── basic-ed/
│   │   │   └── college/
│   │   │
│   │   └── accounting/
│   │       ├── billing-form.tsx
│   │       ├── payment-form.tsx
│   │       └── invoice-form.tsx
│   │
│   │
│   ├── tables/
│   │   ├── data-table.tsx
│   │   ├── students-table.tsx
│   │   ├── faculty-table.tsx
│   │   ├── grades-table.tsx
│   │   ├── schedules-table.tsx
│   │   └── payments-table.tsx
│   │
│   │
│   ├── charts/
│   │   ├── area-chart.tsx
│   │   ├── bar-chart.tsx
│   │   ├── pie-chart.tsx
│   │   ├── line-chart.tsx
│   │   ├── enrollment-chart.tsx
│   │   ├── attendance-chart.tsx
│   │   └── finance-chart.tsx
│   │
│   │
│   └── user/
│       ├── user-avatar.tsx
│       ├── user-dropdown.tsx
│       ├── user-profile-card.tsx
│       └── user-menu.tsx
│
│
├── hooks/
│   ├── use-auth.ts
│   ├── use-user.ts
│   ├── use-role.ts
│   ├── use-sidebar.ts
│   ├── use-theme.ts
│   └── use-mobile.ts
│
│
├── lib/
│   │
│   ├── auth.ts
│   ├── prisma.ts
│   ├── db.ts
│   ├── utils.ts
│   ├── permissions.ts
│   ├── role-access.ts
│   │
│   ├── constants/
│   │   ├── roles.ts
│   │   ├── navigation.ts
│   │   ├── academic-division.ts
│   │   └── routes.ts
│   │
│   └── validations/
│       ├── auth.ts
│       ├── employee.ts
│       ├── student.ts
│       ├── registrar.ts
│       └── accounting.ts
│
│
├── services/
│   │
│   ├── auth/
│   │
│   ├── registrar/
│   │   ├── basic-ed/
│   │   └── college/
│   │
│   ├── faculty/
│   │   ├── teachers/
│   │   └── instructors/
│   │
│   ├── students/
│   │   ├── basic-ed/
│   │   └── college/
│   │
│   ├── accounting/
│   │
│   └── shared/
│       ├── report-service.ts
│       └── notification-service.ts
│
│
├── store/
│   ├── auth-store.ts
│   ├── sidebar-store.ts
│   ├── notification-store.ts
│   └── theme-store.ts
│
│
├── types/
│   ├── auth.d.ts
│   ├── user.d.ts
│   ├── employee.d.ts
│   ├── student.d.ts
│   ├── academic.d.ts
│   ├── billing.d.ts
│   └── permissions.d.ts
│
│
├── middleware.ts
├── env.ts
├── declarations.d.ts
└── tsconfig.json