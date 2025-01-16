export const BgDecoration = () => {
  return (
    <>
      <div className="md:h-[60vh] md:w-[66vw] h-[30vh] w-full bg-teal-600  dark:bg-teal-800 absolute -z-10 bottom-0 rounded-t-full"></div>
      <div className="md:h-[45vh] md:w-[50vw] h-[25vh] w-[80vw] bg-teal-400  dark:bg-teal-600 absolute -z-10 bottom-0 rounded-t-full"></div>
      <div className="md:h-[30vh] md:w-[32vw] h-[20vh] w-[55vw] bg-teal-200  dark:bg-teal-400 absolute -z-10 bottom-0 rounded-t-full"></div>
      <div className="h-fit w-fit  absolute z-10 bottom-8 ">
        {" "}
        <p className="text-xs font-medium text-center text-gray-500 dark:text-slate-100">
          &copy; {new Date().getFullYear()} IN-VENTO.
        </p>
      </div>
    </>
  );
};
