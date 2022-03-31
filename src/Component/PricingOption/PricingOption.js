import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benifit from '../Benefit/Benifit';

const PricingOption = (props) => {
    const {name, price, benefits} = props.option;
    return (
        <div className='bg-white p-4 rounded-lg '>
            <h2 className='bg-indigo-300 py-2 rounded text-xl text-white font-bold'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='font-bold text-xl text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl text-left'>Benefits:</h3>
                {/* <p className='flex items-center'><CheckCircleIcon className='w-4 h-4 text-green-900 mr-2'></CheckCircleIcon>Awesome Features</p> */}
                {
                    benefits.map(benefit =><Benifit benefit={benefit}></Benifit>)
                }
            </div>
            <button className='bg-green-500 text-white flex justify-center w-full p-4 rounded mt-4 gap-1 hover:text-yellow-900 font-bold'>Buy Now <ArrowRightIcon className='w-6 h-6 '></ArrowRightIcon></button>
        </div>
    );
};

export default PricingOption;