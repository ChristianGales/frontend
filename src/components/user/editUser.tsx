"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

// Validation Schema
const formSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Username must be at least 3 characters",
    })
    .max(20, {
      message: "Username exceeded max length",
    }),

  email: z.string().email({
    message: "Invalid email address",
  }),

  phone: z.string().min(11, {
    message: "Phone number must be at least 10 characters",
  }),

  location: z.string().min(2, {
    message: "Location is required",
  }),
  role: z.enum(["Admin", "User", "Moderator"]),
});

const EditUserPage = () => {

      const router = useRouter();

    // 1. define form
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      username: "john.doe",
      email: "test@mail.com",
      phone: "09876543111",
      location: "New York, NY",
      role: "Admin",
    },
  });

  // submit handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);

     router.push(`/user/${data.username}`);
  };

  return (

    


    <Sheet>
      <SheetTrigger asChild>
        <Button>Edit User</Button>
      </SheetTrigger>

      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Edit User</SheetTitle>

          <SheetDescription asChild>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                <Controller
                    name="username"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                        <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Login button not working on mobile"
                            autoComplete="off"
                        />
                       
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                    />


                    <Controller
                    name="phone"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                        <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Login button not working on mobile"
                            autoComplete="off"
                        />
                        
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                    />

                    <Controller
                    name="location"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Location</FieldLabel>
                        <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="Login button not working on mobile"
                            autoComplete="off"
                        />
                       
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                    />

                    <Controller
                    name="role"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>Role</FieldLabel>

                       <Select>
                        <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="User">User</SelectItem>
                            <SelectItem value="Moderator">Moderator</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                        </Select>
                        
                        
                        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                        </Field>
                    )}
                    />

                    <Button type="submit">Submit Changes</Button>

            </form>
          </SheetDescription>
        </SheetHeader>





{/* 
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-2 space-y-8"
        >
          <FieldGroup>
          
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="username">
                    Username
                  </FieldLabel>

                  <Input
                    {...field}
                    id="username"
                    placeholder="Enter username"
                    aria-invalid={fieldState.invalid}
                  />

                 
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

           
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">
                    Email
                  </FieldLabel>

                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

           
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="phone">
                    Phone
                  </FieldLabel>

                  <Input
                    {...field}
                    id="phone"
                    placeholder="Enter phone number"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

           
            <Controller
              name="location"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="location">
                    Location
                  </FieldLabel>

                  <Input
                    {...field}
                    id="location"
                    placeholder="Enter location"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />


           
          <Controller
              name="role"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="role">
                    Role
                  </FieldLabel>

                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Role" />
                    </SelectTrigger>
                    <SelectContent>
                        <lectItem value="Admin">Admin</SelectItem>
                        <SelectItem value="User">User</SelectItem>
                        <SelectItem value="Moderator">Moderator</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>


                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

          </FieldGroup>

        
          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form> */}
      </SheetContent>
    </Sheet>
  );
};

export default EditUserPage;