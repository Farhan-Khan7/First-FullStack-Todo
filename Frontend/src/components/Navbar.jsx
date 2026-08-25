import React from 'react';

const stats = [
  { label: 'Total Task', value: 0 },
  { label: 'Completed Task', value: 0 },
  { label: 'Pending Task', value: 0 },
];

const Navbar = ({toggle , setToggle}) => {
  return (
    <header className="my-2 flex items-center gap-5 rounded-xl bg-[#e9edf5] px-5 py-4 font-sans text-[#293655] shadow-[12px_12px_24px_#c2cad9,-12px_-12px_24px_#ffffff] sm:w-[calc(100%_-_3rem)] sm:px-7">
      <section className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center sm:gap-8" aria-label="Dashboard summary">
        <div className="shrink-0">
          <p className="mb-1 text-[10px] font-extrabold tracking-[0.16em] text-[#d72e52]">YOUR WORKSPACE</p>
          <h1 className="text-2xl font-extrabold tracking-tight text-[#d72e52] drop-shadow-[0_0_8px_rgba(215,46,82,0.35)]">Dashboard</h1>
        </div>
        <div className="grid flex-1 grid-cols-3 gap-2 sm:gap-3">
          {stats.map((stat) => (
            <div
              className="min-w-0 rounded-xl px-2 py-3 text-center shadow-[5px_5px_10px_#c2cad9,-5px_-5px_10px_#ffffff] sm:px-4"
              key={stat.label}
            >
              <span className="block text-[10px] font-bold leading-tight text-[#71809f] sm:text-xs">{stat.label}</span>
              <strong className="mt-1 block text-2xl font-extrabold leading-none text-[#d72e52] drop-shadow-[0_0_8px_rgba(215,46,82,0.45)]">{stat.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <button
        onClick={() => setToggle(false)}
        className="shrink-0 rounded-md cursor-pointer bg-gradient-to-br from-[#ed476b] to-[#ac1839] px-4 py-4 text-sm font-extrabold text-white shadow-[5px_5px_10px_#c2cad9,-3px_-3px_7px_#ffffff,0_0_16px_rgba(215,46,82,0.45)] transition hover:-translate-y-0.5 hover:shadow-[3px_3px_8px_#c2cad9,-3px_-3px_7px_#ffffff,0_0_22px_rgba(215,46,82,0.6)] focus:outline-none focus:ring-2 focus:ring-[#d72e52]/40"
        type="button"
      >
        Add Task
      </button>

      <button
        className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-[#e9edf5] text-[#d72e52] shadow-[5px_5px_10px_#c2cad9,-5px_-5px_10px_#ffffff] transition hover:-translate-y-0.5 hover:shadow-[3px_3px_7px_#c2cad9,-3px_-3px_7px_#ffffff,0_0_16px_rgba(215,46,82,0.3)] focus:outline-none focus:ring-2 focus:ring-[#d72e52]/40"
        type="button"
        aria-label="Open user profile"
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <circle cx="12" cy="8" r="3.25" />
          <path d="M5.5 20c.7-3.1 3.2-5 6.5-5s5.8 1.9 6.5 5" />
        </svg>
      </button>
    </header>
  );
};

export default Navbar;