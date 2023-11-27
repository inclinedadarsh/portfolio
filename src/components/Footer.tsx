import Link from "next/link";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from "lucide-react";
import IconLink from "./ui/IconLink";

const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-5  justify-between view-container items-center my-20">
      <div className="font-mono px-7 py-5 bg-muted-2 rounded-lg mx-auto md:mx-0">
        <p className="">Built with love by Adarsh Dubey</p>
        <Link
          href="https://github.com/inclinedadarsh/portfolio"
          className="flex gap-2 items-center before:block relative before:absolute before:w-full w-fit mx-auto md:mx-0 before:h-[1px] before:-bottom-0.5 before:left-0 before:bg-muted-white-2 hover:before:scale-x-0 before:origin-left before:transition-transform"
        >
          Codebase on GitHub <ArrowUpRight size={20} strokeWidth={1.5} />
        </Link>
      </div>
      <div className="grid grid-cols-4 place-items-center mx-auto md:mx-0 md:grid-cols-2 gap-4">
        <IconLink href="https://github.com/inclinedadarsh">
          <Github size={20} strokeWidth={1.5} />
        </IconLink>
        <IconLink href="https://twitter.com/inclinedadarsh">
          <Twitter size={20} strokeWidth={1.5} />
        </IconLink>
        <IconLink href="https://linkedin.com/in/dubeyadarsh">
          <Linkedin size={20} strokeWidth={1.5} />
        </IconLink>
        <IconLink href="mailto:dubeyadarshmain@gmail.com">
          <Mail size={20} strokeWidth={1.5} />
        </IconLink>
      </div>
    </footer>
  );
};

export default Footer;
