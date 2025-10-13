import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // console.log("listOfRestaurants", listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.918938&lng=75.7887458&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    // console.log(json.data.cards, "json data cards");
    const newData = json.data.cards;
    // const slicedData = newData.slice(3, 16);
    setListOfRestaurants(newData);
  };

  // console.log("Body rendered");

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.card.card.info?.avgRating > 4
            );
            setListOfRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((item, index) => (
          <RestaurantCard key={index} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;