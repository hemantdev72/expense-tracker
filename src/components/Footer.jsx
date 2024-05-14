import "../App.css";
import { GrAnalytics } from "react-icons/gr";
import { GrCatalog } from "react-icons/gr";
import { FaPlus } from "react-icons/fa6";

function Footer({ setAddShow }) {
  function handleClick() {
    setAddShow(true);
  }

  return (
    <div className="flex justify-between footer p-4 items-center bg-white w-[400px]">
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <GrAnalytics />
        <p>Analytic</p>
      </div>
      <div
        className="bg-yellow-300 p-3 rounded-full cursor-pointer"
        onClick={handleClick}
      >
        <FaPlus className="text-xl" />
      </div>

      <div className="flex flex-col items-center justify-center cursor-pointer">
        <GrCatalog />
        <p className="text-black-200">Change Logs</p>
      </div>
    </div>
  );
}

export default Footer;
