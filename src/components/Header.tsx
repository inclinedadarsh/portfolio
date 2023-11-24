import Link from "next/link";

const Header = () => {
  return (
    <header className="view-container mt-16 md:mt-20">
      <p className="font-space-grotesk text-primary-light text-base md:text-xl">
        Hi, I'm Adarsh Dubey.
      </p>
      <h1 className="font-bold text-3xl md:text-5xl lg:text-[66px] flex flex-col mt-5 leading-snug">
        <span className="text-muted-white-2">I help startups with</span>
        <span className="text-muted-white-1 md:mt-4">
          purpose driven websites.
        </span>
      </h1>
      <p className="max-w-xl text-base lg:text-xl text-muted-foreground font-light mt-10 leading-normal">
        Passionate freelance web developer and designer, crafting functional
        websites for startups. Dedicated open-source contributor and community
        builder.
      </p>
      <div className="flex gap-5 mt-10">
        <button className="button-primary">Say Hello</button>
        <Link className="button-secondary" href="https://cal.com/adarshdubey">
          Schedule a call
        </Link>
      </div>
    </header>
  );
};

export default Header;
