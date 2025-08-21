import { Task, Add } from "@/components";
const Todo = () => {
  return (
    <div className="w-[377px] mt-60 ml-200 bg-white rounded-md shadow-md p-4">
      <h3 className="text-black font-inter text-2xl font-bold mb-4">
        To-Do List
      </h3>

      <Add></Add>
      <Task name="Create PR"></Task>

      <div className="flex gap-1.5 mt-5 ml-4">
        <button className="w-[59px] h-[32px] bg-blue-500 rounded-md text-sm font-normal text-white">
          All
        </button>
        <button className="w-[60px] h-[32px] bg-gray-100 rounded-md text-sm font-normal text-[#363636] ml-1.5">
          Active
        </button>
        <button className="w-[87px] h-[32px] bg-gray-100 rounded-md text-sm font-normal text-[#363636] ml-1.5">
          Completed
        </button>
      </div>

      {/* Footer */}
      <p className="mt-5 text-gray-400 ml-20 text-sm">
        No tasks yet. Add one above!
      </p>
      <p className="mt-10 text-gray-400 ml-20 text-xs">
        Powered by <span className="text-[#3B73ED]">Pinecone Academy</span>
      </p>
    </div>
  );
};

export default Todo;
