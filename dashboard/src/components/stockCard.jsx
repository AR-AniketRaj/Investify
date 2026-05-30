import axios from "axios";

import { useEffect, useState } from "react";

function StockCard() {
  const [stock, setStock] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/stocks/quote/AAPL")

      .then((res) => {
        setStock(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Apple Stock</h1>

      {stock && (
        <div>
          <p>Current Price: {stock.c}</p>

          <p>High Price: {stock.h}</p>

          <p>Low Price: {stock.l}</p>
        </div>
      )}
    </div>
  );
}

export default StockCard;
