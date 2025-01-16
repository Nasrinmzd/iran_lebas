import CategoriesSection from "./CategoriesSection";
import ContactInfo from "./ContactInfo";
import Links from "./Links";
import SocialNetwork from "./SocialNetwork";
import LogoInfo from "./LogoInfo";

function Footer() {
  return (
    <footer className="w-full h-[421px] bg-maincolorred shadow-[0_-4px_6.8px_0_rgba(0,0,0,0.25)]">
      <div className="w-[1280px] h-[311px] flex items-center justify-around bg-white mx-auto rounded-b-[160px]">
        <LogoInfo />
        <ContactInfo />
        <CategoriesSection />
        <Links />
      </div>
      <div className="flex flex-col items-center">
        <SocialNetwork />
        <span className="text-white text-base font-normal leading-7 mb-[15px]">
          طراحی، برنامه نویسی (فرانت اند و بک اند) با گروه احیا تکنولوژی است و
          هر نوع استفاده غیر قانونی پیگرد قانونی دارد
        </span>
      </div>
    </footer>
  );
}

export default Footer;
