"use client"

import { useState } from "react"

import CollegeRegistrationForm from "@/components/forms/registration/college/college-registration-form";
import PrivacyPolicyPage from "@/components/shared/privacy-policy";

const CollegeRegistration = () => {

  const [agreed, setAgreed] = useState(false)

  return (
    <>
      {!agreed ? (
        <PrivacyPolicyPage
          onAgree={() => setAgreed(true)}
        />
      ) : (
        <CollegeRegistrationForm />
      )}
    </>
  )
}

export default CollegeRegistration;


