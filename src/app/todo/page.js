import { Description, Header } from "@/components";

const Todo = () => {
  return (
    <div className="w-[377px] h-[290px] mt-60 ml-200 bg-white rounded-md">
      {/* First element */}
      <div className="w-90 h-15">
        <h3 className="text-black font-inter ml-33 text-2xl font-bold">
          To-Do List
        </h3>
      </div>
      <div className="flex">
        <input
          className="w-[280px] h-[40px] bg-gray ml-4 text-[#71717A] mt-1 rounded-2xl border-amber-400"
          placeholder="Add a new task..."
        ></input>
        <button className="w-[59px] h-[40px] bg-blue-500 rounded-md text-sm font-normal text-[#f9f9f9] ml-3 mt-1">
          Add
        </button>
      </div>

      {/* three buttons */}
      <div className="flex gap-1.5 mt-5 ml-4">
        <button className="w-[59px] h-[32px] bg-blue-500 rounded-md text-sm font-normal text-[#f9f9f9]">
          All
        </button>
        <button className="w-[60px] h-[32px] bg-gray-100 rounded-md text-sm font-normal text-[#363636] ml-1.5">
          Active
        </button>
        <button className="w-[87px] h-[32px] bg-gray-100 rounded-md text-sm font-normal text-[#363636] ml-1.5">
          Completed
        </button>
      </div>
      <p className="mt-5 text-gray-400 ml-20 text-sm">
        No tasks yet. Add one above!
      </p>
      <p className="mt-10 text-gray-400 ml-20 text-xs">
        Powered by. <span className="text-[#3B73ED]">Pinecone Academy</span>
      </p>
    </div>
  );
};

export default Todo;
