function LogoInfo() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-[40px] leading-[60px] text-[#1C1C1C] mb-[21px]">
        ایران لباس
      </h2>
      <svg className="w-[169.93px] h-[63.41px]">
        <use href="#main-logo"></use>
      </svg>
      <p className="font-bold text-xl mt-[25px] leading-7">
        بزرگترین فروشگاه لباس آنلاین ایران
      </p>
    </div>
  );
}

export default LogoInfo;
