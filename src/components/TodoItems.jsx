import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const TodoItems = ({text}) => {
  return (
    <div className="flex items-center my-3 gap-2">
        <div className="flex flex-1 items-center cursor-pointer">
            <FaCheckCircle className="text-fuchsia-500" size={30}/>
            <p className="text-slate-700 ml-4 ">{text}</p>
        </div>
        <MdDeleteForever className="text-red-700 cursor-pointer" size={30} />
    </div>
  )
}

export default TodoItems