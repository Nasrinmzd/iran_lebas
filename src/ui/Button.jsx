function Button({ children }) {
  return (
    <button className="relative w-[159px] h-[60px] bg-maincolorred rounded-lg text-white font-bold text-base leading-6 ml-[78px] pt-[25.5px] pb-[49.5]">
      <span className="absolute bottom-2 right-2 -left-2 -top-2 border border-black rounded-lg flex justify-center items-center hover:inset-0 transition-all duration-300 ease-out">
        {children}
      </span>
    </button>
  );
}

export default Button;
