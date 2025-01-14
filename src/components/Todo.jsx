import { RiTodoFill } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import TodoItems from "./TodoItems";
import { IoAddCircle } from "react-icons/io5";

const Todo = () => {

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim();
        
        if(inputText === "") {
            return null;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false,
        }
        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";
    }

    const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

    const deleteTodo = (id) => {
        setTodoList((prevTodos) => {
           return prevTodos.filter((todo) => todo.id !== id)
        });
    }

    const toggle = (id) => {
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if(todo.id === id) {
                    return {...todo, isComplete: !todo.isComplete}
                }
            })
            return todo;
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList])

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
            {todoList.map((item, index) => {
                return <TodoItems 
                key={index} 
                text={item.text} 
                id={item.id}
                isComplete={item.isComplete}
                deleteTodo={deleteTodo}
                toggle={toggle}
                />
            })}
        </div>
    </div>
  )
}

export default Todo