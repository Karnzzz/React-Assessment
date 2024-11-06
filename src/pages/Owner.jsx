
import sasuke from '../assets/sasuke.jpg'
const Owner = () => {
  return (
    <>
    <div className='flex justify-center font-bold text-4xl mt-20'>
        <h1>Karn - GROUP G - 10</h1>
    </div>
    <div className='flex justify-center w-full'>
        <img src={sasuke} alt="Sasuke" className='w-[300px] mt-4' />
        
    </div>

    <div className='flex flex-col items-center text-center mt-8 font-bold  '>
        <h1>Short Biography:</h1>
        <p className='w-[50%]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente iste quo accusamus nihil voluptatibus quibusdam voluptatum cumque tenetur labore nisi dolores fugit maiores, odio magnam omnis aliquid repudiandae! Fugiat.</p>
    </div>
    
    </>
  )
}

export default Owner