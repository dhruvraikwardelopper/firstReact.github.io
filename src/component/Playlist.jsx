import React, { useEffect, useState } from 'react';

function Playlist() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')  // Ensure this URL matches your backend
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;
  if (products.length === 0) return <p>No products found.</p>;

  return (
    <div className='grid grid-cols-3 gap-20 justify-self-center'>
      {products.map(({ _id, name, price, inStock ,url ,discount}) => (
        <div key={_id} style={{ border: '1px solid gray', margin: '10px', padding: '20px' }} className='max-w-[400px] bg-[#74cdfa] overflow-hidden rounded-4xl text-center from-neutral-300'>
          <img src={url} className='w-full rounded-2xl'/>
          <h3 className='text-3xl font-medium '>{name}</h3>
          <p className='font-bold text-2xl'>Price: ${price}</p>
          <p>Discount: {discount}%</p>
          <p>Status: {inStock ? 'In Stock' : 'Out of Stock'}</p>
          </div>
      ))}
    </div>
  );
}

export default Playlist;
