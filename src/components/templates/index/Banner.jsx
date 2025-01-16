import React from "react";
import Button from "../../../ui/Button";

function Banner() {
  return (
    <section className="container flex items-center justify-start w-[1123px] mt-[73px] mb-[118px] px-[80px] child:w-1/2">
      <div>
        <div className="relative w-[478.58px] h-[457.760px] bg-[#D9D9D9] rounded-xl banner__right-item">
          <img
            className="banner__img"
            src="/images/banner.png"
            alt="banner-img"
          />
        </div>
      </div>

      <div className="mr-[101px] child:text-right">
        <h1 className="font-iransans text-[40px] text-primary font-bold leading-[60px]">
          ایران لباس
        </h1>
        <p className="w-[380px] mt-6 mb-[18px] font-normal text-lg text-secondary leading-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
        </p>
        <Button>بریم خرید</Button>
      </div>
    </section>
  );
}

export default Banner;
