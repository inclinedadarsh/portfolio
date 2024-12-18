import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <>
            <Header />
            <Projects />
            <Blogs />
            <Contact />
            <Footer />
        </>
    );
}
