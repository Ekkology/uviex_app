import React from "react";

function Grafica() {
  return (
    <>
      <iframe
        width="450"
        height="260"
        style={{ border: "1px solid #cccccc" }}
        src="https://thingspeak.com/channels/2313085/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"
      ></iframe>
    </>
  );
}
 export default Grafica