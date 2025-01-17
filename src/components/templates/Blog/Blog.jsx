import BlogCart from "./BlogCart";
import Button from "../../../ui/Button";

function Blog() {
  return (
    <section className="mb-[130px] mx-[81px]">
      <div className="w-full flex items-center justify-center font-bold text-2xl leading-9 text-primary pb-10">
        بلاگ
      </div>
      <div>
        <BlogCart />
      </div>
      <div>
        <div className="flex justify-center pt-[7px]">
          <Button>مشاهده</Button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
