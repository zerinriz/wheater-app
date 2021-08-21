import React from "react";
import LocationWheater from "./LocationWheater";

function LocationList({ list, setList, weather }) {
  return (
    <div className="container">
      <ul className="list">
        {list.map((todo) => (
          <LocationWheater
            list={list.id}
            setList={setList}
            key={todo.id}
            weather={todo.weather}
          />
        ))}
      </ul>
    </div>
  );
}

export default LocationList;
