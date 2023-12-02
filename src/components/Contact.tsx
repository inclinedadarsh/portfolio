import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { contactBanner } from "@/assets";
import { buttonVariants } from "./ui/Button";

const Contact = () => {
  return (
    <div className="view-container">
      <section className="flex group flex-col items-center justify-center gap-10 md:gap-14 rounded-lg overflow-clip h-[300px] md:h-[350px] lg:h-[450px] relative">
        <Image
          src={contactBanner}
          alt="Contact Banner"
          className="absolute w-full h-full object-cover -z-20"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-[#00000030] group-hover:bg-[#00000000] transition-colors"></div>
        <h2 className="flex z-0 flex-col text-center leading-none gap-1 text-3xl md:text-4xl lg:text-5xl font-medium">
          <span className="">Interested in</span>
          <span className="">working together?</span>
        </h2>
        <div className="flex z-0 gap-8">
          <Link
            className={buttonVariants({ variant: "accent", size: "default" })}
            href="mailto:dubeyadarshmain@gmail.com"
          >
            Say Hello
          </Link>
          <Link
            className="flex gap-1 underline hover:no-underline items-center"
            href="https://bento.me/adarsh"
            rel="noopener noreferrer"
            target="_blank"
          >
            Other options
            <ChevronRight size={20} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;
