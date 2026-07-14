import { Navigate, useLoaderData } from "react-router";
import { useUserStore } from "../stores/userStore";
import api from "../api/mainApi";
import { getAllList } from "../api/toDoListApi";

function ToDoListPage() {
  const token = useUserStore((state) => state.token);
  const logout = useUserStore((state) => state.logout);
  const output = useLoaderData();

  if (!token) return <Navigate to="/" replace />;
  return (
    <div className="m-auto w-full h-screen bg-sky-50 flex justify-center items-center">
      <div className="w-140 h-120 border rounded-2xl bg-white">

        <div className="flex justify-between p-4">
          <h1 className="font-bold text-2xl mt-2 ml-10">My To do! </h1>
          <p className="mt-2 mr-10 text-2xl">🚀</p>
        </div>

        <div className="flex justify-between p-4 border-b border-gray-300">
          <h1 className="text-md py-2 px-6 text-gray-500 ml-5">new task</h1>
          <button className="text-md py-2 px-6 rounded-3xl text-white bg-sky-600 mr-5">Add</button>
        </div>

        <div className="flex flex-col gap-5 mt-6">
          {output.map((el, index) => ( <p key={index}>{el?.content}</p>))}
        </div>
      </div>
    </div>
  );
}

export default ToDoListPage;
