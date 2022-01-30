import React from 'react';
import { MdLocationPin } from "react-icons/md";

const PlaceCard = (props) => {
    // const cardTagValue = (props.openSpots==0)?"SOLD OUT":"ONLINE";
    return (
        <div className='card'>
            <div className="cardleft">
                <img src={`./../assets/${props.imageUrl}`} alt="" />
            </div>
            <div className="cardright">
                <p className='place'><MdLocationPin className='locpin'/> {props.location.toUpperCase()} &nbsp;&nbsp;&nbsp;<a href={props.googleMapsUrl}>View on Google Maps</a></p>
                <h2>{props.title}</h2>
                <h5>{props.startDate} - {props.endDate}</h5>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default PlaceCard;
