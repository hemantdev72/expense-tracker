import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MonthExpense from "./components/MonthExpense";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import ConfirmAdd from "./components/ConfirmAdd";

function App() {
  const [count, setCount] = useState(0);
  const [addShow, setAddShow] = useState(false);

  return (
    <div className="main">
      <div className="container w-[400px] h-full bg-white m-auto py-5">
        <div className="relative">
          <Header />
          <MonthExpense />
          <div className="flex justify-between text-sm text-gray-400 mb-2 px-3">
            <p>Today</p>
            <p>$88</p>
          </div>
          <ExpenseList />
          {addShow && <AddExpense setAddShow={setAddShow} />}
          <Footer setAddShow={setAddShow} />
        </div>
      </div>
    </div>
  );
}

export default App;
