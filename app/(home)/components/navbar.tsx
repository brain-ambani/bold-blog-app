import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="w-3/4 mx-auto p-4">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <h1>Bold Blogger</h1>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
