"use client"

import { useState, useEffect } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Upload,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Link from "next/link"


export default function RegistrationForm() {

  const steps = [
        "basic-info",
        "personal-info",
        "emergency-contact",
        "academic-info",
        "family-info",
        "file-upload",
      ]
      
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");

  const [civilStatus, setCivilStatus] = useState("");
  const [activeTab, setActiveTab] = useState(steps[0])
  const currentStep = steps.indexOf(activeTab)
  
  // age calc  
  useEffect(() => {
    if (!birthDate) return
  
    const today = new Date()
    const dob = new Date(birthDate)
  
    let calculatedAge =
      today.getFullYear() - dob.getFullYear()
  
    const monthDiff =
      today.getMonth() - dob.getMonth()
  
    if (
      monthDiff < 0 ||
      (monthDiff === 0 &&
        today.getDate() < dob.getDate())
    ) {
      calculatedAge--
    }
  
    setAge(calculatedAge.toString())
  }, [birthDate])

  // nav
  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setActiveTab(steps[currentStep + 1])
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setActiveTab(steps[currentStep - 1])
    }
  }

  // For dynamic tab titles
  const tabTitles: Record<string, string> = {
    "basic-info": "Basic Information",
    "personal-info": "Personal Information",
    "emergency-contact":
      "Person to Notify in Case of Emergency",
    "academic-info": "Academic Information",
    "family-info": "Family Information",
    "file-upload": "File Upload",
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />


        <div className="w-full max-w-sm md:max-w-4xl">

        <div className="sticky top-0 z-50 mb-6">
            <div className="flex items-center justify-between rounded-2xl border bg-background/95 backdrop-blur px-6 py-4 shadow-sm">

                <div className="flex items-center gap-4">

                <img
                    src="/images/nsc-logoo.png"
                    alt="NSC Logo"
                    className="h-14 w-14 object-contain"
                />

                <div>
                    <h1 className="text-xl font-bold text-muted-foreground">
                    NSC Admission Portal
                    </h1>

                    <p className="text-sm text-muted-foreground">
                    Northern Samar Colleges
                    </p>
                </div>

                </div>

                <Button
                asChild
                variant="outline"
                className="border-primary/20"
                >
                <Link href="/">
                    ← Back to Home
                </Link>
                </Button>

            </div>
        </div>


        <Card className="overflow-hidden border-primary shadow-sm rounded-2xl p-0">
        <CardHeader className="bg-primary text-primary-foreground py-5 border-b border-white/10 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] items-center">
            <div className="flex flex-col gap-1">

                <p className="text-sm text-primary-foreground/80">
                    Student Registration Form
                </p>

                <CardTitle className="text-2xl font-semibold">
                    {tabTitles[activeTab]}
                </CardTitle>
            </div>

            <div className="flex flex-col gap-1 items-start md:items-end">
            
                <p className="text-sm text-primary-foreground/80">
                    SY 2026-2027 · 1st Sem
                </p>
            </div>
        </CardHeader>

            <CardContent className="p-8 !pt-6">
            <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
            >
                {/* STEP TABS */}
                <TabsList className="grid w-full grid-cols-6 bg-primary/10 rounded-xl p-1 mb-10">
                <TabsTrigger value="basic-info" className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary" disabled >
                    1
                </TabsTrigger>

                <TabsTrigger value="personal-info" className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary" disabled>
                    2
                </TabsTrigger>

                <TabsTrigger value="emergency-contact" className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary" disabled>
                    3
                </TabsTrigger>

                <TabsTrigger value="academic-info" className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary" disabled>
                    4
                </TabsTrigger>

                <TabsTrigger value="family-info" className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary" disabled>
                    5
                </TabsTrigger>

                <TabsTrigger value="file-upload" className="rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary" disabled>
                    6
                </TabsTrigger>
                </TabsList>

                {/* BASIC INFO */}
                <TabsContent value="basic-info">
                    <FieldGroup className="space-y-2">
                       
                        {/* BASIC INFO */}
                        <div className="grid gap-4 md:grid-cols-3">
                            <Field>
                            <FieldLabel>School Year</FieldLabel>
                            <Input placeholder="2026-2027" />
                            </Field>

                            <Field>
                            <FieldLabel>Semester</FieldLabel>

                            <Select>
                                <SelectTrigger>
                                <SelectValue placeholder="Select semester" />
                                </SelectTrigger>

                                <SelectContent>
                                <SelectItem value="1st">
                                    First Semester
                                </SelectItem>

                                <SelectItem value="2nd">
                                    Second Semester
                                </SelectItem>
                                </SelectContent>
                            </Select>
                            </Field>

                            <Field>
                            <FieldLabel>Status</FieldLabel>

                            <Select>
                                <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                                </SelectTrigger>

                                <SelectContent>
                                <SelectItem value="new">
                                    New Student
                                </SelectItem>

                                <SelectItem value="old">
                                    Old Student
                                </SelectItem>

                                <SelectItem value="transferee">
                                    Transferee
                                </SelectItem>
                                </SelectContent>
                            </Select>
                            </Field>
                        </div>
                  

                        {/* FULLNAME */}
                        <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                            Fullname
                        </h3>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Field>
                            <FieldLabel>Lastname</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Firstname</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Middlename</FieldLabel>
                            <Input />
                            </Field>
                        </div>
                        </div>

                        {/* PERSONAL DETAILS */}
                        <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground  text-primary">
                            Personal Details
                        </h3>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Field>
                            <FieldLabel>Place of Birth</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Date of Birth</FieldLabel>

                            <Input
                                type="date"
                                value={birthDate}
                                onChange={(e) =>
                                setBirthDate(e.target.value)
                                }
                            />
                            </Field>

                            <Field>
                            <FieldLabel>Age</FieldLabel>

                            <Input
                                value={age}
                                disabled
                                placeholder="Auto calculated"
                            />
                            </Field>

                            <Field>
                            <FieldLabel>Sex</FieldLabel>

                            <Select>
                                <SelectTrigger>
                                <SelectValue placeholder="Select sex" />
                                </SelectTrigger>

                                <SelectContent>
                                <SelectItem value="male">
                                    Male
                                </SelectItem>

                                <SelectItem value="female">
                                    Female
                                </SelectItem>
                                </SelectContent>
                            </Select>
                            </Field>

                            <Field>
                            <FieldLabel>Civil Status</FieldLabel>

                            <Select
                                onValueChange={(value) =>
                                setCivilStatus(value)
                                }
                            >
                                <SelectTrigger>
                                <SelectValue placeholder="Select civil status" />
                                </SelectTrigger>

                                <SelectContent>
                                <SelectItem value="single">
                                    Single
                                </SelectItem>

                                <SelectItem value="married">
                                    Married
                                </SelectItem>

                                <SelectItem value="widowed">
                                    Widowed
                                </SelectItem>
                                </SelectContent>
                            </Select>
                            </Field>

                            <Field>
                            <FieldLabel>Email</FieldLabel>
                            <Input type="email" />
                            </Field>
                        </div>
                        </div>

                        <div className="flex justify-end">
                        <Button onClick={nextStep}>
                            Next
                            <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                        </div>
                    </FieldGroup>
                </TabsContent>

                {/* PERSONAL INFO */}
                <TabsContent value="personal-info">
                    <FieldGroup className="space-y-2">

                    {/* ADDRESS */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                        Address
                        </h3>

                        <div className="grid gap-4 md:grid-cols-3">
                        <Field>
                            <FieldLabel>ZipCode</FieldLabel>
                            <Input />
                        </Field>

                        <Field>
                            <FieldLabel>Province / State</FieldLabel>
                            <Input />
                        </Field>

                        <Field>
                            <FieldLabel>City</FieldLabel>
                            <Input />
                        </Field>

                        <Field>
                            <FieldLabel>Home Number</FieldLabel>
                            <Input />
                        </Field>

                        <Field>
                            <FieldLabel>Street / Brgy.</FieldLabel>
                            <Input />
                        </Field>
                        </div>
                    </div>

                    {/* CONTACT DETAILS */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                        Contact & Other Details
                        </h3>

                        <div className="grid gap-4 md:grid-cols-3">
                        <Field>
                            <FieldLabel>Mobile Number</FieldLabel>
                            <Input />
                        </Field>

                        <Field>
                            <FieldLabel>Religion</FieldLabel>

                            <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select religion" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="rc">
                        Roman Catholic
                        </SelectItem>

                        <SelectItem value="inc">
                        Iglesia Ni Cristo
                        </SelectItem>

                        <SelectItem value="aglipay">
                        Aglipay
                        </SelectItem>

                        <SelectItem value="up">
                        United Pentecostal
                        </SelectItem>

                        <SelectItem value="miracle">
                        Miracle Revival
                        </SelectItem>

                        <SelectItem value="baptist">
                        Baptist
                        </SelectItem>

                        <SelectItem value="jil">
                        Jesus is Lord
                        </SelectItem>

                        <SelectItem value="sda">
                        Seventh Day Adventist
                        </SelectItem>

                        <SelectItem value="other">
                        Other
                        </SelectItem>
                    </SelectContent>
                    </Select>
                        </Field>

                        <Field>
                            <FieldLabel>Country</FieldLabel>
                            <Input value="Philippines" disabled />
                        </Field>

                        <Field>
                            <FieldLabel>Citizenship</FieldLabel>
                            <Input value="Filipino" disabled />
                        </Field>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <Button variant="outline" onClick={prevStep}>
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Previous
                        </Button>

                        <Button onClick={nextStep}>
                        Next
                        <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                    </div>

                    </FieldGroup>
                </TabsContent>

                {/* EMERGENCY CONTACT */}
                <TabsContent value="emergency-contact">
                    <FieldGroup className="space-y-2">

                        <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                            Emergency Contact Information
                        </h3>

                        <div className="grid gap-4 md:grid-cols-2">

                            <Field>
                            <FieldLabel>Guardian / Contact Name</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Mobile Number</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Phone Number</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Email Address</FieldLabel>
                            <Input type="email" />
                            </Field>

                            <Field>
                            <FieldLabel>Address</FieldLabel>
                            <Input />
                            </Field>

                        </div>
                        </div>

                        <div className="flex items-center justify-between">
                        <Button variant="outline" onClick={prevStep}>
                            <ChevronLeft className="mr-1 h-4 w-4" />
                            Previous
                        </Button>

                        <Button onClick={nextStep}>
                            Next
                            <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                        </div>

                    </FieldGroup>
                </TabsContent>

                {/* ACADEMIC INFO */}
                <TabsContent value="academic-info">
                <FieldGroup className="space-y-2">
  
                {/* PRIMARY */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Primary Education
                    </h3>

                    <div className="grid gap-4 md:grid-cols-3">
                    <Field>
                        <FieldLabel>Name of the School</FieldLabel>
                        <Input />
                    </Field>

                    <Field>
                        <FieldLabel>Year Graduated</FieldLabel>
                        <Input />
                    </Field>

                    <Field>
                        <FieldLabel>LRN</FieldLabel>
                        <Input />
                    </Field>
                    </div>
                </div>

                {/* SECONDARY */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Secondary Education
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                    <Field>
                        <FieldLabel>Name of the School</FieldLabel>
                        <Input />
                    </Field>

                    <Field>
                        <FieldLabel>Year Graduated</FieldLabel>
                        <Input />
                    </Field>
                    </div>
                </div>

                {/* SHS */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-primary   ">
                    Senior High School
                    </h3>

                    <div className="grid gap-4 md:grid-cols-3">

                    <Field>
                        <FieldLabel>Name of the School</FieldLabel>
                        <Input />
                    </Field>

                    <Field>
                        <FieldLabel>Year Graduated</FieldLabel>
                        <Input />
                    </Field>

                    <Field>
                        <FieldLabel>Strand & Track</FieldLabel>

                        <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select Strand & Track" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="na">
                    N/A
                    </SelectItem>

                    <SelectItem value="abm">
                    Accountancy, Business and Management (ABM)
                    </SelectItem>

                    <SelectItem value="stem">
                    Science, Technology, Engineering, and Mathematics (STEM)
                    </SelectItem>

                    <SelectItem value="humss">
                    Humanities and Social Science (HUMSS)
                    </SelectItem>

                    <SelectItem value="gas">
                    General Academic Strand (GAS)
                    </SelectItem>

                    <SelectItem value="arts">
                    Arts and Design
                    </SelectItem>

                    <SelectItem value="sports">
                    Sports
                    </SelectItem>

                    <SelectItem value="tvl">
                    Technical-Vocational-Livelihood (TVL)
                    </SelectItem>

                    <SelectItem value="afa">
                    Agricultural-Fishery Arts (AFA)
                    </SelectItem>

                    <SelectItem value="he">
                    Home Economics (HE)
                    </SelectItem>

                    <SelectItem value="ia">
                    Industrial Arts (IA)
                    </SelectItem>

                    <SelectItem value="ict">
                    Information and Communications Technology (ICT)
                    </SelectItem>
                </SelectContent>
                </Select>
                    </Field>

                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <Button variant="outline" onClick={prevStep}>
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Previous
                    </Button>

                    <Button onClick={nextStep}>
                    Next
                    <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                </div>

                </FieldGroup>
                </TabsContent>

                {/* FAMILY INFO */}
                <TabsContent value="family-info">
                    <FieldGroup className="space-y-2">

                        {/* FATHER */}
                        <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                            Father's Information
                        </h3>

                        <div className="grid gap-4 md:grid-cols-2">

                            <Field>
                            <FieldLabel>Fullname</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Occupation</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Mobile Number</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Phone Number</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Address</FieldLabel>
                            <Input />
                            </Field>

                        </div>
                        </div>

                        {/* MOTHER */}
                        <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">
                            Mother's Information
                        </h3>

                        <div className="grid gap-4 md:grid-cols-2">

                            <Field>
                            <FieldLabel>Fullname</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Occupation</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Mobile Number</FieldLabel>
                            <Input />
                            </Field>

                            <Field>
                            <FieldLabel>Phone Number</FieldLabel>
                            <Input />
                            </Field>

                            <Field >
                            <FieldLabel>Address</FieldLabel>
                            <Input />
                            </Field>

                        </div>
                        </div>

                        {/* SPOUSE CONDITIONAL */}
                        {civilStatus === "married" && (
                        <div className="space-y-4">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                            Spouse Information
                            </h3>

                            <div className="grid gap-4 md:grid-cols-2">

                            <Field>
                                <FieldLabel>Spouse</FieldLabel>
                                <Input />
                            </Field>

                            <Field>
                                <FieldLabel>Occupation</FieldLabel>
                                <Input />
                            </Field>

                            <Field>
                                <FieldLabel>Mobile Number</FieldLabel>
                                <Input />
                            </Field>

                            <Field>
                                <FieldLabel>Phone Number</FieldLabel>
                                <Input />
                            </Field>

                            </div>
                        </div>
                        )}

                        <div className="flex items-center justify-between">
                        <Button variant="outline" onClick={prevStep}>
                            <ChevronLeft className="mr-1 h-4 w-4" />
                            Previous
                        </Button>

                        <Button onClick={nextStep}>
                            Next
                            <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                        </div>

                    </FieldGroup>
                </TabsContent>

                {/* FILE UPLOAD */}
                <TabsContent value="file-upload">
                <FieldGroup className="space-y-6">
                    <div>
                    <h2 className="text-lg font-semibold text-primary">
                        File Upload
                    </h2>
                    </div>

                    <div className="border-2 border-dashed border-primary/30 rounded-2xl p-10 text-center bg-primary/5">
                    <div className="flex flex-col items-center gap-3">
                        <div className="bg-primary/10 p-4 rounded-full">
                        <Upload className="h-8 w-8 text-primary" />
                        </div>

                        <div>
                        <p className="font-medium">
                            Upload your documents
                        </p>

                        <p className="text-sm text-muted-foreground">
                            PDF, JPG, PNG up to 10MB
                        </p>
                        </div>

                        <Input
                        type="file"
                        className="max-w-sm"
                        />
                    </div>
                    </div>

                    <div className="flex items-center justify-between">
                    <Button
                        variant="outline"
                        onClick={prevStep}
                    >
                        <ChevronLeft className="mr-1 h-4 w-4" />
                        Previous
                    </Button>

                    <Button>
                        Submit Registration
                    </Button>
                    </div>
                </FieldGroup>
                </TabsContent>


            </Tabs>
            </CardContent>
        </Card>

        </div>
    </div>
  )
}