function AlsoViewedCard({ image, dateReleased, title, price, platform }) {
  return (
    <div className="flex flex-col items-left justify-center w-56 md:w-72 gap-3">
      {/* Game Image */}
      <img src={image} className="rounded-md" alt="" />
      {/* Date Released */}
      <p className="opacity-70">{dateReleased}</p>
      {/* Title */}
      <p className="font-bold text-lg">{title}&reg;</p>
      {/* Price */}
      <p className="text-xl font-bold">{price}</p>
      {/* Platform / Heart */}
      <div className="flex flex-row items-center justify-left gap-3 platform-options">
        <p className="border-b-2 border-red-500">{platform}</p>
        <i class="fa-regular fa-heart" />
      </div>
    </div>
  );
}

export default AlsoViewedCard;
