import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaRegCircle } from "react-icons/fa";

const TodoItems = ({text, id, isComplete, deleteTodo, toggle}) => {
  return (
    <div className="flex items-center my-3 gap-2">
        <div 
        onClick={() => {toggle(id)}}
        className="flex flex-1 items-center cursor-pointer">
            {isComplete ? <FaCheckCircle className="text-fuchsia-500" size={30}/> : <FaRegCircle size={30} className="text-fuchsia-500" /> }
            <p className={`text-slate-700 ml-4 decoration-slate-500 ${isComplete ? "line-through" : ""}` }>{text}</p>
        </div>
        <MdDeleteForever
         className="text-red-700 cursor-pointer" 
         size={30} 
         onClick={() => {deleteTodo(id)}}
         />
    </div>
  )
}

export default TodoItems