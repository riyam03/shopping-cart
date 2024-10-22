import {toast} from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item,itemIndex}) => {
  
  const dispatch = useDispatch();
  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.success("item removed")
  }
  return (<div  className="flex flex-row items-end justify-between " >
    <div className="flex  flex-row justify-between items-center border-b-2 gap-3 p-4 mt-10 ml-5 ">
      <div className="h-[250px] w-[240px] ">
        <img src={item.image} className="h-full w-full" />
      </div>
      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {item.title}
        </h1>
        <h1 className="w-40 text-gray-400  font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
      </div>
      <div className="flex justify-between gap-12">
        <p className="text-green-600 font-semibold item-center mt-5 w-full">${item.price}</p>
        <div
          onClick ={removeFromCart} className="h-[60px] w-[60px]  px-2">
          <MdDelete className="h-full w-full"/></div>
      </div>
    </div>
  </div>);
};

export default CartItem;
