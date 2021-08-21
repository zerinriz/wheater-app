import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Typography, Container } from "@material-ui/core";
import WheaterCard from "./components/WheaterCard";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [arrow, setArrow] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([{ weather, id: Math.random() * 1000 }, ...list]);
    console.log(arrow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weather]);

  if (showSearch === false) {
    return (
      <Container>
        <Typography
          color="secondary"
          align="center"
          variant="h3"
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Weather Application
        </Typography>
        <WeatherDisplay
          list={list}
          setList={setList}
          weather={weather}
          arrow={arrow}
          setArrow={setArrow}
        />
        <Button
          onClick={() => {
            setDisabled(true);
            setShowSearch(true);
          }}
          variant="contained"
          color="secondary"
          style={{
            width: 44,
            height: 44,
            borderRadius: 44 / 2,
            fontSize: 30,
            marginTop: 30,
          }}
        >
          +
        </Button>
      </Container>
    );
  } else if (showSearch === true) {
    return (
      <Container>
        <Typography
          color="secondary"
          align="center"
          variant="h3"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          Weather Application
        </Typography>
        <WheaterCard
          setDisabled={setDisabled}
          setShowSearch={setShowSearch}
          query={query}
          setQuery={setQuery}
          weather={weather}
          setWeather={setWeather}
          list={list}
          setList={setList}
        />
        <WeatherDisplay
          list={list}
          setList={setList}
          weather={weather}
          arrow={arrow}
          setArrow={setArrow}
        />
        <Button
          onClick={() => {
            setDisabled(true);
          }}
          disabled={disabled}
          variant="contained"
          color="secondary"
          style={{
            width: 44,
            height: 44,
            borderRadius: 44 / 2,
            fontSize: 30,
            marginTop: 30,
          }}
        >
          +
        </Button>
      </Container>
    );
  }
}

export default App;
