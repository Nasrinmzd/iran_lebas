import React from "react";

function Categories() {
  return (
    <section className="container mt-[148px]">
      <div className="w-full flex items-center justify-center mb-[116px] font-bold text-[28px] leading-[42px]">
        دسته بندی
      </div>
      <div className="flex items-start justify-center gap-[93px] h-[665px] mb-[131px]">
        <div className="relative w-[345px] h-[382px] bg-[#D9D9D9] rounded-2xl">
          <img
            className="absolute bottom-[115px] right-[42px]"
            src="/images/product-2.png"
            alt="category-img"
          />
          <p className="mt-[299px] text-center font-bold text-[24px] leading-8">
            زنانه
          </p>
        </div>
        <div className="relative self-end w-[345px] h-[382px] bg-[#D9D9D9] rounded-2xl">
          <img
            className="absolute bottom-[115px] right-[42px]"
            src="/images/product-3.png"
            alt="category-img"
          />
          <p className="mt-[299px] text-center font-bold text-[24px] leading-8">
            بچگانه
          </p>
        </div>
        <div className="relative w-[345px] h-[382px] bg-[#D9D9D9] rounded-2xl">
          <img
            className="absolute bottom-[115px] right-[42px]"
            src="/images/product-1.png"
            alt="category-img"
          />
          <p className="mt-[299px] text-center font-bold text-[24px] leading-8">
            مردانه
          </p>
        </div>
      </div>
    </section>
  );
}

export default Categories;
