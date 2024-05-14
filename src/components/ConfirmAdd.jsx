import { useContext } from "react";
import { MyContext } from "../utils/Context";

function ConfirmAdd({ setNextShow, input, setAddShow }) {
  const { setTodaySpent, expense, setExpense } = useContext(MyContext);

  function handleClick() {
    setNextShow(false);
  }

  function handleConfirm() {
    if (input) {
      setTodaySpent((prev) => [...prev, { name: "sdasd", price: input }]);
      setExpense((prev) => prev + parseInt(input));
      setNextShow(false);
      setAddShow(false); // This line
    }

    return;
  }

  return (
    <div class="fixed bottom-[80px] h-1/2 z-[999] w-[400px] sm:w-lg rounded-t-2xl border-t p-5 bg-white bg-opacity-90 backdrop-blur-sm dark:border-zinc-600 m-auto">
      <div class="flex flex-col h-full">
        <div class="flex flex-col gap-5">
          <h1 class="font-black text-3xl">Confirm</h1>
          <div class="flex items-center gap-3">
            <div>
              <span class="w-8 h-8 bg-gray-300 grid place-content-center rounded-full text-gray-500 ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <p class="text-gray-500">
              Help us ensure accuracy by reviewing your expense before
              confirming because you can not edit it later.
            </p>
          </div>
        </div>
        <div class="flex-1 flex justify-center items-center">
          <div class="flex items-center gap-10">
            <h1 class="text-3xl font-black">${input}</h1>
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="w-8 h-8"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
            <div class="flex items-center gap-5">
              <h1 class="text-4xl">🏠</h1>
              <div>
                <h1 class=" font-semibold text-lg">rent</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <button
            class="bg-red-200 dark:bg-red-400 rounded-md hover:tracking-wider transition-all"
            onClick={handleClick}
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            class="bg-black dark:bg-white dark:text-black text-white py-5 w-full justify-center items-center rounded-lg hover:tracking-wider transition-all hover:shadow-md  flex gap-3 "
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmAdd;
