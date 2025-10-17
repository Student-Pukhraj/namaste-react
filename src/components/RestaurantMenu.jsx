import { useEffect } from "react";

const RestaurantMenu = () => {
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8191641&lng=75.7659513&restaurantId=689531&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
    );
    console.log(data);
    const newData = await data.json();
    console.log(newData);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

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
