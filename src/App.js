import React, { useState } from "react";
import "./App.css";
import { Button, Typography } from "@material-ui/core";
import WheaterCard from "./components/WheaterCard";
import LocationList from "./components/LocationList";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [list, setList] = useState([]);

  if (showSearch === false) {
    return (
      <div>
        <Typography variant="h3">Wheater</Typography>
        <Button
          onClick={() => {
            setDisabled(true);
            setShowSearch(true);
          }}
          variant="contained"
          color="secondary"
          style={{ width: 44, height: 44, borderRadius: 44 / 2, fontSize: 30 }}
        >
          +
        </Button>
      </div>
    );
  } else if (showSearch === true) {
    return (
      <div>
        <div>
          <Typography variant="h3">Wheater</Typography>
          <WheaterCard
            setDisabled={setDisabled}
            query={query}
            setQuery={setQuery}
            weather={weather}
            setWeather={setWeather}
            list={list}
            setList={setList}
          />
          <LocationList list={list} setList={setList} weather={weather} />
        </div>
        <Button
          onClick={() => {
            setDisabled(true);
          }}
          disabled={disabled}
          variant="contained"
          color="secondary"
          style={{ width: 44, height: 44, borderRadius: 44 / 2, fontSize: 30 }}
        >
          +
        </Button>
      </div>
    );
  }
}

export default App;
