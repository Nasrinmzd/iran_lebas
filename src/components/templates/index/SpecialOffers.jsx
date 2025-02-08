import ProductsCart from "../ProductsCart";
import SectionTitle from "../SectionTitle";

function SpecialOffers() {
  const specialOffersData = [
    {
      id: 1,
      title: "پیراهن دکلته",
      img: "/images/decolteh.png",
    },
    {
      id: 2,
      title: "پالتو کمربنددار",
      img: "/images/palto.png",
    },
    {
      id: 3,
      title: "هودی طرح آب رنگ",
      img: "/images/hoodi.png",
    },
    {
      id: 4,
      title: "کت مردانه چهارخونه",
      img: "/images/coat.png",
    },
  ];

  return (
    <section>
      <SectionTitle>پیشنهادهای ویژه</SectionTitle>
      <div className="w-[1228px] h-[429px] rounded-xl bg-maincolorred mx-auto mb-[150px] flex items-center gap-2 justify-center bg-[url(/images/bgoffer.png)] bg-cover">
          {specialOffersData.map((product) => (
            <ProductsCart
              img={product.img}
              title={product.title}
              key={product.id}
            />
          ))}
      </div>
    </section>
  );
}

export default SpecialOffers;
