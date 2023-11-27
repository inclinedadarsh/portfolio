import BlogCard from "./ui/BlogCard";
import SectionTitle from "./ui/SectionTitle";

const Blogs = () => {
  return (
    <section className="view-container my-24">
      <SectionTitle badges={["web dev", "machine learning", "open source"]}>
        Some noteworthy blogs
      </SectionTitle>
      <div className="">
        <BlogCard slug="code-formatting-tutorial-eslint-prettier-husky-lint-staged-reactjs">
          Seamless Code Formatting: Setup ESLint, Prettier, Husky & Lint-staged
          for ReactJS
        </BlogCard>
        <BlogCard slug="getting-started-with-numpy-arrays">
          Getting started with NumPy & NumPy Arrays
        </BlogCard>
        <BlogCard slug="ux-design-laws-every-developer-should-know">
          UX Design laws every developer should know
        </BlogCard>
        <BlogCard slug="">See all blogs</BlogCard>
      </div>
    </section>
  );
};

export default Blogs;
