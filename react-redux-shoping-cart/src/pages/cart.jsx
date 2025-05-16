import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div className="flex "> 
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} />
              ))}
            </div>
          </div>

          <div className="w-=[300px">
            <div className="felx flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className=" font-bold text-lg text-red-800 ">
                your cart summery
              </h1>
              <p>
                <span className="text-grey-900 font-bold">Total items</span>
                <span> : {cart.length}</span>
              </p>
              <p>
                <span className="text-grey-900 font-bold">Total Amount</span>
                <span> : {totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center ">
          <h1 className="text-gray-800 font-bold text-xl mb-5 ">
            {" "}
            Your cart is empty
          </h1>
          <Link to={"/"}>
            <button className="bg-red-900 text-white border-2 rounded-xl font-bold p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
