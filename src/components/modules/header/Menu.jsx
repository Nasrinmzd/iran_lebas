function Menu() {
  return (
    <nav className="mt-[18px]">
      <div className="flex items-center justify-around">
        <ul className="text-right child:leading-[22px] flex gap-[102px] font-bold text-[16px] leading-[15px] transition-all duration-300 ease-out">
          <li className=" text-maincolorred border-b border-maincolorred">
            <a className="[text-shadow:0_1px_1px_rgba(0,0,0,0.25)]" href="#">
              صفحه اصلی
            </a>
          </li>
          <li className="hover:text-maincolorred hover:border-b hover:border-maincolorred">
            <a className="[text-shadow:0_1px_1px_rgba(0,0,0,0.25)]" href="#">
              مردانه
            </a>
          </li>
          <li className="hover:text-maincolorred hover:border-b hover:border-maincolorred">
            <a className="[text-shadow:0_1px_1px_rgba(0,0,0,0.25)]" href="#">
              زنانه
            </a>
          </li>
          <li className="hover:text-maincolorred hover:border-b hover:border-maincolorred">
            <a className="[text-shadow:0_1px_1px_rgba(0,0,0,0.25)]" href="#">
              بچگانه
            </a>
          </li>
          <li className="hover:text-maincolorred hover:border-b hover:border-maincolorred">
            <a className="[text-shadow:0_1px_1px_rgba(0,0,0,0.25)]" href="#">
              ارتباط ما
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
