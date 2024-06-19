import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the import path as needed
import Card from './poolCard'; // Import the Card component
import './PoolList.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const Pools = () => {
  const [pools, setPools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPools = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'pools')); // 'pools' is the name of your collection
        const poolsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPools(poolsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching pools:', error);
        setLoading(false);
      }
    };

    fetchPools();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pools-list">
      <Link to='/uploadPool'>upload pools</Link>
      <h2>Pool Listings</h2>
      {pools.map(pool => (
        <Card key={pool.id} pool={pool} />
      ))}
    </div>
  );
};

export default Pools;
