export const Task = (actions) => {
  return (
    <div className="flex w-[330px] h-[62px] bg-[#F9FAFB] items-center pl-4 rounded-md ml-4 mt-5">
      <input
        type="checkbox"
        className="w-[20px] h-[20px] border border-[#767676] bg-white rounded"
        checked={actions.isCompleted}
      />

      {actions.isCompleted ? (
        <span className="ml-1.5 text-black text-sm font-normal line-through">
          {actions.name}
        </span>
      ) : (
        <span className="ml-1.5 text-black text-sm font-normal">
          {actions.name}
        </span>
      )}

      {actions.isCompleted && (
        <button className="ml-34 w-[67px] h-[30px] text-[#EF4444] bg-[#FEF2F2] rounded-md text-sm">
          Delete
        </button>
      )}
    </div>
  );
};
