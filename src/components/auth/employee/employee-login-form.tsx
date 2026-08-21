import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function EmployeeLoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Employee Login</h1>

                <p className="text-balance text-muted-foreground">
                  Sign in to your NSC employee account
                </p>
              </div>

              <Field>
                <FieldLabel htmlFor="employee-number">
                  Employee Number
                </FieldLabel>

                <Input
                  id="employee-number"
                  name="employeeNumber"
                  type="text"
                  placeholder="EMP-0001"
                  autoComplete="username"
                  required
                />
              </Field>

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="employee-password">
                    Password
                  </FieldLabel>

                  <a
                    href="/forgot-password"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <Input
                  id="employee-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </Field>

              <Field>
                <Button type="submit" className="w-full">
                  Login as Employee
                </Button>
              </Field>

              <FieldDescription className="text-center">
                Need an employee account?{" "}
                <a
                  href="/contact-administrator"
                  className="font-medium underline underline-offset-4"
                >
                  Contact the administrator
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>

          <div className="relative hidden bg-muted md:block">
            <img
              src="/nsc-logo.png"
              alt="Northern Samar Colleges logo"
              className="absolute inset-0 h-full w-full object-contain p-12 dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        By signing in, you agree to our{" "}
        <a href="/terms" className="underline underline-offset-4">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" className="underline underline-offset-4">
          Privacy Policy
        </a>
        .
      </FieldDescription>
    </div>
  )
}