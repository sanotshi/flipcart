import React from 'react'

const Header = () => {
  return (
    <div className='bg-white shadow-lg'>
        <div className='flex m-2 pb-2 justify-between ml-48 mr-36'>
            <img className="" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="icon" />
            <div>
            <input type="text" placeholder='Search for products and brands' className='border  w-[700px] bg-blue-100 p-1 rounded-lg'/>
            </div>
            <div className='flex'>
            <img className="w-10 h-10 mx-4" src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0"alt="userIcon"/>
        
        <img className="h-10 w-10 ml-4" src="https://static.vecteezy.com/system/resources/previews/000/356/583/original/vector-shopping-cart-icon.jpg" alt="cartItems"/>
        <label className=' text-2xl p-1 '>cart</label>
        </div>
        </div>
    </div>
  )
}

export default Header