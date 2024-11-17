import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from './../components/CartItem';
import Navbar from './../components/Navbar';


const Cart = () => {
    
    const {cart} = useSelector((state) => state);
    console.log("Printing the cart");
    console.log(cart);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount( cart.reduce( (acc,curr) => acc + curr.price,0));

    },[cart])

    return (
        <div>
            <Navbar/>
           {
            cart.length > 0?
            (<div className='w-10/12 md:w-8/12 flex flex-col mx-auto m-4 gap-4 items-center'>
                
                <div className='flex flex-col gap-5'>
                    {
                        cart.map( (item,index) => {
                            return <CartItem key={item.id} item={item} itemIndex={index} />
                        })
                    }
                </div>

                <div className='flex mt-5 flex-col text-xl items-center gap-2'>
                        <div>
                            Your Cart
                        </div>
                        <div>Summary</div>
                        <p>
                            <span className='font-semibold'>Total Items: {cart.length}</span>
                        </p>
                </div>
                <div className='flex flex-col text-xl items-center gap-4'>
                    <p className='font-semibold'>Total Amount: ${totalAmount}</p>
                    <button
                    className='bg-green-700 p-2 rounded-md mx-auto text-white font-medium'
                    >
                    CheckOut Now
                    </button>
                </div>
            </div>
            ) : 
            (
                <div className='flex flex-col gap-4 items-center justify-center  h-screen'>
                <p className='text-2xl'
                >Cart Empty</p>
                <NavLink to="/" >
                    <button
                    className='bg-green-700 text-xl p-2 rounded-md mx-auto text-white font-medium'
                    >Shop Now</button>
                </NavLink>
                </div>
            )
           }


        </div>
    );
};

export default Cart;