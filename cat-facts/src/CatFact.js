import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CatFact = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    fetchFact();
  }, []);

  const fetchFact = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
    }
  };

  const handleClick = () => {
    fetchFact();
  };

  return (
    <div>
      <div style={{ border: '1px solid black', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
        <p>{fact}</p>
      </div>
      <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" onClick={handleClick} href="resume.html">Get New Fact</a>
    </div>
  );
};

export default CatFact;
