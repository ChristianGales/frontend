# NSC School Management System
```txt
src/
│
├── app/
│   │
│   ├── (public)/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── login/page.tsx
│   │
│   ├── (auth)/
│   │   ├── sign-in/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   ├── reset-password/page.tsx
│   │   └── layout.tsx
│   │
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   │
│   │   ├── admin/
│   │   │   ├── page.tsx
│   │   │   │
│   │   │   ├── users/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── create/page.tsx
│   │   │   │   └── [id]/page.tsx
│   │   │   │
│   │   │   ├── faculty/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── teachers/
│   │   │   │   ├── instructors/
│   │   │   │   └── assignments/
│   │   │   │
│   │   │   ├── academic/
│   │   │   │   ├── basic-ed/
│   │   │   │   └── college/
│   │   │   │
│   │   │   ├── reports/
│   │   │   ├── audit-logs/
│   │   │   └── settings/
│   │   │
│   │   ├── basic-ed/
│   │   │   │
│   │   │   ├── registrar/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── enrollment/
│   │   │   │   ├── students/
│   │   │   │   ├── sections/
│   │   │   │   ├── grading/
│   │   │   │   └── records/
│   │   │   │
│   │   │   ├── teachers/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── advisory/
│   │   │   │   ├── attendance/
│   │   │   │   ├── grades/
│   │   │   │   └── schedules/
│   │   │   │
│   │   │   ├── students/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── profile/
│   │   │   │   ├── grades/
│   │   │   │   ├── schedules/
│   │   │   │   ├── attendance/
│   │   │   │   └── billing/
│   │   │   │
│   │   │   └── guidance/
│   │   │
│   │   ├── college/
│   │   │   │
│   │   │   ├── registrar/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── enrollment/
│   │   │   │   ├── evaluation/
│   │   │   │   ├── schedules/
│   │   │   │   ├── curriculums/
│   │   │   │   └── records/
│   │   │   │
│   │   │   ├── instructors/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── classes/
│   │   │   │   ├── attendance/
│   │   │   │   ├── grades/
│   │   │   │   ├── schedules/
│   │   │   │   └── subject-loads/
│   │   │   │
│   │   │   ├── students/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── profile/
│   │   │   │   ├── grades/
│   │   │   │   ├── schedules/
│   │   │   │   ├── billing/
│   │   │   │   ├── evaluation/
│   │   │   │   └── subjects/
│   │   │   │
│   │   │   └── departments/
│   │   │
│   │   ├── accounting/
│   │   │   ├── page.tsx
│   │   │   ├── billing/
│   │   │   ├── payments/
│   │   │   ├── invoices/
│   │   │   ├── expenses/
│   │   │   └── reports/
│   │   │
│   │   └── shared/
│   │       ├── announcements/
│   │       ├── notifications/
│   │       ├── profile/
│   │       ├── settings/
│   │       └── help/
│   │
│   ├── api/
│   │   │
│   │   ├── auth/
│   │   │
│   │   ├── users/
│   │   │
│   │   ├── basic-ed/
│   │   │   ├── students/
│   │   │   ├── teachers/
│   │   │   ├── enrollment/
│   │   │   ├── grades/
│   │   │   └── sections/
│   │   │
│   │   ├── college/
│   │   │   ├── students/
│   │   │   ├── instructors/
│   │   │   ├── curriculums/
│   │   │   ├── schedules/
│   │   │   └── evaluation/
│   │   │
│   │   ├── accounting/
│   │   │
│   │   ├── reports/
│   │   │
│   │   └── notifications/
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── error.tsx
│
├── components/
│   │
│   ├── ui/
│   │
│   ├── shared/
│   │   ├── navbar.tsx
│   │   ├── app-sidebar.tsx
│   │   ├── mobile-sidebar.tsx
│   │   ├── footer.tsx
│   │   ├── page-header.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── data-table.tsx
│   │   └── loading-spinner.tsx
│   │
│   ├── dashboard/
│   │   ├── stat-card.tsx
│   │   ├── chart-card.tsx
│   │   ├── analytics-card.tsx
│   │   └── recent-activity.tsx
│   │
│   ├── forms/
│   │   │
│   │   ├── auth/
│   │   │   └── login-form.tsx
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
│   ├── tables/
│   │   ├── students-table.tsx
│   │   ├── faculty-table.tsx
│   │   ├── grades-table.tsx
│   │   ├── schedules-table.tsx
│   │   └── payments-table.tsx
│   │
│   └── charts/
│       ├── enrollment-chart.tsx
│       ├── finance-chart.tsx
│       └── attendance-chart.tsx
│
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   ├── prisma.ts
│   ├── permissions.ts
│   ├── role-access.ts
│   ├── utils.ts
│   │
│   ├── validations/
│   │   ├── auth.ts
│   │   ├── student.ts
│   │   ├── employee.ts
│   │   └── billing.ts
│   │
│   └── constants/
│       ├── roles.ts
│       ├── academic-division.ts
│       └── navigation.ts
│
├── hooks/
│   ├── use-auth.ts
│   ├── use-role.ts
│   ├── use-sidebar.ts
│   ├── use-theme.ts
│   └── use-user.ts
│
├── services/
│   │
│   ├── auth/
│   │
│   ├── basic-ed/
│   │   ├── enrollment-service.ts
│   │   ├── grading-service.ts
│   │   ├── section-service.ts
│   │   └── attendance-service.ts
│   │
│   ├── college/
│   │   ├── evaluation-service.ts
│   │   ├── curriculum-service.ts
│   │   ├── scheduling-service.ts
│   │   └── subject-load-service.ts
│   │
│   ├── accounting/
│   │   ├── billing-service.ts
│   │   ├── payment-service.ts
│   │   └── invoice-service.ts
│   │
│   └── shared/
│       ├── notification-service.ts
│       └── report-service.ts
│
├── store/
│   ├── auth-store.ts
│   ├── sidebar-store.ts
│   ├── notification-store.ts
│   └── theme-store.ts
│
├── types/
│   ├── auth.d.ts
│   ├── user.d.ts
│   ├── employee.d.ts
│   ├── student.d.ts
│   ├── academic.d.ts
│   └── billing.d.ts
│
├── middleware.ts
├── env.ts
└── middleware.ts
```
