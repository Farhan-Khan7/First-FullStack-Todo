import React from "react";

const Form = ({toggle , setToggle}) => {
  const fieldClass =
    "w-full appearance-none rounded-2xl border-0 bg-[#e9edf5] px-5 py-4 text-base text-[#293655] outline-none shadow-[inset_4px_4px_8px_#c2cad9,inset_-4px_-4px_8px_#ffffff] placeholder:text-[#71809f] focus:ring-2 focus:ring-[#d72e52]/35";

  return (
    <div className={`${toggle ? `hidden` : `absolute`} inset-0 z-50 min-h-screen w-screen overflow-y-auto bg-[#dfe5f0]/65 px-4 py-12 backdrop-blur-md sm:px-8`}>
      <section className="relative mx-auto w-full max-w-4xl rounded-xl bg-[#e9edf5] px-6 py-10 font-sans text-[#293655] shadow-[13px_13px_25px_#aeb8ca,-13px_-13px_25px_#ffffff] sm:px-10 sm:py-12">
        <button
            onClick={() => setToggle(true)}
          type="button"
          aria-label="Close task form"
          className="cursor-pointer absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-xl bg-[#e9edf5] text-[#d72e52] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff] transition hover:-translate-y-0.5 hover:shadow-[2px_2px_6px_#c2cad9,-2px_-2px_6px_#ffffff,0_0_14px_rgba(215,46,82,0.32)] focus:outline-none focus:ring-2 focus:ring-[#d72e52]/40"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>

        <h2 className="pr-12 text-3xl font-extrabold tracking-tight text-[#d72e52] drop-shadow-[0_0_8px_rgba(215,46,82,0.35)]">
          Create &amp; Manage Task
        </h2>

        <div className="mt-8 space-y-6">
          <label className="block">
            <span className="mb-2 block text-sm font-bold">Task</span>
            <input
              className={fieldClass}
              type="text"
              placeholder="What do you have planned"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold">Priority</span>
            <select className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select Priority
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold">Category</span>
            <select className={fieldClass} defaultValue="">
              <option value="" disabled>
                Select Category
              </option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Study">Study</option>
              <option value="Health">Health</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Fullstack">Fullstack</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <button
          onClick={() => setToggle(true)}
            className="w-full rounded-2xl bg-gradient-to-br from-[#ed476b] to-[#ac1839] px-5 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-[6px_6px_12px_#c2cad9,-4px_-4px_9px_#ffffff,0_0_18px_rgba(215,46,82,0.42)] transition hover:-translate-y-0.5 hover:shadow-[3px_3px_8px_#c2cad9,-3px_-3px_8px_#ffffff,0_0_24px_rgba(215,46,82,0.6)] focus:outline-none focus:ring-2 focus:ring-[#d72e52]/40"
            type="button"
          >
            Add Task
          </button>
        </div>
      </section>
    </div>
  );
};

export default Form;
