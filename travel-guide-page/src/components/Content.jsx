import React from 'react';
import PlaceCard from './PlaceCard.jsx';
import data from '../data.js';

const Content = () => {
    return (
        <div className='content'>
            {data.map((dataItem)=>{
                return <PlaceCard key={dataItem.id} {...dataItem}/>
            })}

        </div>
    );
};

export default Content;
