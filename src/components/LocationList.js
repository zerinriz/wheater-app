import React from "react";
import LocationWheater from "./LocationWheater";

function LocationList({ list, setList }) {
  return (
    <div className="container">
      <ul className="list">
        {list.map((item) => (
          <LocationWheater
            list={list}
            setList={setList}
            key={item.id}
            todo={item}
            weather={item.weather}
          />
        ))}
      </ul>
    </div>
  );
}

export default LocationList;
