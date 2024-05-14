import ConfirmAdd from "./ConfirmAdd";
import { useState } from "react";

function AddExpense({ setAddShow }) {
  const [nextShow, setNextShow] = useState(false);
  const [input, setInput] = useState(0);

  function handleClick() {
    setAddShow(false);
  }

  function handleNext() {
    setNextShow(true);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="fixed bottom-0 h-screen w-[400px] z-99 bg-white dark:bg-black  bg-opacity-90 backdrop-blur-sm m-auto">
      <div class="w-[400px] flex justify-center items-center h-screen flex-col gap-10">
        <p>Thur Mar 3</p>
        <input
          onChange={handleChange}
          type="number"
          placeholder="0"
          class="border-b border-zinc-200 bg-transparent outline-none text-center text-5xl w-52 font-bold "
        />
        <div className="flex gap-10">
          <button
            onClick={handleClick}
            class=" bg-red-200 dark:bg-red-400 px-8 py-3 rounded-md hover:tracking-wider transition-all hover:shadow-md"
          >
            Cancel
          </button>
          <button
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-md hover:tracking-wider transition-all hover:shadow-md"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
      {nextShow && (
        <ConfirmAdd
          setNextShow={setNextShow}
          input={input}
          setAddShow={setAddShow}
        />
      )}
    </div>
  );
}

export default AddExpense;
