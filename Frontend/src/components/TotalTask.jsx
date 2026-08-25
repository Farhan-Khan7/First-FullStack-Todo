import React from 'react';

const TotalTask = () => {
  return (
    <section className="flex min-h-[380px] max-h-[520px] w-full max-w-md flex-col overflow-hidden rounded-xl bg-[#e9edf5] p-5 font-sans text-[#293655] shadow-[10px_10px_20px_#c2cad9,-10px_-10px_20px_#ffffff]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-extrabold tracking-[0.15em] text-[#d72e52]">OVERVIEW</p>
          <h2 className="mt-1 text-xl font-extrabold">Total Tasks</h2>
        </div>
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e9edf5] text-xl font-extrabold text-[#d72e52] shadow-[inset_3px_3px_6px_#c2cad9,inset_-3px_-3px_6px_#ffffff]">
          05
        </span>
      </div>

      <div className="mt-5 h-px bg-[#cbd3e1]" a/>

      <div className="mt-4 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="space-y-3">
          {/* <article className="rounded-2xl bg-[#e9edf5] p-4 shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-bold">Farhan khan</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded-xl bg-[#d72e52]/12 px-3 py-1.5 text-xs font-extrabold text-[#d72e52]">High</span>
                  <span className="rounded-xl bg-[#6b5cff]/10 px-3 py-1.5 text-xs font-extrabold text-[#4e42d4]">Personal</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Edit task" className="grid h-10 w-10 place-items-center rounded-2xl text-[#293655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m4 20 4.3-1L19 8.3a2.1 2.1 0 0 0-3-3L5.3 16 4 20Z" /><path d="m14.5 6.8 2.7 2.7" /></svg>
                </button>
                <button type="button" aria-label="Complete task" className="grid h-10 w-10 place-items-center rounded-2xl text-[#293655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 4.2 4L19 6" /></svg>
                </button>
                <button type="button" aria-label="Delete task" className="grid h-10 w-10 place-items-center rounded-2xl text-[#ff3655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M10 11v5M14 11v5M6 7l1 13h10l1-13M9 7V4h6v3" /></svg>
                </button>
              </div>
            </div>
          </article> */}

          <article className="rounded-2xl bg-[#e9edf5] p-4 shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-bold">Design dashboard layout</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded-xl bg-[#d72e52]/12 px-3 py-1.5 text-xs font-extrabold text-[#d72e52]">High</span>
                  <span className="rounded-xl bg-[#4a8b70]/12 px-3 py-1.5 text-xs font-extrabold text-[#286348]">Work</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Edit task" className="grid h-10 w-10 place-items-center rounded-2xl text-[#293655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">✎</button>
                <button type="button" aria-label="Complete task" className="grid h-10 w-10 place-items-center rounded-2xl text-[#293655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">✓</button>
                <button type="button" aria-label="Delete task" className="grid h-10 w-10 place-items-center rounded-2xl text-lg text-[#ff3655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">♲</button>
              </div>
            </div>
          </article>

          <article className="rounded-2xl bg-[#e9edf5] p-4 shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-bold">Review project notes</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded-xl bg-[#e49a2b]/15 px-3 py-1.5 text-xs font-extrabold text-[#ae6800]">Medium</span>
                  <span className="rounded-xl bg-[#5e7be7]/12 px-3 py-1.5 text-xs font-extrabold text-[#3e5fc6]">Study</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Edit task" className="grid h-10 w-10 place-items-center rounded-2xl text-[#293655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">✎</button>
                <button type="button" aria-label="Complete task" className="grid h-10 w-10 place-items-center rounded-2xl text-[#293655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">✓</button>
                <button type="button" aria-label="Delete task" className="grid h-10 w-10 place-items-center rounded-2xl text-lg text-[#ff3655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">♲</button>
              </div>
            </div>
          </article>

          <article className="rounded-2xl bg-[#e9edf5] p-4 shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-bold">Plan weekly schedule</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded-xl bg-[#4a8b70]/15 px-3 py-1.5 text-xs font-extrabold text-[#286348]">Low</span>
                  <span className="rounded-xl bg-[#6b5cff]/10 px-3 py-1.5 text-xs font-extrabold text-[#4e42d4]">Personal</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Edit task" className="grid h-10 w-10 place-items-center rounded-2xl text-[#293655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">✎</button>
                <button type="button" aria-label="Complete task" className="grid h-10 w-10 place-items-center rounded-2xl text-[#293655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">✓</button>
                <button type="button" aria-label="Delete task" className="grid h-10 w-10 place-items-center rounded-2xl text-lg text-[#ff3655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">♲</button>
              </div>
            </div>
          </article>

          <article className="rounded-2xl bg-[#e9edf5] p-4 shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-bold">Read design references</h3>
                <div className="mt-2 flex items-center gap-2">
                  <span className="rounded-xl bg-[#4a8b70]/15 px-3 py-1.5 text-xs font-extrabold text-[#286348]">Low</span>
                  <span className="rounded-xl bg-[#5e7be7]/12 px-3 py-1.5 text-xs font-extrabold text-[#3e5fc6]">Study</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" aria-label="Edit task" className="grid h-10 w-10 place-items-center rounded-2xl text-[#293655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">✎</button>
                <button type="button" aria-label="Complete task" className="grid h-10 w-10 place-items-center rounded-2xl text-[#293655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">✓</button>
                <button type="button" aria-label="Delete task" className="grid h-10 w-10 place-items-center rounded-2xl text-lg text-[#ff3655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">♲</button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TotalTask;
