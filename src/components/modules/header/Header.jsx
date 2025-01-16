import Menu from "./Menu";
import Logo from "./Logo";
import Search from "./Search";
import CartPopover from "./CartPopover";
import Button from "../../../ui/Button";

function Header() {
  return (
    <header className="w-full h-[140px] bg-[#FFFEFE] rounded-b-[36px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] flex items-center justify-between">
      <Logo />
      <div>
        <Search />
        <Menu />
      </div>
      <div className="flex items-center justify-between">
        <CartPopover />
        <Button>ورود / ثبت نام</Button>
      </div>
    </header>
  );
}

export default Header;
