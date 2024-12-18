import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";

const Development = () => {
    return (
        <div className="view-container">
            <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl flex flex-col mt-24 my-36 leading-snug">
                <span className="text-muted-white-2">Uh ohh...</span>
                <span className="text-muted-white-1 md:mt-2">
                    This page is still in development.
                </span>
            </h1>
            <Link
                href="/"
                className={`${buttonVariants({
                    variant: "outline",
                    size: "default",
                })}`}
            >
                Go to home
            </Link>
        </div>
    );
};

export default Development;
