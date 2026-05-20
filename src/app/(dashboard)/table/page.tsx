import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1c2a",
    amount: 250,
    status: "success",
    email: "john@example.com",
  },
  {
    id: "91ab7d44",
    amount: 320,
    status: "failed",
    email: "sarah@example.com",
  },
  {
    id: "82ff3c11",
    amount: 540,
    status: "success",
    email: "alex@example.com",
  },
  {
    id: "63de9b77",
    amount: 180,
    status: "pending",
    email: "maria@example.com",
  },
  {
    id: "74bc2e90",
    amount: 760,
    status: "success",
    email: "david@example.com",
  },
  {
    id: "15aa4d22",
    amount: 90,
    status: "failed",
    email: "jane@example.com",
  },
  {
    id: "33cd8f61",
    amount: 450,
    status: "pending",
    email: "mark@example.com",
  },
  {
    id: "84ef7a99",
    amount: 210,
    status: "success",
    email: "anna@example.com",
  },
  {
    id: "27bc1d55",
    amount: 630,
    status: "failed",
    email: "paul@example.com",
  },
  {
    id: "18df4e81",
    amount: 520,
    status: "success",
    email: "kate@example.com",
  },
  {
    id: "66ac2b49",
    amount: 145,
    status: "pending",
    email: "leo@example.com",
  },
  {
    id: "93ef0c72",
    amount: 880,
    status: "success",
    email: "emma@example.com",
  },
  {
    id: "45ba7e10",
    amount: 370,
    status: "failed",
    email: "oliver@example.com",
  },
  {
    id: "77ca8f34",
    amount: 290,
    status: "pending",
    email: "mia@example.com",
  },
  {
    id: "24de6b51",
    amount: 610,
    status: "success",
    email: "noah@example.com",
  },
  {
    id: "11ab9f87",
    amount: 410,
    status: "failed",
    email: "ava@example.com",
  },
  {
    id: "52ff3d20",
    amount: 330,
    status: "success",
    email: "liam@example.com",
  },
  {
    id: "38cd1a76",
    amount: 275,
    status: "pending",
    email: "sophia@example.com",
  },
  {
    id: "69ef4c88",
    amount: 950,
    status: "success",
    email: "ethan@example.com",
  },
  {
    id: "80ba5d17",
    amount: 125,
    status: "failed",
    email: "isabella@example.com",
  },
  {
    id: "41dc8e92",
    amount: 560,
    status: "pending",
    email: "james@example.com",
  },
  {
    id: "95ab2f64",
    amount: 740,
    status: "success",
    email: "charlotte@example.com",
  },
  {
    id: "57ef9d31",
    amount: 215,
    status: "failed",
    email: "benjamin@example.com",
  },
  {
    id: "12cd7a48",
    amount: 485,
    status: "success",
    email: "amelia@example.com",
  },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="flex flex-col min-h-[calc(100vh-136px)] rounded-xl border border-dashed p-6 mb-4">
      <div className="mb-6 pb-4 ">
        <h1 className="text-3xl font-bold tracking-tight ">
          Payments
        </h1>
      </div>
      <div className="flex-1 w-full h-full">
        <div className="w-full">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}