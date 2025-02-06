function ProductsCart() {
  return (
    <div className="w-[265px] h-[353px] flex justify-end items-end">
      <div className="w-[265px] h-[297px] bg-[url(/images/bgCart.png)] bg-cover">
        <div className="flex justify-around">
          <div className="pr-[37.5px]">
            <img
              className="w-[190px] h-[239px] -mt-[60px]"
              src="/images/product1.png"
              alt=""
            />
          </div>
          <div className="space-y-2 pt-2 pl-2">
            <div className="w-[22px] h-[22px] rounded-full bg-[#4F378B]"></div>
            <div className="w-[22px] h-[22px] rounded-full bg-[#FF4444]"></div>
            <div className="w-[22px] h-[22px] rounded-full bg-[#272727]"></div>
          </div>
        </div>
        <div className="flex flex-col text-center font-bold text-[20px] leading-[30px]">
          <span className="  text-primary">هودی طرح آب رنگ</span>
          <span className="pt-[4px] text-secondary">
            220.000<span className="pr-2">تومان</span>
          </span>
        </div>
        <button className="w-[168px] h-[34px] bg-[#F4F4F4] font-bold text-base rounded-2xl shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] mt-[12px] mr-[48px] hover:bg-maincolorred hover:text-white transition-all duration-300 ease-in-out">
            دیدن محصول
        </button>
      </div>
      <div className="absolute">
        <img
          className="relative left-[202px] bottom-[185px]"
          src="/images/lable.png"
          alt=""
        />
        <p className="relative font-bold left-[197px] bottom-[246px] rotate-[30deg] text-[#FCFCFC] text-base">OFF %</p>
        <p className="relative font-bold left-[185px] bottom-[255px] rotate-[30deg] text-[#FCFCFC] text-base">30 %</p>
      </div>
    </div>
  );
}

export default ProductsCart;
