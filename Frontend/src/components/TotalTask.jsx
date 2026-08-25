import React from "react";

const TotalTask = ({ todos, setTodos , deleteTodos , completedTodos }) => {

  const totalTodos = todos.filter((todo) => todo.completed === false).length;

  return (
    <section className="flex h-[520px] w-full max-w-xl flex-col overflow-hidden rounded-xl bg-[#e9edf5] p-5 font-sans text-[#293655] shadow-[10px_10px_20px_#c2cad9,-10px_-10px_20px_#ffffff]">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-extrabold tracking-[0.15em] text-[#d72e52]">
            OVERVIEW
          </p>
          <h2 className="mt-1 text-xl font-extrabold">Total Tasks</h2>
        </div>
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#e9edf5] text-xl font-extrabold text-[#d72e52] shadow-[inset_3px_3px_6px_#c2cad9,inset_-3px_-3px_6px_#ffffff]">
          {totalTodos}
        </span>
      </div>

      <div className="mt-5 h-px bg-[#cbd3e1]" />

      <div className="mt-4 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="space-y-3">
        {todos.filter((todo) => todo.completed === false).map((elem, key) => {
            return (
              <article key={elem._id} className="rounded-2xl bg-[#e9edf5] p-4 shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-bold">{elem.task}</h3>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="rounded-xl bg-[#d72e52]/12 px-3 py-1.5 text-xs font-extrabold text-[#d72e52]">
                        {elem.priority}
                      </span>
                      <span className="rounded-xl bg-[#4a8b70]/12 px-3 py-1.5 text-xs font-extrabold text-[#286348]">
                        {elem.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    
                    <button
                    onClick={() => completedTodos(elem._id)}
                      type="button"
                      aria-label="Complete task"
                      className="grid h-10 w-10 place-items-center rounded-2xl text-[#293655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]"
                    >
                      ✓
                    </button>
                    <button
                      onClick={() => deleteTodos(elem._id)}
                      type="button"
                      aria-label="Delete task"
                      className="grid h-10 w-10 place-items-center rounded-2xl text-lg text-[#ff3655] shadow-[4px_4px_8px_#c2cad9,-4px_-4px_8px_#ffffff]"
                    >
                      ♲
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TotalTask;
