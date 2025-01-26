import React, { useState } from 'react';

const BostonHousePricePrediction = () => {
  const [formData, setFormData] = useState({
    CRIM: '',
    ZN: '',
    INDUS: '',
    CHAS: '',
    NOX: '',
    RM: '',
    Age: '',
    DIS: '',
    RAD: '',
    TAX: '',
    PTRATIO: '',
    B: '',
    LSTAT: '',
  });

  const [prediction, setPrediction] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://ml-1-un9e.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });
      const data = await response.json();
      setPrediction(data.prediction || 'No prediction received');
    } catch (error) {
      console.error('Error during prediction:', error);
      setPrediction('An error occurred.');
    }
  };


  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        margin: 0,
        padding: '50px 0',
      }}
    >
      <div
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
          padding: '30px',
          textAlign: 'center',
          width: '100%',
          maxWidth: '400px',
          backdropFilter: 'blur(10px)',
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: '2.5rem' }}>
          Boston House Price Prediction
        </h1>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <input
              key={key}
              type="text"
              name={key}
              placeholder={key}
              value={formData[key]}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                margin: '10px 0',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.8)',
                color: '#333',
              }}
            />
          ))}
          <button
            type="submit"
            style={{
              background: 'linear-gradient(45deg, #ff5f6d, #ffc371)',
              border: 'none',
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#fff',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          >
            Predict
          </button>
        </form>
        <br />
        <p>{prediction}</p>
      </div>
    </div>
  );
};

export default BostonHousePricePrediction;
