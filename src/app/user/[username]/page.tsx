import CardList from "@/components/CardList";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BadgeCheck } from "lucide-react";

const SingleUserpage = () => {
    return (
        <div className="">
            {/* change this to a reuseble component too long for each page */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/users">
                        Components
                    </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage>User 1</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* containter */}
            <div className="mt-4 flex flex-col xl:flex-row gap-8">
            
            {/* left */}
                <div className="w-full xl:w-1/3 space-y-6">
                    {/* user badges */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Badges</h1>
                        
                            {/* hover cards badges*/}
                            <div className="flex gap-4 mt-4">
                                <HoverCard>
                                    <HoverCardTrigger>
                                        <BadgeCheck size="36" className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"/>
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                       <h1 className="font-bold mb-2">Verified User</h1>
                                       <p className="text-sm text-muted-foreground">This user has been verfied by me</p>
                                    </HoverCardContent>
                                </HoverCard>

                                <HoverCard>
                                    <HoverCardTrigger>
                                        <BadgeCheck size="36" className="rounded-full bg-red-500/30 border-1 border-red-500/50 p-2"/>
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                       <h1 className="font-bold mb-2">Verified User</h1>
                                       <p className="text-sm text-muted-foreground">This user has been verfied by me</p>
                                    </HoverCardContent>
                                </HoverCard>

                                <HoverCard>
                                    <HoverCardTrigger>
                                        <BadgeCheck size="36" className="rounded-full bg-green-500/30 border-1 border-blue-green/50 p-2"/>
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                       <h1 className="font-bold mb-2">Verified User</h1>
                                       <p className="text-sm text-muted-foreground">This user has been verfied by me</p>
                                    </HoverCardContent>
                                </HoverCard>

                                <HoverCard>
                                    <HoverCardTrigger>
                                        <BadgeCheck size="36" className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"/>
                                    </HoverCardTrigger>
                                    <HoverCardContent>
                                       <h1 className="font-bold mb-2">Verified User</h1>
                                       <p className="text-sm text-muted-foreground">This user has been verfied by me</p>
                                    </HoverCardContent>
                                </HoverCard>
                            </div>
                    </div>

                    {/* info  */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        
                         <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">User Information</h1>

                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button>Edit User</Button>
                                    </SheetTrigger>
                                        <SheetContent>
                                            <SheetHeader>
                                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                                            <SheetDescription>This action cannot be undone.</SheetDescription>
                                            </SheetHeader>
                                        </SheetContent>
                                </Sheet>

                         </div>
                         <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile Completion</p>
                                <Progress value={66}/>
                            </div>
                            <div className="flex item-center gap-2">
                                <span className="font-bold">Username</span>
                                <span>John.doe</span>
                            </div>
                             <div className="flex item-center gap-2">
                                <span className="font-bold">Email</span>
                                <span>John.doe</span>
                            </div>

                             <div className="flex item-center gap-2">
                                <span className="font-bold">Phone</span>
                                <span>John.doe</span>
                            </div>

                             <div className="flex item-center gap-2">
                                <span className="font-bold">Location</span>
                                <span>John.doe</span>
                            </div>

                             <div className="flex item-center gap-2">
                                <span className="font-bold">Role</span>
                                <Badge>Admin</Badge>
                            </div>
                         </div>
                         <p className="text-sm text-muted-foreground">Joined on 202501.01</p>
                    </div>

                     {/* card list  */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transaction"></CardList>
                    </div>
                </div>


            {/* right */}
                <div className="w-full xl:w-2/3 space-y-6">
                    {/* user card */}
                     <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>

                    {/* charts */}
                     <div className="bg-primary-foreground p-4 rounded-lg">Charts</div>
                </div>
            </div>
            
        </div>
    );
    
};

export default SingleUserpage;