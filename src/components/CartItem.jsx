import React from 'react';
import { FcDeleteDatabase } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { add,remove } from '../redux/slices/CartSlice';
import { MdDelete } from "react-icons/md";



const CartItem = ({item, itemIndex}) => {

    const dispatch = useDispatch();
    const removeFromCart = () =>{
        dispatch(remove(item.id));
        toast.success("Removed");
    }
    return (
      <div>
        <div className="mx-auto justify-center items-center flex-col flex gap-12 p-8 border border-brown-300">
          <div>
            <img
              src={item.image}
              width={250}
              height={250}
              loading="lazy"
              alt="images"
            />
          </div>
          <div className='flex flex-col gap-4'>
            <p className="text-gray-800 font-semibold text-2xl text-left truncate  mt-1">
              {item.title}
            </p>
            <p className="text-gray-400 font-normal text-base text-left">
              {item.description}
            </p>
            <div className='flex justify-between items-center'>
              <p className='text-2xl'>${item.price}</p>
              <div  onClick={removeFromCart}>
                <MdDelete/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CartItem;