import ProductsCart from "../ProductsCart";

function CategoriCart() {
  const categoriCartData = {
    title: "تیشرت مردانه آستین بلند",
    img: "/images/blooz.png",
  };

  return (
    <section className="flex justify-center mb-[150px] mt-[250px] gap-[70px] bg-[url(/images/bgpink.png),_url(/images/bgblue1.png)] bg-[center_top_1rem] bg-repeat-round">
      <div className="relative bottom-[169px]">
        <ProductsCart
          title={categoriCartData.title}
          img={categoriCartData.img}
        />
      </div>
      <ProductsCart title={categoriCartData.title} img={categoriCartData.img} />
      <div className="relative bottom-[169px]">
        <ProductsCart
          title={categoriCartData.title}
          img={categoriCartData.img}
        />
      </div>
      <ProductsCart title={categoriCartData.title} img={categoriCartData.img} />
    </section>
  );
}

export default CategoriCart;
