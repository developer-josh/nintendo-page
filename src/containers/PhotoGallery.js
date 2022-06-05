const PhotoGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 photo-gallery-wrapper">
      {/* Photo Gallery */}

      {/* Photos */}
      <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
        <div className="col-span-2 md:row-span-2 gallery-item">
          <img src="https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot01?v=2021120220" />
        </div>
        <div className="col-span-1 gallery-item">
          <img src="https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot02?v=2021120220" />
        </div>
        <div className="col-span-1 gallery-item">
          <img src="https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot03?v=2021120220" />
        </div>
        <div className="col-span-1 gallery-item">
          <img src="https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot04?v=2021120220" />
        </div>
        <div className="col-span-1 gallery-item">
          <img src="https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/switch/s/stardew-valley-switch/screenshot-gallery/screenshot05?v=2021120220" />
        </div>
      </div>

      {/* Gallery Nav */}
      <div className="gallery-nav">
        <div className="flex flex-row items-center justify-center gap-5">
          <i class="fa-solid fa-arrow-left" />
          <i class="fa-solid fa-circle-dot" />
        </div>
        <div className="flex flex-row items-center justify-center gap-5">
          <i class="fa-solid fa-circle-dot" />
          <i class="fa-solid fa-arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
