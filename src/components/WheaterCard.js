import React from "react";

function WheaterCard({
  query,
  setQuery,
  weather,
  setWeather,
  setDisabled,
  setList,
  list,
}) {
  const api = {
    key: "9c4f68f6ba2005d71a5429d401b1ac13",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const search = (evt) => {
    if (evt.key === "Enter") {
      setWeather("konju");
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(result);
          console.log(weather);
          setQuery("");
          setDisabled(false);
          evt.preventDefault();
          setList([{ weather, id: Math.random() * 1000 }, ...list]);
        });
    }
  };
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
      />
    </div>
  );
}

export default WheaterCard;
