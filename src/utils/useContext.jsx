import { MyContext } from "./Context";
import { useState } from "react";
import Today from "../utils/TodaySpent";

const MyContextProvider = ({ children }) => {
  const [expense, setExpense] = useState(0);
  const [todaySpent, setTodaySpent] = useState(Today);
  return (
    <MyContext.Provider
      value={{ expense, setExpense, todaySpent, setTodaySpent }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
