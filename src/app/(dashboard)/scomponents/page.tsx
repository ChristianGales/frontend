"use client"
import {
    Plus,
    Download,
    Upload,
    Settings,
    Trash2,
    Pencil,
    Eye,
    Check,
    Share2,
    Heart,
    Bookmark,
    Search,
    UploadCloud,
  } from "lucide-react"

import { appAlert } from "@/lib/alerts"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const SampleComponentPage = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-136px)] rounded-xl border border-dashed p-6 mb-4">
      <div className="mb-2 pb-2 ">
        <h1 className="text-3xl font-bold tracking-tight ">
          Sample Components
        </h1>
      </div>
      <div className="flex-1 w-full h-full">
        <div className="flex flex-col gap-6">

            {/* TOAST ALERTS */}
            <div className="rounded-xl border bg-background p-6 space-y-4">

                <div>
                <h2 className="text-xl font-semibold">
                    Toast Alerts
                </h2>

                <p className="text-sm text-muted-foreground">
                    Test different toast variants.
                </p>
                </div>

                <div className="flex flex-wrap gap-4">

                <Button
                    className="bg-[var(--success)] 
                    text-[var(--success-foreground)]
                    hover:bg-[var(--success)]/80"
                    onClick={() =>
                    appAlert.success(
                        "Success!",
                        "Action completed successfully."
                    )
                    }
                >
                    Success Toast
                </Button>

                <Button
                    className="bg-[var(--danger)] 
                    text-[var(--danger-foreground)] 
                    hover:bg-[var(--danger)]/80"
                    onClick={() =>
                    appAlert.error(
                        "Error!",
                        "Something went wrong."
                    )
                    }
                >
                    Error Toast
                </Button>

                <Button
                    className="bg-[var(--warning)] 
                    text-[var(--warning-foreground)]
                    hover:bg-[var(--warning)]/80"
                    onClick={() =>
                    appAlert.warning(
                        "Warning!",
                        "Please double check your input."
                    )
                    }
                >
                    Warning Toast
                </Button>

                <Button
                    className="bg-[var(--info)] 
                    text-[var(--info-foreground)] 
                    hover:bg-[var(--info)]/80"
                    onClick={() =>
                    appAlert.info(
                        "Info",
                        "Here is some useful information."
                    )
                    }
                >
                    Info Toast
                </Button>

                </div>
            </div>

            {/* BUTTONS */}
            <div className="rounded-xl border bg-background p-6 space-y-6">

            <div>
                <h2 className="text-xl font-semibold">
                Buttons
                </h2>

                <p className="text-sm text-muted-foreground">
                Different button variants with icons.
                </p>
            </div>

            {/* STANDARD BUTTONS */}
            <div className="space-y-3">

                <h3 className="text-sm font-medium text-muted-foreground">
                Standard Buttons
                </h3>

                <div className="flex flex-wrap gap-4">

                <Button>
                    Default
                </Button>

                <Button variant="secondary">
                    Secondary
                </Button>

                <Button variant="outline">
                    Outline
                </Button>

                <Button variant="ghost">
                    Ghost
                </Button>

                <Button variant="destructive">
                    Destructive
                </Button>

                <Button disabled>
                    Disabled
                </Button>

                </div>
            </div>

            {/* BUTTONS WITH ICONS */}
            <div className="space-y-3">

                <h3 className="text-sm font-medium text-muted-foreground">
                Buttons With Icons
                </h3>

                <div className="flex flex-wrap gap-4">
                {/* Primary */}
                <Button
                    className="
                    bg-[var(--primary)]
                    text-white
                    hover:opacity-90
                    shadow-sm
                    transition-all
                    "
                >
                    <Plus className="h-4 w-4" />
                    Add User
                </Button>

                {/* Outline */}
                <Button
                    className="
                    border
                    border-[var(--primary)]
                    bg-transparent
                    text-[var(--primary)]
                    hover:bg-[var(--primary)]
                    hover:text-white
                    shadow-sm
                    transition-all
                    "
                >
                    <Plus className="h-4 w-4" />
                    Add User
                </Button>

                {/* Secondary */}
                <Button
                    className="
                    bg-orange-500
                    text-white
                    hover:bg-orange-600
                    shadow-sm
                    transition-all
                    "
                >
                    <Plus className="h-4 w-4" />
                    Secondary
                </Button>

                {/* Destructive */}
                <Button
                    className="
                    bg-red-500
                    text-white
                    hover:bg-red-600
                    shadow-sm
                    transition-all
                    "
                >
                    <Plus className="h-4 w-4" />
                    Destructive
                </Button>

                {/* Export */}
                <Button
                    className="
                    bg-muted
                    text-foreground
                    hover:bg-muted/80
                    shadow-sm
                    transition-all
                    "
                >
                    <Plus className="h-4 w-4" />
                    Back
                </Button>


                </div>
            </div>

            {/* ICON ONLY BUTTONS */}
            <div className="space-y-3">

                <h3 className="text-sm font-medium text-muted-foreground">
                Icon Only Buttons
                </h3>

                <div className="flex flex-wrap gap-4">

                {/* EDIT */}
                <Button
                    size="icon"
                    variant="outline"
                >
                    <Pencil className="h-4 w-4" />
                </Button>

                {/* DELETE */}
                <Button
                    size="icon"
                    variant="destructive"
                >
                    <Trash2 className="h-4 w-4" />
                </Button>

                {/* VIEW */}
                <Button
                    size="icon"
                    variant="secondary"
                >
                    <Eye className="h-4 w-4" />
                </Button>

                {/* SETTINGS */}
                <Button
                    size="icon"
                    variant="ghost"
                >
                    <Settings className="h-4 w-4" />
                </Button>

                {/* DOWNLOAD */}
                <Button
                    size="icon"
                    className="
                    bg-[var(--info)]
                    text-[var(--info-foreground)]
                    
                    "
                >
                    <Download className="h-4 w-4" />
                </Button>

                {/* SUCCESS */}
                <Button
                    size="icon"
                    className="
                    bg-[var(--success)]
                    text-[var(--success-foreground)]
                    
                    "
                >
                    <Check className="h-4 w-4" />
                </Button>

                </div>
            </div>

            </div>  

            {/* BADGES */}
            <div className="rounded-xl border bg-background p-6 space-y-4">
            <div>
                <h2 className="text-xl font-semibold">
                Badges
                </h2>

                <p className="text-sm text-muted-foreground">
                Different badge styles.
                </p>
            </div>

            <div className="flex flex-wrap gap-4">

                {/* Primary */}
                <Badge
                className="
                    rounded-full
                    bg-[var(--primary)]
                    px-4 py-1
                    text-white
                    hover:opacity-90
                "
                >
                Primary
                </Badge>

                {/* Success */}
                <Badge
                className="
                    rounded-full
                    bg-emerald-500
                    px-4 py-1
                    text-white
                    hover:opacity-90
                "
                >
                Success
                </Badge>

                {/* Error */}
                <Badge
                className="
                    rounded-full
                    bg-red-500
                    px-4 py-1
                    text-white
                    hover:opacity-90
                "
                >
                Error
                </Badge>

                {/* Warning */}
                <Badge
                className="
                    rounded-full
                    bg-amber-500
                    px-4 py-1
                    text-white
                    hover:opacity-90
                "
                >
                Warning
                </Badge>

                {/* Info */}
                <Badge
                className="
                    rounded-full
                    bg-sky-500
                    px-4 py-1
                    text-white
                    hover:opacity-90
                "
                >
                Info
                </Badge>

                {/* Light */}
                <Badge
                className="
                    rounded-full
                    bg-slate-200
                    px-4 py-1
                    text-slate-800
                    hover:opacity-90
                "
                >
                Light
                </Badge>

                {/* Dark */}
                <Badge
                className="
                    rounded-full
                    bg-slate-800
                    px-4 py-1
                    text-white
                    hover:opacity-90
                "
                >
                Dark
                </Badge>

            </div>
            </div>

            {/* CARDS */}
            <div className="rounded-xl border bg-background p-6 space-y-4">

                <div>
                <h2 className="text-xl font-semibold">
                    Cards
                </h2>

                <p className="text-sm text-muted-foreground">
                    Large and medium card examples.
                </p>
                </div>

                {/* LARGE CARDS */}
                <div className="grid gap-4 md:grid-cols-2">

                <Card>
                    <CardHeader>
                    <CardTitle>
                        Large Card
                    </CardTitle>

                    <CardDescription>
                        Example large card component.
                    </CardDescription>
                    </CardHeader>

                    <CardContent>
                    <p className="text-sm text-muted-foreground">
                        This card can be used for
                        analytics, summaries, or
                        dashboard widgets.
                    </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                    <CardTitle>
                        Analytics Card
                    </CardTitle>

                    <CardDescription>
                        Dashboard statistics example.
                    </CardDescription>
                    </CardHeader>

                    <CardContent>
                    <div className="space-y-2">
                        <p className="text-4xl font-bold">
                        12,540
                        </p>

                        <p className="text-sm text-muted-foreground">
                        Total Users
                        </p>
                    </div>
                    </CardContent>
                </Card>

                </div>

                {/* MEDIUM CARDS */}
                <div className="grid gap-4 md:grid-cols-3">

                <Card>
                    <CardHeader>
                    <CardTitle>
                        Revenue
                    </CardTitle>
                    </CardHeader>

                    <CardContent>
                    <p className="text-2xl font-bold">
                        ₱45,000
                    </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                    <CardTitle>
                        Orders
                    </CardTitle>
                    </CardHeader>

                    <CardContent>
                    <p className="text-2xl font-bold">
                        1,250
                    </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                    <CardTitle>
                        Customers
                    </CardTitle>
                    </CardHeader>

                    <CardContent>
                    <p className="text-2xl font-bold">
                        320
                    </p>
                    </CardContent>
                </Card>

                </div>
            </div>

            {/* IMAGE CARDS */}
            <div className="rounded-xl border bg-background p-6 space-y-6">

            <div>
                <h2 className="text-xl font-semibold">
                Image Cards
                </h2>

                <p className="text-sm text-muted-foreground">
                Cards with images, descriptions, and actions.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                {/* CARD 1 */}
                <Card className="overflow-hidden">

                <div className="aspect-video overflow-hidden">
                    <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    alt="Workspace"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <CardHeader>
                    <CardTitle>
                    Workspace Setup
                    </CardTitle>

                    <CardDescription>
                    Modern productivity workspace setup.
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex items-center justify-between gap-3">

                    <Button className="flex-1">
                    View Details
                    </Button>

                    <Button
                    size="icon"
                    variant="outline"
                    >
                    <Heart className="h-4 w-4" />
                    </Button>

                </CardContent>
                </Card>

                {/* CARD 2 */}
                <Card className="overflow-hidden">

                <div className="aspect-video overflow-hidden">
                    <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    alt="Technology"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <CardHeader>
                    <CardTitle>
                    Technology
                    </CardTitle>

                    <CardDescription>
                    Latest gadgets and innovations.
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex gap-3">

                    <Button
                    className="flex-1"
                    variant="secondary"
                    >
                    Explore
                    </Button>

                    <Button
                    size="icon"
                    variant="outline"
                    >
                    <Bookmark className="h-4 w-4" />
                    </Button>

                </CardContent>
                </Card>

                {/* CARD 3 */}
                <Card className="overflow-hidden">

                <div className="aspect-video overflow-hidden">
                    <img
                    src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                    alt="Nature"
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <CardHeader>
                    <CardTitle>
                    Nature
                    </CardTitle>

                    <CardDescription>
                    Beautiful outdoor scenery collection.
                    </CardDescription>
                </CardHeader>

                <CardContent className="flex gap-3">

                    <Button
                    className="
                        flex-1
                        bg-[var(--success)]
                        text-[var(--success-foreground)]
                        
                    "
                    >
                    Download
                    </Button>

                    <Button
                    size="icon"
                    variant="ghost"
                    >
                    <Share2 className="h-4 w-4" />
                    </Button>

                </CardContent>
                </Card>

            </div>

            </div>

            {/* MODAL WITH FORM */}
            <div className="rounded-xl border bg-background p-6 space-y-6">

            <div>
                <h2 className="text-xl font-semibold">
                Modal Forms
                </h2>

                <p className="text-sm text-muted-foreground">
                Dialog modal with form inputs and actions.
                </p>
            </div>

            <Dialog>

                {/* OPEN BUTTON */}
                <DialogTrigger asChild>
                <Button>
                    Open Form Modal
                </Button>
                </DialogTrigger>

                {/* MODAL CONTENT */}
                <DialogContent className="sm:max-w-[500px]">

                <DialogHeader>
                    <DialogTitle>
                    Create User
                    </DialogTitle>

                    <DialogDescription>
                    Fill in the information below.
                    </DialogDescription>
                </DialogHeader>

                {/* FORM */}
                <div className="grid gap-4 py-4">

                    {/* NAME */}
                    <div className="grid gap-2">

                    <Label htmlFor="name">
                        Full Name
                    </Label>

                    <Input
                        id="name"
                        placeholder="John Doe"
                    />

                    </div>

                    {/* EMAIL */}
                    <div className="grid gap-2">

                    <Label htmlFor="email">
                        Email Address
                    </Label>

                    <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                    />

                    </div>

                    {/* ROLE */}
                    <div className="grid gap-2">

                    <Label htmlFor="role">
                        Role
                    </Label>

                    <Input
                        id="role"
                        placeholder="Administrator"
                    />

                    </div>

                    {/* DESCRIPTION */}
                    <div className="grid gap-2">

                    <Label htmlFor="description">
                        Description
                    </Label>

                    <Textarea
                        id="description"
                        placeholder="Enter additional details..."
                    />

                    </div>

                </div>

                {/* FOOTER */}
                <DialogFooter>

                    <Button
                    variant="outline"
                    >
                    Cancel
                    </Button>

                    <Button
                    onClick={() =>
                        appAlert.success(
                        "User Created",
                        "The user was successfully added."
                        )
                    }
                    >
                    Save User
                    </Button>

                </DialogFooter>

                </DialogContent>

            </Dialog>

            </div>

            {/* DIALOG SIZES */}
            <div className="rounded-xl border bg-background p-6 space-y-6">

            <div>
                <h2 className="text-xl font-semibold">
                Dialog Sizes
                </h2>

                <p className="text-sm text-muted-foreground">
                Small, medium, and large dialog examples.
                </p>
            </div>

            <div className="flex flex-wrap gap-4">

                {/* SMALL DIALOG */}
                <Dialog>

                <DialogTrigger asChild>
                    <Button variant="outline">
                    Small Dialog
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-sm">

                    <DialogHeader>
                    <DialogTitle>
                        Small Dialog
                    </DialogTitle>

                    <DialogDescription>
                        Compact dialog size.
                    </DialogDescription>
                    </DialogHeader>

                    <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                        Perfect for confirmations,
                        alerts, and simple actions.
                    </p>
                    </div>

                    <DialogFooter>
                    <Button size="sm">
                        Continue
                    </Button>
                    </DialogFooter>

                </DialogContent>

                </Dialog>

                {/* MEDIUM DIALOG */}
                <Dialog>

                <DialogTrigger asChild>
                    <Button variant="secondary">
                    Medium Dialog
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[600px]">

                    <DialogHeader>
                    <DialogTitle>
                        Medium Dialog
                    </DialogTitle>

                    <DialogDescription>
                        Standard form modal size.
                    </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4 py-4">

                    <div className="grid gap-2">
                        <Label>Name</Label>

                        <Input placeholder="John Doe" />
                    </div>

                    <div className="grid gap-2">
                        <Label>Email</Label>

                        <Input placeholder="john@example.com" />
                    </div>

                    </div>

                    <DialogFooter>

                    <Button variant="outline">
                        Cancel
                    </Button>

                    <Button>
                        Save Changes
                    </Button>

                    </DialogFooter>

                </DialogContent>

                </Dialog>

                {/* LARGE DIALOG */}
                <Dialog>

                <DialogTrigger asChild>
                    <Button
                    className="
                        bg-[var(--info)]
                        text-[var(--info-foreground)]
                        
                    "
                    >
                    Large Dialog
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-4xl">

                    <DialogHeader>
                    <DialogTitle>
                        Large Dialog
                    </DialogTitle>

                    <DialogDescription>
                        Large modal for tables,
                        dashboards, and complex forms.
                    </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-6 py-4 md:grid-cols-2">

                    <Card>
                        <CardHeader>
                        <CardTitle>
                            Analytics
                        </CardTitle>
                        </CardHeader>

                        <CardContent>
                        <p className="text-4xl font-bold">
                            12,450
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Total Users
                        </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                        <CardTitle>
                            Revenue
                        </CardTitle>
                        </CardHeader>

                        <CardContent>
                        <p className="text-4xl font-bold">
                            ₱95,000
                        </p>

                        <p className="text-sm text-muted-foreground">
                            Monthly Revenue
                        </p>
                        </CardContent>
                    </Card>

                    </div>

                    <DialogFooter>

                    <Button variant="outline">
                        Close
                    </Button>

                    <Button>
                        Save
                    </Button>

                    </DialogFooter>

                </DialogContent>

                </Dialog>

            </div>

            </div>

            {/* INPUT ELEMENTS */}
            <div className="rounded-xl border bg-background p-6 space-y-6">

            <div>
                <h2 className="text-xl font-semibold">
                Input Elements
                </h2>

                <p className="text-sm text-muted-foreground">
                Common form input components.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">

                {/* TEXT INPUT */}
                <div className="space-y-2">

                <Label htmlFor="text">
                    Text Input
                </Label>

                <Input
                    id="text"
                    placeholder="Enter text..."
                />

                </div>

                {/* EMAIL INPUT */}
                <div className="space-y-2">

                <Label htmlFor="email">
                    Email Input
                </Label>

                <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                />

                </div>

                {/* PASSWORD INPUT */}
                <div className="space-y-2">

                <Label htmlFor="password">
                    Password Input
                </Label>

                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                />

                </div>


                {/* NUMBER INPUT */}
                <div className="space-y-2">

                <Label htmlFor="number">
                    Number Input
                </Label>

                <Input
                    id="number"
                    type="number"
                    placeholder="0"
                />

                </div>

                {/* DISABLED INPUT */}
                <div className="space-y-2">

                <Label htmlFor="disabled">
                    Disabled Input
                </Label>

                <Input
                    id="disabled"
                    disabled
                    placeholder="Disabled input"
                />

                </div>

                {/* READONLY INPUT */}
                <div className="space-y-2">

                <Label htmlFor="readonly">
                    Readonly Input
                </Label>

                <Input
                    id="readonly"
                    readOnly
                    value="Readonly value"
                />

                </div>

            </div>

            {/* TEXTAREA */}
            <div className="space-y-2">

                <Label htmlFor="textarea">
                Textarea
                </Label>

                <Textarea
                id="textarea"
                placeholder="Type your message here..."
                />

            </div>

            {/* INPUT WITH ICON */}
            <div className="space-y-2">

                <Label htmlFor="search">
                Search Input
                </Label>

                <div className="relative">

                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    id="search"
                    placeholder="Search..."
                    className="pl-10"
                />

                </div>

            </div>

            {/* INPUT SIZES */}
            <div className="space-y-4">

                <h3 className="text-lg font-semibold">
                Input Sizes
                </h3>

                <div className="space-y-3">

                <Input
                    className="h-8"
                    placeholder="Small Input"
                />

                <Input
                    placeholder="Default Input"
                />

                <Input
                    className="h-12"
                    placeholder="Large Input"
                />

                </div>


                {/* FILE INPUTS */}
                <div className="rounded-xl border bg-background p-6 space-y-6">

                <div>
                    <h2 className="text-xl font-semibold">
                    File Inputs
                    </h2>

                    <p className="text-sm text-muted-foreground">
                    Different file upload input styles.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">

                    {/* DEFAULT FILE INPUT */}
                    <div className="space-y-2">

                    <Label htmlFor="file">
                        Default File Input
                    </Label>

                    <Input
                        id="file"
                        type="file"
                    />

                    </div>

                    {/* MULTIPLE FILE INPUT */}
                    <div className="space-y-2">

                    <Label htmlFor="multiple-file">
                        Multiple Files
                    </Label>

                    <Input
                        id="multiple-file"
                        type="file"
                        multiple
                    />

                    </div>

                    {/* IMAGE FILE INPUT */}
                    <div className="space-y-2">

                    <Label htmlFor="image-file">
                        Image Upload
                    </Label>

                    <Input
                        id="image-file"
                        type="file"
                        accept="image/*"
                    />

                    </div>

                    {/* PDF FILE INPUT */}
                    <div className="space-y-2">

                    <Label htmlFor="pdf-file">
                        PDF Upload
                    </Label>

                    <Input
                        id="pdf-file"
                        type="file"
                        accept=".pdf"
                    />

                    </div>

                </div>

                {/* CUSTOM FILE INPUT */}
                <div className="space-y-2">

                    <Label>
                    Custom Upload Button
                    </Label>

                    <label
                    htmlFor="custom-file"
                    className="
                        flex
                        cursor-pointer
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        border
                        border-dashed
                        p-6
                        transition-colors
                        hover:bg-muted/50
                    "
                    >

                    <Upload className="h-5 w-5" />

                    <span className="text-sm font-medium">
                        Click to upload files
                    </span>

                    <Input
                        id="custom-file"
                        type="file"
                        className="hidden"
                    />

                    </label>

                </div>

                {/* DRAG & DROP STYLE */}
                <div className="space-y-2">

                    <Label>
                    Drag & Drop Style
                    </Label>

                    <div
                    className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-3
                        rounded-xl
                        border-2
                        border-dashed
                        p-10
                        text-center
                    "
                    >

                    <UploadCloud className="h-10 w-10 text-muted-foreground" />

                    <div>
                        <p className="font-medium">
                        Drag and drop files here
                        </p>

                        <p className="text-sm text-muted-foreground">
                        PNG, JPG, PDF up to 10MB
                        </p>
                    </div>

                    <Button variant="outline">
                        Browse Files
                    </Button>

                    </div>

                </div>

            </div>
            </div>

        
            </div>
        </div>


      </div>
    </div>
  );
};

export default SampleComponentPage;