import Link from "next/link";
import LoginForm from "@/app/ui/login-form";
import OrbLogo from "@/app/ui/orb-logo";

export default function Page() {
  return (
    <>
      <OrbLogo />
      <div>login page</div>
      <LoginForm />
      <div>
        Don&apos;t have an account? 
        <Link href="/login/create">
            Create an account
        </Link>
      </div>
    </>
  )
}
