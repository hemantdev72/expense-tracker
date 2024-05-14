import { MdOutlineNightlight } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="flex justify-between border-b border-black-500 pb-1">
      <MdOutlineNightlight />
      <p>SUMMARY</p>
      <IoExitOutline />
    </div>
  );
}

export default Header;
