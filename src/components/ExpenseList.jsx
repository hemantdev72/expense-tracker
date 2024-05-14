import { useContext } from "react";
import { MyContext } from "../utils/Context";

function ExpenseList() {
  const { todaySpent } = useContext(MyContext);

  return todaySpent.map((item, index) => (
    <div className="flex justify-between text-sm py-1 px-3" key={index}>
      <p>{item.name}</p>
      <p className="text-[#ff0000c2]">-{item.price}</p>
    </div>
  ));
}

export default ExpenseList;
