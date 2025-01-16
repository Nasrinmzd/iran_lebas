function CartPopover() {
  return (
    <div className="ml-[21px] transition-all duration-300 ease-out text-pretty hover:text-maincolorred">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        fill="none"
        viewBox="0 0 40 40"
      >
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          filter="url(#filter0_d_789_3643)"
        >
          <path d="M14.958 11.25h20.5M13.677 35.167a2.135 2.135 0 1 0 0-4.271 2.135 2.135 0 0 0 0 4.27M27.343 35.167a2.135 2.135 0 1 0 0-4.271 2.135 2.135 0 0 0 0 4.27M3 1h2.973a3.16 3.16 0 0 1 3.143 3.417L7.698 21.432c-.24 2.784 1.964 5.176 4.766 5.176h18.194c2.46 0 4.612-2.016 4.8-4.459l.923-12.812c.205-2.836-1.948-5.142-4.8-5.142H9.525"></path>
        </g>
        <defs>
          <filter
            id="filter0_d_789_3643"
            width="38.895"
            height="39.667"
            x="0.25"
            y="0.25"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix
              in="SourceAlpha"
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            ></feColorMatrix>
            <feOffset dy="2"></feOffset>
            <feGaussianBlur stdDeviation="1"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_789_3643"
            ></feBlend>
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_789_3643"
              result="shape"
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default CartPopover;
