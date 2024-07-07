import { SignedIn, UserButton } from "@clerk/nextjs";

<<<<<<< HEAD
import { checkUser } from "@/lib/checkUser";

const DashboardPage = async () => {
  const user = await checkUser();
=======
const DashboardPage = () => {
>>>>>>> 17733d6104f2637f8510c6c7bd186b745c8c681f
  return (
    <main className="w-3/4 mx-auto p-4">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl">Dashboard</h1>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="mt-2">
        <h2>Welcome back, {}</h2>
      </div>
    </main>
  );
};

export default DashboardPage;
