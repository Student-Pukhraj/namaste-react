import { useEffect, useState } from "react";
import Shimmmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8191641&lng=75.7659513&restaurantId=443540"
      );
      console.log(response);
      const newData = await response?.json();
      console.log(newData?.data);
    } catch (error) {
      console.log("menu api not fetched", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resMenu === null) return <Shimmmer />;

  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
