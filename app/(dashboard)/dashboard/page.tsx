import { SignedIn, UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
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
