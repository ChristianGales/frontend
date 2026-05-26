"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Eye, MoreHorizontal, Pencil, Trash2 } from "lucide-react"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
 
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
        >
          <Eye className="size-4" />
        </Button>
      
        {/* Edit */}
        <Button
          size="icon"
          variant="ghost"
          className="size-8"
        >
          <Pencil className="size-4" />
        </Button>
      
        {/* Delete */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              className="size-8 text-red-500 hover:text-red-600"
            >
              <Trash2 className="size-4" />
            </Button>
          </AlertDialogTrigger>
      
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Delete User?
              </AlertDialogTitle>
      
              <AlertDialogDescription>
                This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
      
            <AlertDialogFooter>
              <AlertDialogCancel>
                Cancel
              </AlertDialogCancel>
      
              <AlertDialogAction className="bg-red-500 hover:bg-red-600 text-white" onClick={() => console.log("Delete")}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
      )
    },
  }
]