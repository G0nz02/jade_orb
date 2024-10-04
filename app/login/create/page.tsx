import NewUserForm from "@/app/ui/new-user-form"
import OrbLogo from "@/app/ui/orb-logo"

export default function page() {
  return (
    <>
      <OrbLogo />
      <div>
        New User
      </div>
      <NewUserForm />
    </>
  )
}