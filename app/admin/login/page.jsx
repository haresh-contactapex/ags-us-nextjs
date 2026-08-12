import LoginForm from "@/components/admin/LoginForm";

export const metadata = { title: "Log In" };

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <LoginForm />
    </div>
  );
}
