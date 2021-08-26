import { Input } from "@material-ui/core";
import React from "react";

function WeatherCard({
  query,
  setQuery,
  weather,
  setWeather,
  setDisabled,
  setShowSearch,
}) {
  const api = {
    key: `${process.env.REACT_APP_UNSPLASH_URL}`,
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setShowSearch(false);
          setWeather(result);
          setQuery("");
          setDisabled(false);
          evt.preventDefault();
        });
    }
  };

  return (
    <div className="search-box">
      <Input
        color="secondary"
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
    </div>
  );
}

export default WeatherCard;
