import React, { useState } from "react";
import "./TripList.css";
import useFetch from "./../hooks/useFetch";

const TripList = () => {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips, loading, error } = useFetch(url);

  console.log(trips);
  console.log(error);

  return (
    <div className="trip-list">
      <h2>Trip List</h2>
      <div className="btnContainer">
        <div>
          <button onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}>Europe</button>
        </div>
        <div>
          <button onClick={() => setUrl("http://localhost:3000/trips?loc=america")}>America</button>
        </div>
        <div>
          <button onClick={() => setUrl("http://localhost:3000/trips")}>All</button>
        </div>
        <div>
          <button onClick={() => setUrl("http://localhost:3000/trips123")}>For error</button>
        </div>
      </div>

      <ul>
        {loading
          ? "Loading"
          : error !== null
          ? error
          : trips &&
            trips.map((trip, i) => (
              <li key={i}>
                <h3>{trip.title}</h3>
                <p>{trip.price}</p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default TripList;
