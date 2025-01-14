import { RiTodoFill } from "react-icons/ri";
import { useRef, useState } from "react";
import TodoItems from "./TodoItems";
import { IoAddCircle } from "react-icons/io5";

const Todo = () => {

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        console.log(inputText);
    }

    const [todoList, setTodoList] = useState([]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        {/* title */}
        <div className="flex items-center mt-7">
            <RiTodoFill className="text-fuchsia-500" size={30} />
            <h1 
            className="font-bold font-mono bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent text-3xl">Todo List</h1>
        </div>

        <div className="flex items-center bg-gray-200 my-7 rounded-full shadow-md">
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Add your task ..."
                className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 placeholder:text-slate-600 "
            />
            <button 
            onClick={add}
            className="pr-4"
            >
                <IoAddCircle className="text-fuchsia-500" size={30} />
            </button>
        </div>
                       {/* todo list items */}

        <div>
            <TodoItems 
            text="Learn coding everyday"
            />
            <TodoItems 
            text="Teach myself cooking everyday"
            />
        </div>
    </div>
  )
}

export default Todo