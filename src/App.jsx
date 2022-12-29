import XmarkIcon from "./components/icons/XmarkIcon";
import MoonIcon from "./components/icons/MoonIcon";

// import FontAwesomeIcon from "";
const App = () => {
  return (
    <div className="bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="font-sans text-xl font-bold uppercase tracking-[0.5em] text-white">
            Todo
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className="mt-6 flex items-center gap-4 overflow-hidden rounded-md bg-white px-3 py-3">
          <span className="inline-block h-4 w-4 rounded-full border-2" />
          <input
            className="w-full text-sm text-gray-400 outline-none"
            type="text"
            placeholder="Add element"
          />
        </form>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <div className=" rounded-md bg-white ">
          <article className="flex items-center gap-4 border-b border-b-gray-400 px-4 py-2">
            <button className="inline-block h-4 w-4 rounded-full border-2" />
            <p className="grow text-gray-400">Complete online Javascript </p>
            <button>
              <XmarkIcon />
            </button>
          </article>
          <article className="flex items-center gap-4 border-b border-b-gray-400 px-4 py-2">
            <button className="inline-block h-4 w-4 rounded-full border-2" />
            <p className="grow text-gray-700">Complete online Javascript </p>
            <button>
              <XmarkIcon />
            </button>
          </article>
          <article className="flex items-center gap-4 border-b border-b-gray-400 px-4 py-2">
            <button className="inline-block h-4 w-4 rounded-full border-2" />
            <p className="grow text-gray-700">Complete online Javascript </p>
            <button>
              <XmarkIcon />
            </button>
          </article>
          <section className="flex items-center justify-between px-4 py-2 text-gray-400">
            <span>5 items left</span>
            <button>Clear completed</button>
          </section>
        </div>
      </main>

      <section className="container mx-auto mt-6 px-4">
        <div className=" rounded-md bg-white flex justify-center font-medium gap-4 p-4">
          <button className="text-blue-500 ">All</button>
          <button className=" text-gray-400">Active</button>
          <button className=" text-gray-400">Completed</button>
        </div>
      </section>

      <p className="text-center mt-8 text-gray-400">Drag and drop to reorder the list</p>
    </div>
  );
};

export default App;
