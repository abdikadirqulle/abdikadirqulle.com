import React from "react"

const CurrentlyCooking = () => {
  return (
    <div>
      <div className="flex flex-col  w-full">
        <h1 className="font-normal">currently cooking 👨‍🍳</h1>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 h-[1px] mt-2 w-full bg-zinc-800"
        ></div>
        <div className="flex flex-col justify-center items-start w-full mt-[0.75rem] gap-2">
          <div className="flex flex-col w-full">
            <div className="flex gap-2">
              <a target="_blank" href="https://www.debtplanner.com/">
                <p className=" text-sm leading-7 hover:underline">
                  debtplanner
                </p>
              </a>
            </div>
            <p className="text-sm dark:text-gray-400">
              software that makes it easier for you to manage your debts{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentlyCooking
