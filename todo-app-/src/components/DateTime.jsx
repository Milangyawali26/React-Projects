import React, { useEffect, useState } from 'react'

const DateTime = () => {

      const [dateTime, setDateTime] = useState("");
    
      useEffect(() => {
        //
        const interval = setInterval(() => {
          const date = new Date().toLocaleDateString();
          const time = new Date().toLocaleTimeString();
          setDateTime(`${date} - ${time}`);
        }, 1000);
    
        //cleanup function
        return () => clearInterval(interval);
        
      }, []);
  return (
    <div>
         <section className="datetime my-2 flex flex-row gap-5 text-2xl font-mono ">
        <h1>{dateTime}</h1>
      </section>
    </div>
  )
}

export default DateTime
