import Button from "../../../ui/Button";
import ProductsCart from "../ProductsCart";
import SectionTitle from "../SectionTitle";

function SpecialDiscounts() {
    const specialDiscountsData = [
        {
          id: 1,
          title: "تیشرت مردانه آستین بلند",
          img: "/images/blooz.png",
        },
        {
          id: 2,
          title: "تیشرت مردانه",
          img: "/images/teeshert.png",
        },
        {
          id: 3,
          title: "کت مردانه چهارخونه",
          img: "/images/coat.png",
        },
        {
          id: 4,
          title: "پیراهن یقه پیلی دار",
          img: "/images/dress1.png",
        },
        {
          id: 5,
          title: "پیراهن دکلته",
          img: "/images/decolteh.png",
        },
        {
          id: 6,
          title: "پیراهن کمر پهن",
          img: "/images/dress2.png",
        },
      ];

    return (
        <section className="mb-[150px]">
      <SectionTitle>تخفیفات ویژه</SectionTitle>
      <div className="flex flex-row-reverse items-center justify-center">
        <div className="w-[827px] h-[754px] flex flex-wrap justify-center items-center gap-2">
          {specialDiscountsData.map((product) => (
            <ProductsCart
              key={product.id}
              title={product.title}
              img={product.img}
            />
          ))}
        </div>
        <div className="w-[413px] h-[735px] ml-[40px]">
          <img src="/images/discont.png" alt="" />
          <div className="mr-[118px] -mt-[60px]">
            <Button>دیدن محصولات</Button>
          </div>
        </div>
      </div>
    </section>
    )
}

export default SpecialDiscounts
