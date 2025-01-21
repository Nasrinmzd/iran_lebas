import BlogCart from "./BlogCart";
import Button from "../../../ui/Button";
import SectionTitle from "../SectionTitle";

function Blog() {
  return (
    <section className="mb-[130px] mx-[81px]">
      <SectionTitle>بلاگ</SectionTitle>
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
