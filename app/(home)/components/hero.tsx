import { SignUpButton } from "@clerk/nextjs";

const Hero = () => {
  return (
    <div className="w-2/3 mx-auto flex flex-col items-center text-center">
      <h1 className="text-4xl mb-4 font-semibold">
        One stop shop for all bloggers
      </h1>
      <p className="w-3/4 mx-auto mb-4">
        Start writing today and share your thoughts with the world. Bold Blogger
        is the perfect platform for all your blogging needs.
      </p>
    </div>
  );
};

export default Hero;
