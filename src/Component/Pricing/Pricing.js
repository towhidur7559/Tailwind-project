import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 20, benefits:[
            'lifetime free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ] },
        { id: 2, name: 'Regular', price: 250 , benefits:[
            'everything on free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals']},
        { id: 3, name: 'Premium', price: 40 , benefits:[
            'everything on regular free',
            'unlimited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals']},
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            <h1 className='text-6xl font-mono text-white'>Best Deals of the Town</h1>

            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOptions.map(option => <PricingOption key={option.id}
                        option={option}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;