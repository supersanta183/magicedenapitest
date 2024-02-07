"use client";
import { AxiosResponse } from "axios";
import React from "react";
const axios = require("axios");
//hej

const page = () => {
  const fetchNFTs = async () => {
    fetch(
      "https://api-mainnet.magiceden.dev/v2/collections/batch/listings?offset=0&limit=10&min_price=0.001&max_price=1000000&sort_direction=asc",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collections: [
            {
              symbol: "elementerra_crystals",
            },
          ],
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <button onClick={fetchNFTs}>Fetch NFTs</button>
    </div>
  );
};

export default page;
