"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react"

 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Tooltip } from "radix-ui"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-center">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="text-center font-medium">{formatted}</div>
    },
  },

  {
    accessorKey: "actions",
    id: "actions",
  
    header: () => (
      <div className="text-center">
        Actions
      </div>
    ),
  
    cell: ({ row }) => {
      const payment = row.original
  
      return (
        <div className="flex items-center justify-center gap-1">
  
          {/* View */}
          <Button
            size="icon"
            variant="ghost"
            className="size-8"
            onClick={() => console.log("View", payment.id)}
          >
            <Eye className="size-4" />
          </Button>
  
          {/* Edit */}
          <Button
            size="icon"
            variant="ghost"
            className="size-8"
            onClick={() => console.log("Edit", payment.id)}
          >
            <Pencil className="size-4" />
          </Button>
  
          {/* Delete */}
          <Button
            size="icon"
            variant="ghost"
            className="size-8 text-red-500 hover:text-red-600"
            onClick={() => console.log("Delete", payment.id)}
          >
            <Trash2 className="size-4" />
          </Button>
  
        </div>
      )
    },
  }
]