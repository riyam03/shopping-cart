import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} = useSelector((state)=>state);
  const [totalAmount,setTotalAmount] = useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0));
  },[cart])
  return (
    <div className=" ">
     {
      cart.length > 0 ? 
      (
          <div className="flex gap-x-40 ">
          <div>
            {
              cart.map((item,index)=>{
              return <CartItem key={item.id} item={item} itemIndex={index}/> 
            })
            }
          </div>
           <div className="flex flex-col justify-between w-full ">
            <div className="">
              <div className="font-semibold text-green-600 text-2xl">Your Cart</div>
              <div className="font-semibold text-green-600 text-6xl">Summary</div>
              <p className="font-semibold text-black text-xl py-5 px-1">
                <span>Total Items:{cart.length}</span>
              </p>
            </div>
           
           <div className="font-semibold text-black text-xl p-2 items-center">
            <p className="px-20 items-center">Total Amount : ${totalAmount}</p>
            <button className="text-white rounded-sm bg-green-600 p-2 w-full text-center  hover:bg-green-800 duration-50 ease-in">
              Checkout now 
            </button>
           </div>
           </div>

        </div>
      ):
      (<div className="h-screen flex justify-center items-center ">
      <div>
        <h1 className="text-black font-semibold text-xl"> Cart Empty </h1>
        
      <Link to={"/"}>
      <button className="bg-green-600 text-white font-semibold p-2 items-center rounded-full pl-5 pr-5 hover:bg-green-800 duration-50 ease-in">
      Shop Now
      </button>
      </Link>
      </div>
      </div>)
}
    </div>
  )
};

export default Cart;
