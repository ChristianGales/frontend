import Image from "next/image"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
       

      {/* LEFT SIDE */}
      <div className="relative hidden overflow-hidden lg:flex">
        
        <Image
          src="/images/dalakit-campus.png"
          alt="NSC Building"
          fill
          priority
          className="object-cover"
        />


        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E75]/70 via-[#182B8C]/80 to-[#111C5A]/95" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-10 text-center text-white">
          
          <h1 className="text-5xl font-black tracking-wide drop-shadow-lg">
            NORTHERN SAMAR
          </h1>

          <h2 className="mt-2 text-5xl font-bold tracking-wide text-orange-400 drop-shadow-lg">
            COLLEGES
          </h2>

          <div className="mt-6 w-42 rounded-full bg-white/70" />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xl font-medium text-white">
            <span className="font-script">Educate</span>

            <span className="text-orange-400">•</span>

            <span className="font-script">Innovate</span>

            <span className="text-orange-400">•</span>

            <span className="font-script">Hospitality</span>

            <span className="text-orange-400">•</span>

            <span className="font-script">Excel</span>
          </div>

          <div className="mt-16 text-sm tracking-wide text-white/70">
            Welcome to NSC Portal System
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-background px-6 py-10">
        <div className="w-full max-w-md">
        
          <div className="flex justify-center">
          <Image
              src="/images/nsc-logoo.png"
              alt="NSC Logo"
              width={160}
              height={160}
              className="object-contain drop-shadow-xl"
              priority
            />
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  )
}