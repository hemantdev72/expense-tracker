import { useContext } from "react";
import { MyContext } from "../utils/Context";

function MonthExpense() {
  const { expense } = useContext(MyContext);

  return (
    <div className="h-[25vh] flex items-center justify-center flex-col">
      <p className="text-sm text-gray-500">Spent this month</p>
      <h2 className="text-4xl text-[#ff0000cc] tracking-tighter">
        <span>$</span>-${expense}.00
      </h2>
    </div>
  );
}

export default MonthExpense;
