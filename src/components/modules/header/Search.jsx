function Search() {
  return (
    <div className="flex justify-start items-center w-[680px] h-[49px] border border-[#313132] rounded-xl shadow-[0_0_4px_0_rgba(49,49,50,0.3)] group hover:border-maincolorred transition-all duration-300 ease-out">
      <svg className="w-6 h-6 mt-3 mb-[13px] ml-2 mr-[13px] text-[#78787F] group-hover:text-maincolorred fill-none">
        <use href="#search-icon"></use>
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
