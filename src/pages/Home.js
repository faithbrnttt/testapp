import React from 'react'
import '../styles/HomeStyle.css';
import { useState, useEffect } from 'react';

const Home = () => {
    const [products, setProducts] = useState(0)
    const URL = `http://localhost:3000/products`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                setProducts(json); // Step 2: Store the fetched data in state
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="home">
            {products.length > 0 ? ( // Step 3: Check if products array has data
                products.map((product) => ( // Step 4: Map through the products and render each one
                    <div key={product._id} className="product-card">
                        <h2>{product.name}</h2>
                        <p>Quantity: {product.quantity}</p>
                        <p>Price: ${product.price}</p>
                        <img src={product.image} alt={product.name} />
                    </div>
                ))
            ) : (
                <p>Loading products...</p> // Show a loading message while the data is being fetched
            )}
        </div>
    );
};

export default Home;