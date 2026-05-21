    import {
    BadgeCheck,
    ChevronDown,
    Globe,
    Lock,
    Settings,
    Shield,
    User,
    } from "lucide-react"

    import { Button } from "@/components/ui/button"
    import { Input } from "@/components/ui/input"

    const ProfilePage = () => {
    return (
    


        <div className="grid gap-6 mb-4 lg:grid-cols-[260px_1fr]">
        
        {/* SIDEBAR */}
        <div className="rounded-3xl border bg-card p-4">
            <div className="space-y-2">
            
            <button className="flex w-full items-center gap-3 rounded-xl bg-muted px-4 py-3 text-sm font-medium">
                <User className="h-4 w-4" />
                Profile
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-muted">
                <Shield className="h-4 w-4" />
                Security
            </button>

            </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="rounded-3xl border bg-card p-6">
            
            {/* HEADER */}
            <div className="mb-8 flex flex-col gap-4 border-b pb-6 md:flex-row md:items-start md:justify-between">
            
            <div className="flex items-center gap-4">
                
                {/* Avatar */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <User className="h-8 w-8 text-muted-foreground" />
                </div>

                {/* User Info */}
                <div>
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold">Demo Tester</h1>

                    <BadgeCheck className="h-5 w-5 text-primary" />
                </div>

                <p className="text-sm text-muted-foreground">
                    admin+q2pkmk20@example.com
                </p>
                </div>
            </div>

            {/* Edit Button */}
            <Button
                variant="outline"
                className="rounded-full px-5"
            >
                Edit Profile
            </Button>
            </div>

            {/* FORM */}
            <div className="grid gap-6 md:grid-cols-2">
            
            {/* First Name */}
            <div className="space-y-2">
                <label className="text-sm font-medium">
                First Name
                </label>

                <Input defaultValue="Demo" />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
                <label className="text-sm font-medium">
                Last Name
                </label>

                <Input defaultValue="Tester" />
            </div>

            {/* Email */}
            <div className="space-y-2">
                <label className="text-sm font-medium">
                Email Address
                </label>

                <Input defaultValue="admin+q2pkmk20@example.com" />
            </div>

            {/* Phone */}
            <div className="space-y-2">
                <label className="text-sm font-medium">
                Phone Number
                </label>

                <div className="flex overflow-hidden rounded-md border bg-background">
                
                {/* Country Code */}
                <button className="flex items-center gap-2 border-r px-3 text-sm">
                    🇺🇸
                    <ChevronDown className="h-4 w-4" />
                </button>

                <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
                />
                </div>
            </div>

            {/* Country */}
            <div className="space-y-2 md:col-span-1">
                <label className="text-sm font-medium">
                Country
                </label>

                <button className="flex w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm text-muted-foreground">
                <span>No country selected</span>

                <ChevronDown className="h-4 w-4" />
                </button>
            </div>
            </div>
        </div>
        </div>
    )
    }

    export default ProfilePage;