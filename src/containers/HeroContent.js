import GoldPoints from "../assets/gold-points.png";
import "../styles/animations.css";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Featured Image */}
      <div className="flex flex-col items-center justify-center hero-container relative w-full">
        <div className="image-wrapper">
          <img
            src="https://assets.nintendo.com/image/upload/c_pad,f_auto,h_432,q_auto,w_768/ncom/en_US/games/switch/s/stardew-valley-switch/hero"
            alt="game cover"
            className="md:p-5 relative md:top-12"
          ></img>
          <img
            src="https://code.nintendo.com/web-components/esrb-rating/assets/en-e10.svg"
            alt="ESRB"
            className="hidden md:inline-block md:absolute bottom-10 right-10"
          ></img>
        </div>
      </div>

      {/* Featured Actions */}
      <div className="flex flex-col items-left justify-center relative w-full gap-4 p-4 md:flex-row md:justify-between md:mt-5">
        {/* Left side */}
        <div className="flex flex-col items-left justify-center gap-3">
          {/* Platform */}
          <p className="border-b-2 border-red-500 mt-2 w-fit">
            Nintendo Switch
          </p>
          {/* Game Title */}
          <h2 className="text-2xl font-semibold">Stardew Valley</h2>
          {/* Availability */}
          <p>Available now</p>
          {/* Add to Wish List */}
          <div className="flex flex-row items-center justify-left gap-2 cursor-pointer text-red-500 hover:border-b hover:border-red-500 w-fit">
            <i class="fa-regular fa-heart" />
            <p className="font-bold">Add to Wish List</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col items-left justify-center gap-3">
          {/* Price */}
          <p className="text-3xl font-semibold">$14.99</p>
          {/* Purchase Button */}
          <div
            className="flex flex-row items-center justify-between bg-red-500 p-3 w-full cursor-pointer hover:bg-red-600 rounded-md"
            id="purchase-btn"
          >
            <button className=" text-white font-semibold">Buy Digital</button>
            <i class="fa-solid fa-arrow-right" />
          </div>
          {/* Nintendo Points */}
          <div className="flex flex-row gap-2">
            <img src={GoldPoints} alt="Gold Points" className="w-6 h-6" />
            <p>Eligible for up to 75 points</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
