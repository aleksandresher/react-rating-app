import React, { useState } from "react";
import Thanks from "./components/Thanks/Thanks";
import Rate from "./components/Rate/Rate";

const items = [
  {
    id: 1,
    title: "1",
    rated: false,
  },
  {
    id: 2,
    title: "2",
    rated: false,
  },
  {
    id: 3,
    title: "3",
    rated: false,
  },
  {
    id: 4,
    title: "4",
    rated: false,
  },
  {
    id: 5,
    title: "5",
    rated: false,
  },
];

function App() {
  const [rate, setRate] = useState(items);
  const [rated, setRated] = useState("");

  function clickHandler(event) {
    const newArray = items.map((item) => {
      if (Number(event.target.innerText) === item.id) {
        return {
          ...item,
          rated: true,
        };
      } else {
        return item;
      }
    });
    setRate(newArray);
  }

  function rateHandler() {
    const resultArray = rate.filter((item) => item.rated);
    setRated(resultArray[0].title);
  }

  return !rated ? (
    <Rate rate={rate} clickHandler={clickHandler} rateHandler={rateHandler} />
  ) : (
    <Thanks result={rated} />
  );
}
export default App;
