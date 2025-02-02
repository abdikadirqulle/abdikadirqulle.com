import React from "react"

const ServicesCard = () => {
  return (
    <div>
      <div className="w-full">
        <div className="flex items-center justify-between w-full">
          <h1 className="dark:text-gray-200">services 🛠️</h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-col:2 xl:grid-cols-2 gap-2 mt-[0.75rem]">
          <a
            target="_blank"
            href="https://cal.com/abdikadirqulle/discovery-call"
          >
            <div
              className="relative w-full rounded-2xl border dark:border-zinc-900 hover:cursor-pointer overflow-hidden"
              style={{ transform: "none" }}
            >
              <div
                className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
                // style={{background: radial-gradient(150px at 296.4px 1.39999px, rgba(255, 255, 255, 0.2), transparent 80%), opacity: 0; pointer-events: "none"}}
              ></div>
              <div className="relative z-10 p-3">
                <div className="flex flex-col gap-1">
                  <p className="text-sm dark:text-gray-300">👨🏾‍💻 hire me</p>
                  <p className="text-xs dark:text-gray-400">
                    with experience building production ready apps, i can build
                    your next project.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a target="_blank" href="https://cal.com/abdikadirqulle/consultation">
            <div
              className="relative w-full rounded-2xl border dark:border-zinc-900 hover:cursor-pointer overflow-hidden"
              style={{ transform: "none" }}
            >
              <div
                className="absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
                // style="background: radial-gradient(150px at 5.035px 11.624px, rgba(255, 255, 255, 0.2), transparent 80%); opacity: 0; pointer-events: none;"
              ></div>
              <div className="relative z-10 p-3">
                <div className="flex flex-col gap-1">
                  <p className="text-sm dark:text-gray-300">
                    💬 book a consultation
                  </p>
                  <p className="text-xs dark:text-gray-400">
                    need advice on your product? book a consultation to get
                    clarity on your next steps.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard
