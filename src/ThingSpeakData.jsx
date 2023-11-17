import React, { useEffect, useState } from "react";
import TrafficLight from './TrafficLight';
import  Boton from './Boton'


function ThingSpeakData() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reemplaza 'TU_CLAVE_DE_API' y 'TU_CANAL' con tus datos reales
    const apiKey = "3ZKSGYWHSD5SLT07";
    const channel = "2313085";
    const fetchData = async () => {
      const response = await fetch(
        `https://api.thingspeak.com/channels/${channel}/feeds.json?api_key=${apiKey}`
      );
      const data = await response.json();

      setData(data.feeds);
      setIsLoading(false);
    };

    fetchData();

    // Consulta los datos de ThingSpeak cada segundo
    const interval = setInterval(fetchData, 1000);

    // Limpia el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div>Cargando datos...</div>;
  }

  // Obtiene el último dato de la lista
  const lastData = data[data.length - 1];
  
  return (
    <div>
      <TrafficLight field1={lastData.field1} /> {/* Pasa field1 como prop */}
      <Boton buttonText={lastData.field1 }></Boton>
    </div>
  );
}

export default ThingSpeakData;
