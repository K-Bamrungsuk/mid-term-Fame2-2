import { useLoaderData } from "react-router";
import { useUserStore } from "../stores/userStore";
import api from "../api/mainApi";
import { getAllList } from "../api/toDoListApi";
import { useState } from "react";
import axios from "axios";

function ToDoListPage() {
  const token = useUserStore((state) => state.token);
  const logout = useUserStore((state) => state.logout);
  const output = useLoaderData();

  const [todos, setToDos] = useState(output)
  const [input, setInput] = useState("")
  
  const hdlAdd = async () => {
    try {

      await api.post(("todos/2"), { content: input })

      const newList = await getAllList()

      setToDos(newList)

      setInput("")
    } catch (error) {
      console.log(error)
    }
  }


  const hdlDelete = async (el) => {
  try {
    
    await api.delete(`/todos/2/${el.id}`)

    const newList = await getAllList()
    
    setToDos(newList)

  } catch (error){
    console.log(error)
  }
}


  return (
    <div className="m-auto w-full h-screen bg-sky-50 flex justify-center items-center">
      <div className="w-140 h-120 border rounded-2xl bg-white overflow-hidden">

        <div className="flex justify-between p-4">
          <h1 className="font-bold text-2xl mt-2 ml-10">My To do! </h1>
          <p className="mt-2 mr-10 text-2xl">🚀</p>
        </div>

        <div className="flex justify-between p-4 border-b border-gray-300">
          <input
          onChange={(e)=> {setInput(e.target.value)}} 
          className="text-md py-2 px-6 text-gray-700 ml-5 text-lg" 
          type="text"
          placeholder="new task"
          />
          <button 
          className="text-md py-2 px-6 rounded-3xl text-white bg-sky-600 mr-5 cursor-pointer"
          onClick={hdlAdd}
          >Add</button>
        </div>

        <div className="flex flex-col gap-5 mt-6 h-70 overflow-auto">

          {todos.map((el, index) => (

            <div  key={index} className="flex gap-4 mx-4 justify-between">
              <div className="flex">
                <input className="w-10" type="checkbox" />
                <p>{el?.content}</p>
              </div>
              
              <div className="flex gap-8">
                <button
                className="text-gray-500"
                >edit</button>
                <button
                className="text-gray-500 cursor-pointer hover:text-black"
                onClick={()=>hdlDelete(el)}
                >x</button>
              </div>
              
            </div> ))}
          
        </div>
      </div>
    </div>
  );
}

export default ToDoListPage;
