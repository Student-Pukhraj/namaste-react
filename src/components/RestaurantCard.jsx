import { CDN_URL, No_IMAGE_FALLBACK } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.card?.card?.info ?? {};

  if (!resData) {
    return <h2>No data found</h2>;
  }

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={
          cloudinaryImageId ? CDN_URL + cloudinaryImageId : No_IMAGE_FALLBACK
        }
        alt="res-image"
      />
      <h3>{name ?? "Sarvika Foods"}</h3>
      <h4>{cuisines?.join(" ") ?? "Thalis North Indian Biryani"}</h4>
      <h4>{avgRating ?? "4.3"} stars</h4>
      <h4>{costForTwo ?? "200"} for two</h4>
      <h4>{sla?.deliveryTime ?? "10"} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
