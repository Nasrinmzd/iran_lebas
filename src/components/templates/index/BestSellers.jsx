import Button from "../../../ui/Button";
import ProductsCart from "../ProductsCart";
import SectionTitle from "../SectionTitle";

function BestSellers() {
  const bestSellersData = [
    {
      id: 1,
      title: "هودی طرح آب رنگ",
      img: "/images/hoodi3.png",
    },
    {
      id: 2,
      title: "هودی طرح آب رنگ",
      img: "/images/hoodi.png",
    },
    {
      id: 3,
      title: "هودی طرح آب رنگ",
      img: "/images/hoodi2.png",
    },
    {
      id: 4,
      title: "کت جین",
      img: "/images/jin.png",
    },
    {
      id: 5,
      title: "پالتو کمربنددار",
      img: "/images/palto.png",
    },
    {
      id: 6,
      title: "پالتو چهار دکمه",
      img: "/images/paltoZ.png",
    },
  ];

  return (
    <section className="mb-[150px]">
      <SectionTitle>پر فروش ترین ها</SectionTitle>
      <div className="flex items-center justify-center">
        <div className="w-[827px] h-[754px] flex flex-wrap justify-center items-center gap-2">
          {bestSellersData.map((product) => (
            <ProductsCart
              key={product.id}
              title={product.title}
              img={product.img}
            />
          ))}
        </div>
        <div className="w-[413px] h-[735px] mr-[40px]">
          <img src="/images/bestseller.png" alt="" />
          <div className="mr-[118px] -mt-[55px]">
            <Button>دیدن محصولات</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestSellers;
