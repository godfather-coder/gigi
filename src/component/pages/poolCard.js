import React from 'react';
import './Card.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';



const Card = ({ pool }) => {

    const navigate = useNavigate();


    const handleClick = () => {
        navigate(`/pool/${pool.id}`);
      };
    return (
        <div className="card" onClick={handleClick}>
            {console.log(pool)}
            <div className='cardivhor'>
                    <h3>Price: {pool.price}</h3>
                    <p>Description: {pool.description}</p>
                    <p>Place: {pool.location}</p>
                    <p>Available Places: {pool.spaces}</p>
                {/* <div className="card-images">
        {pool.images && pool.images.map((image, index) => (
          <img key={index} src={image} alt={`Pool ${index}`} />
        ))}
      </div> */}
            </div>
            <div>
                <img className="images" alt='pool' src={pool.links[0]} />
            </div>
        </div>
    );
};

export default Card;
