import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
    <div >
        <div>
            <ul className="flex justify-end bg-gray-200 h-20 border-b border-gray-600 space-x-10 items-center ">
                <li className="font-bold text-xl mr-4">
                <Link to="/">Home</Link>
                </li>
                <li className="font-bold text-xl mr-4">
                    <Link className="mr-8" to="/owner" >Owner</Link>
                </li>
            </ul>
        </div>
    </div>

    </>
  )
}

export default Nav