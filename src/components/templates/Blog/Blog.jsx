import BlogCart from "./BlogCart";

function Blog() {
  return (
    <section className="mb-[130px] mx-[81px]">
      <div className="w-full flex items-center justify-center mb-[551px] font-bold text-2xl leading-9 primary">
        بلاگ
      </div>
      <div>
        <BlogCart />
      </div>
    </section>
  );
}

export default Blog;
