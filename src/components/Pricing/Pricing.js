import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Awesome Feature',
                'Extra Feature',
                'Unnecessary feature',
                'Will never use Feature',
                'Hudai Feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99, features: [
                'Everything on free',
                'Extra Feature',
                'Unnecessary feature',
                'Will never use Feature',
                'Hudai Feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 9.99, features: [
                'Awesome Free in premium',
                'Extra Feature',
                'Unnecessary feature',
                'Will never use Feature',
                'Hudai Feature'
            ]
        },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white'>Best deal of the town</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    >
                    </PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;