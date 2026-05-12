import CardList from "@/components/CardList";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

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
                        <h1 className="">User Badges</h1>
                    </div>

                    {/* info  */}
                    <div className="bg-primary-foreground p-4 rounded-lg">Info</div>

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