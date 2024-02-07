'use client'
import { AxiosResponse } from "axios";
import React from "react";
const axios = require("axios");

const page = () => {
  const fetchNFTs = async () => {
    try {
      const response: AxiosResponse = await axios.post(
        'https://api-mainnet.magiceden.dev/v2/collections/batch/listings?offset=0&limit=10&min_price=0.001&max_price=1000000&sort_direction=asc',
        {
          collections: [
            {
              symbol: 'elementerra_crystals',
            },
          ],
        },
        {
          headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
          },
        }
      );
  
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  return (
  <div>
    <button onClick={fetchNFTs}>Fetch NFTs</button>
  </div>) 
};

export default page;
