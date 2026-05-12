"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "radix-ui";




//1. validate user input zod for validation
const formSchema = z.object({
    username: z.string().min(3, {message: "Username must be 2 or more characters"})
        .max(20, {message: "Username exceed the max value"}),
    email: z.string().email({message: "Invalid email address"}),
    phone: z.string().min(10, {message: "Phone number must be at least 10 characters"}),
    location: z.string().min(2),
    role: z.enum(["Admin", "User", "Moderator"], {message: "Invalid role selected"}),
});




const EditUserPage = () => {

    //2. form state management react-hook-form
    //hardcoded for now
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "john.doe",
            email: "test@mail.com",
            phone: "098765431",
            location: "New York, NY",
            role: "Admin",
        },
    })


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>Edit User</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        {/* fix form  */}
                        <Form {...form}>
                            <form className="space-y-8">
                                <FormField control={form.control} name="username"></FormField>
                            </form>
                        </Form>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}

export default EditUserPage;