export const Add = () => {
  return (
    <div className="flex">
      <input
        className="w-[280px] h-[40px] ml-4 mt-1 pl-2 rounded-md bg-white border border-[#E4E4E7] text-[#71717A]"
        placeholder="Add a new task..."
      />
      <button className="w-[59px] h-[40px] bg-blue-500 rounded-md text-sm font-normal text-white ml-3 mt-1">
        Add
      </button>
    </div>
  );
};
