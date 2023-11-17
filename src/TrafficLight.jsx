// TrafficLight.js
import React, { useState, useEffect } from 'react';
import './style/TrafficLight.css';

function TrafficLight({ field1 }) {
  const [lightValue, setLightValue] = useState(99);

  useEffect(() => {
    // Utiliza el valor de field1 obtenido desde las props
    setLightValue(field1);

  }, [field1]);

  const determineLight = () => {
    if (lightValue >= 0 && lightValue <= 2.5) {
      return 2; // green
    } else if (lightValue > 2.5 && lightValue <= 7) {
      return 1; // yellow
    } else if (lightValue > 7) {
      return 0; // red
    }
  };

  const currentLight = determineLight();
  const lights = ['red', 'yellow', 'green'];

  return (
    <div className="container">
      <div className="semaforo">
        {lights.map((color, index) => (
          <span
            key={index}
            className={`luces-circulo ${currentLight === index ? color : ''}`}
            color={color}
          ></span>
        ))}
      </div>
      <div className="stick"></div>
      <div className="floor"></div>
    </div>
  );
}

export default TrafficLight;
