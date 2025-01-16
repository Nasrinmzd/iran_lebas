function Search() {
  return (
    <div className="flex justify-start items-center w-[680px] h-[49px] border border-[#313132] rounded-xl shadow-[0_0_4px_0_rgba(49,49,50,0.3)] group hover:border-maincolorred transition-all duration-300 ease-out">
      <svg
        className="w-6 h-6 mt-3 mb-[13px] ml-2 mr-[13px] text-[#78787F] group-hover:text-maincolorred"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
          className="stroke-current"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
          className="stroke-current"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        className="w-full my-4 text-right font-normal text-xs leading-[18px] focus:outline-none placeholder:text-[#78787F] group-hover:placeholder:text-[#313132]"
        type="search"
        placeholder="خوش پوشی را پیدا کن"
      />
    </div>
  );
}

export default Search;
