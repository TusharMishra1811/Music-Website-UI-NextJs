import FormComponent from "@/components/FormComponent";
import { BackgroundBeams } from "@/components/ui/background-beams";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-[7rem] relative">
      <BackgroundBeams className="top-0 left-0 w-full h-full z-0" />
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {" "}
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <FormComponent />
      </div>
    </div>
  );
};

export default page;
