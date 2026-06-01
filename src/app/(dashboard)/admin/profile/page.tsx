"use client"

import {
  BadgeCheck, ChevronDown, CircleAlert, Lock, Shield, User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ProfilePage = () => {
  return (

    <div className="flex flex-col min-h-[calc(100vh-136px)] rounded-xl border border-dashed p-6 mb-4">
      <div className="flex-1 w-full h-full">

      <Tabs defaultValue="profile" className="w-full">
      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">

      <div className="rounded-2xl sm:rounded-3xl border bg-card p-2 sm:p-3">
        <TabsList className="flex h-fit w-full flex-row lg:flex-col items-stretch gap-1 lg:mt-8 sm:gap-2 bg-transparent p-0">

          <TabsTrigger
            value="profile"
            className="
              flex-1 lg:flex-none
              justify-center lg:justify-start gap-2 sm:gap-3 
              rounded-xl px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium
              data-[state=active]:bg-[var(--primary)]
              data-[state=active]:text-white
              data-[state=active]:shadow-none
              hover:bg-muted/70
              transition-colors
            "
          >
            <User className="h-4 w-4 shrink-0" />
            Profile
          </TabsTrigger>

          <TabsTrigger
            
            value="security"
            className="
              flex-1 lg:flex-none
              justify-center lg:justify-start gap-2 sm:gap-3 
              rounded-xl px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium
              data-[state=active]:bg-[var(--primary)]
              data-[state=active]:text-white
              data-[state=active]:shadow-none
              hover:bg-muted/70
              transition-all
            "
          >
            <Shield className="h-4 w-4 shrink-0" />
            Security
          </TabsTrigger>

        </TabsList>
      </div>

          <TabsContent value="profile" className="mt-0">
            <div className="rounded-3xl border bg-card p-6">

          <div className="mb-8 flex items-start gap-4 border-b pb-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
              <User className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold">
                  Profile Information
                </h1>

                <BadgeCheck className="h-4 w-4 text-primary shrink-0" />
              </div>

              <p className="text-sm text-muted-foreground">
                Manage your personal information and account details
              </p>
            </div>

            <Button
              variant="outline"
              className="rounded-full px-5 hidden sm:flex"
            >
              Edit Profile
            </Button>
          </div>

          <Button
            variant="outline"
            className="mb-6 w-full rounded-full sm:hidden"
          >
            Edit Profile
          </Button>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <Input defaultValue="Demo" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <Input defaultValue="Tester" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <Input defaultValue="admin+q2pkmk20@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <div className="flex overflow-hidden rounded-md border bg-background">
                    <button className="flex items-center gap-2 border-r px-3 text-sm">
                      🇺🇸 <ChevronDown className="h-4 w-4" />
                    </button>
                    <input
                      type="text"
                      placeholder="Enter your phone number"
                      className="flex-1 bg-transparent px-3 py-2 text-sm outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Country</label>
                  <button className="flex w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm text-muted-foreground">
                    <span>No country selected</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-0">
            <div className="rounded-3xl border bg-card p-6">

              <div className="mb-8 flex items-center gap-4 border-b pb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Change Password</h1>
                  <p className="text-sm text-muted-foreground">Update your password to keep your account secure</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium">Current Password</label>
                  <Input type="password" placeholder="Enter your current password" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">New Password</label>
                  <Input type="password" placeholder="Enter your new password" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Confirm New Password</label>
                  <Input type="password" placeholder="Confirm your new password" />
                </div>

                <div className="md:col-span-2 rounded-xl border border-[var(--danger)] p-4 flex gap-3 text-sm">
                  <span className="mt-0.5 text-[var(--danger)]">
                    <CircleAlert />
                  </span>
                  <div>
                    <p className="font-semibold text-[var(--danger)] mb-1">Security Notice</p>
                    <p className="text-[var(--danger)] leading-relaxed">
                      You will need to login again after changing your password.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button className="rounded-full text-white px-6">Change Password</Button>
              </div>
            </div>
          </TabsContent>

      </div>
    </Tabs>
        
      </div>

    </div>

   
  )
}

export default ProfilePage;