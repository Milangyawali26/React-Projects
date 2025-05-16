import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto ">
        <Link to={"/"}>
          <div className="ml-5 ">
            <h1 className="uppercase  text-red-900 font-bold   text-xl sm:text-2xl md:text-3xl  cursor:pointer tracking-wide">
              React_redux_SHOPPING_CART
            </h1>{" "}
          </div>
        </Link>
        <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
          <li className=" cursor-pointer  hover:text-red-700  "><Link to={'/'}>Home</Link></li>
          <li className=" cursor-pointer  hover:text-red-700 "><Link to={'/cart'}>Cart</Link></li>
        </ul>
      </nav>
    </div>
  );
}
