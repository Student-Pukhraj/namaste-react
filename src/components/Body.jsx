import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Whenever state variables update, react triggers a reconcilation cycle(re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.918938&lng=75.7887458&collection=80475&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const newData = json?.data?.cards;
    setListOfRestaurants(newData);
    setFilteredRestaurant(newData);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res?.card?.card?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.card.card.info?.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((item, index) => (
          <RestaurantCard key={index} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
