// lib/dummy/president-dashboard.ts
// Mock data for the School President Executive Dashboard.
// Structured to mirror the shape a real backend API would return,
// and shaped directly for Recharts consumption (arrays of objects).

// ---------------------------------------------------------------------------
// ROW 1: "At-a-Glance" Summary
// ---------------------------------------------------------------------------

// 1. Total Enrollment — 5-year historical trend (sparkline)
export const enrollment_trend = [
  { year: "2021", total_enrollment: 4120 },
  { year: "2022", total_enrollment: 4385 },
  { year: "2023", total_enrollment: 4590 },
  { year: "2024", total_enrollment: 4810 },
  { year: "2025", total_enrollment: 5024 },
  { year: "2026", total_enrollment: 5247 },
];

export const total_enrollment_summary = {
  current_total: 5247,
  previous_total: 5024,
  percent_change: 4.4, // (5247 - 5024) / 5024 * 100
  trend: enrollment_trend,
};

// 2. Overall Retention Rate — radial progress toward 100%
export const retention_summary = {
  retention_rate: 87.6,
  target_rate: 100,
  previous_semester_rate: 85.2,
  radial_data: [
    {
      name: "Retention",
      value: 87.6,
      fill: "hsl(var(--chart-1))",
    },
  ],
};

// 3. Tuition Collection Target — progress bar
export const tuition_collection_summary = {
  collected_amount: 38_450_000, // PHP
  target_amount: 52_000_000, // PHP
  percent_collected: 73.9, // collected / target * 100
  currency: "PHP",
  semester: "AY 2025-2026, 2nd Semester",
};

// 4. Institutional GPA — badge with trend direction
export const institutional_gpa_summary = {
  current_gpa: 1.85, // Philippine 1.0 (highest) - 5.0 (lowest) scale
  previous_gpa: 1.92,
  change: -0.07, // negative = improvement on a 1.0-5.0 scale (lower is better)
  trend_direction: "up", // "up" = improving academic standing
};

// ---------------------------------------------------------------------------
// ROW 2: Strategic Trends
// ---------------------------------------------------------------------------

// 1. Multi-Year Enrollment vs. Graduation — stacked AreaChart
export const enrollment_vs_graduation = [
  { year: "2017", enrolled: 3280, graduated: 612 },
  { year: "2018", enrolled: 3450, graduated: 658 },
  { year: "2019", enrolled: 3690, graduated: 701 },
  { year: "2020", enrolled: 3540, graduated: 645 }, // pandemic dip
  { year: "2021", enrolled: 4120, graduated: 689 },
  { year: "2022", enrolled: 4385, graduated: 752 },
  { year: "2023", enrolled: 4590, graduated: 811 },
  { year: "2024", enrolled: 4810, graduated: 864 },
  { year: "2025", enrolled: 5024, graduated: 902 },
  { year: "2026", enrolled: 5247, graduated: 945 },
];

// 2. Population by Department — Donut Chart
export const population_by_department = [
  { department: "Information Technology", student_count: 1142, fill: "hsl(var(--chart-1))" },
  { department: "Business Administration", student_count: 1364, fill: "hsl(var(--chart-2))" },
  { department: "Education", student_count: 876, fill: "hsl(var(--chart-3))" },
  { department: "Engineering", student_count: 943, fill: "hsl(var(--chart-4))" },
  { department: "Criminology", student_count: 612, fill: "hsl(var(--chart-5))" },
  { department: "Basic Education", student_count: 310, fill: "hsl(var(--chart-6))" },
];

export const population_by_department_total = population_by_department.reduce(
  (sum, dept) => sum + dept.student_count,
  0
); // 5247

// ---------------------------------------------------------------------------
// ROW 3: Operational & Academic Health
// ---------------------------------------------------------------------------

// 1. Budget vs. Actual Expenses — horizontal grouped BarChart
export const budget_vs_actual_expenses = [
  {
    department: "Information Technology",
    allocated_budget: 4_200_000,
    actual_spend: 3_950_000,
  },
  {
    department: "Business Administration",
    allocated_budget: 5_100_000,
    actual_spend: 5_380_000, // over budget
  },
  {
    department: "Education",
    allocated_budget: 3_300_000,
    actual_spend: 2_890_000,
  },
  {
    department: "Engineering",
    allocated_budget: 4_800_000,
    actual_spend: 4_720_000,
  },
  {
    department: "Criminology",
    allocated_budget: 2_400_000,
    actual_spend: 2_150_000,
  },
  {
    department: "Basic Education",
    allocated_budget: 1_800_000,
    actual_spend: 1_865_000, // over budget
  },
  {
    department: "Registrar's Office",
    allocated_budget: 1_500_000,
    actual_spend: 1_410_000,
  },
];

// 2. Academic Risk / DFW Rates — stacked vertical BarChart (percentages per department)
export const dfw_rates_by_department = [
  {
    department: "Information Technology",
    drop_rate: 4.2,
    fail_rate: 6.8,
    withdraw_rate: 2.1,
  },
  {
    department: "Business Administration",
    drop_rate: 3.1,
    fail_rate: 4.5,
    withdraw_rate: 1.8,
  },
  {
    department: "Education",
    drop_rate: 2.4,
    fail_rate: 3.2,
    withdraw_rate: 1.2,
  },
  {
    department: "Engineering",
    drop_rate: 6.7,
    fail_rate: 9.4,
    withdraw_rate: 3.5,
  },
  {
    department: "Criminology",
    drop_rate: 3.8,
    fail_rate: 5.1,
    withdraw_rate: 2.0,
  },
  {
    department: "Basic Education",
    drop_rate: 1.5,
    fail_rate: 2.0,
    withdraw_rate: 0.8,
  },
];

// ---------------------------------------------------------------------------
// Aggregated export — mirrors a single API response payload shape
// ---------------------------------------------------------------------------

export const mockData = {
  summary: {
    total_enrollment: total_enrollment_summary,
    retention: retention_summary,
    tuition_collection: tuition_collection_summary,
    institutional_gpa: institutional_gpa_summary,
  },
  strategic_trends: {
    enrollment_vs_graduation,
    population_by_department,
    population_by_department_total,
  },
  operational_health: {
    budget_vs_actual_expenses,
    dfw_rates_by_department,
  },
};

export default mockData;