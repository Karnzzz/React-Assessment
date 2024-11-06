import { Link } from "react-router-dom"

const Button = () => {
  return (
    <>
    <div className='flex justify-center font-bold'>
        <Link to = "/homeuser">
        <button className='bg-gray-500 h-14 rounded-md px-4 mt-10 mx-14'
        >User Home Sector</button>
        </Link>
        <Link to = "/homeadmin">
        <button className='bg-gray-500 h-14 rounded-md mx-24 mt-10 px-4'
        >Admin Home Sector</button>
        </Link>
    </div>
    
    </>
  )
}

export default Button