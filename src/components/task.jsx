export const Task = (list) => {
  return (
    <div className="flex w-[345px] h-[62px] bg-[#F9FAFB] items-center pl-4 rounded-md ml-4 mt-5">
      <input
        type="checkbox"
        className="w-[20px] h-[20px] border border-[#767676] bg-white rounded"
      />
      <span className="ml-2.5 text-black text-sm font-normal">{list.name}</span>
      <button className="ml-auto w-[67px] h-[30px] text-[#EF4444] bg-[#FEF2F2] rounded-md text-sm">
        Delete
      </button>
    </div>
  );
};
