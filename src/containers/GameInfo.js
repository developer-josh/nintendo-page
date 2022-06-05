function GameInfo() {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-10 border-b border-black border-opacity-40">
      {/* Game Description */}
      <div className="flex flex-col items-left justify-center gap-4 tracking-wide md:m-10">
        <h2 className="text-2xl font-semibold">
          You're moving into the valley...
        </h2>
        <p>
          You’ve inherited your grandfather’s old farm plot in Stardew Valley.
          Armed with hand-me-down tools and a few coins, you set out to begin
          your new life. Can you learn to live off the land and turn these
          overgrown fields into a thriving home? It won’t be easy. Ever since
          Joja Corporation came to town, the old ways of life have all but
          disappeared. The community center, once the town’s most vibrant hub of
          activity, now lies in shambles. But the valley seems full of
          opportunity. With a little dedication, you might just be the one to
          restore Stardew Valley to greatness!
        </p>
        <p>
          Now with Multiplayer! Invite 1-3 players to join you in the valley!
          Players can work together to build a thriving farm, share resources,
          and build relationships with townspeople or each other. As more hands
          are better than one, players have the option to scale profit margin on
          produce sold for a more challenging experience.
        </p>
        {/* Explore Button */}
        <div
          className="flex flex-row items-center gap-3 justify-between bg-red-500 p-3 w-fit cursor-pointer hover:bg-red-600 rounded-md"
          id="purchase-btn"
        >
          <button className=" text-white font-semibold">
            Explore this game's official site
          </button>
          <i class="fa-solid fa-arrow-right" />
        </div>
      </div>

      {/* Game Info Details */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {/* Grid Section (Game Info) */}
        <div className="flex flex-col items-left justify-left gap-2 bg-check">
          <div className="flex flex-row items-center justify-left gap-2">
            <i class="fa-regular fa-calendar" />
            <h3 className="font-bold text-lg">Release date:</h3>
            <p className="opacity-60 ml-4">October 05, 2017</p>
          </div>
          {/* Grid Item */}
          <div className="flex flex-row items-center justify-left gap-2">
            <i class="fa-solid fa-people-carry-box"></i>
            <h3 className="font-bold text-lg">Players:</h3>
            <p className="opacity-60 ml-4">up to 4 players</p>
          </div>
          {/* Grid Item */}
          <div className="flex flex-row items-center justify-left gap-2">
            <i class="fa-solid fa-gamepad"></i>
            <h3 className="font-bold text-lg">Genre:</h3>
            <p className="opacity-60 ml-4">Indie, Simulation, Role-Playing</p>
          </div>
          {/* Grid Item */}
          <div className="flex flex-row items-center justify-left gap-2">
            <i class="fa-regular fa-building" />
            <h3 className="font-bold text-lg">Publisher:</h3>
            <p className="opacity-60 ml-4">Concerned Ape</p>
          </div>
        </div>

        {/* Grid Section (Game Info) */}
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1 bg-check">
          <div className="flex flex-row items-center justify-left gap-2">
            <i class="fa-regular fa-sun" />
            <h3 className="font-bold text-lg">Developer:</h3>
            <p className="opacity-60 ml-4">ConcernedApe</p>
          </div>
          {/* Grid Item */}
          <div className="flex flex-row items-center justify-left gap-2">
            <i class="fa-regular fa-circle-xmark" />
            <h3 className="font-bold text-lg">Game file size:</h3>
            <p className="opacity-60 ml-4">1.5 GB</p>
          </div>
          {/* Grid Item */}
          <div className="flex flex-row items-center justify-left gap-2">
            <i class="fa-regular fa-flag" />
            <h3 className="font-bold text-lg">Supported languages:</h3>
            <p className="opacity-60 ml-4">
              Japanese, French, German, Italian, Spanish, Korean, Portuguese,
              Russian, Chinese, English
            </p>
          </div>
        </div>

        {/* Grid Section (Play Modes) */}
        <div className="flex flex-col items-left justify-left gap-5 gray-bg mt-5 p-3">
          <h3 className="text-xl font-semibold">Supported Play Modes:</h3>
          {/* Platforms */}
          <div className="flex flex-row items-center justify-center gap-5 mt-3 text-center">
            {/* Platform Item */}
            <div className="flex flex-col items-center justify-center gap-5">
              <i class="fa-solid fa-tv fa-2xl" />
              <p>TV Mode</p>
            </div>
            {/* Platform Item */}
            <div className="flex flex-col items-center justify-center gap-5">
              <i class="fa-solid fa-table-cells fa-2xl" />
              <p>Tabletop Mode</p>
            </div>
            {/* Platform Item */}
            <div className="flex flex-col items-center justify-center gap-5">
              <i class="fa-solid fa-gamepad fa-2xl"></i>
              <p>Handheld mode</p>
            </div>
          </div>
          <p>
            Software compatibility and play experience may differ on Nintendo
            Switch Lite. Additional accessories may be required (sold
            separately). See{" "}
            <a
              href="https:/www.nintendo.com"
              target="_blank"
              rel="noreferrer"
              className="text-red-500 underline"
            >
              support
            </a>{" "}
            for details.
          </p>
        </div>

        {/* ESRB Rating */}
        <div className="flex flex-col items-left justify-left gap-5 gray-bg p-3">
          <h3 className="text-xl font-semibold">ESRB Rating</h3>
          <div className="flex flex-row items-center justify-center gap-3">
            <img
              src="https://code.nintendo.com/web-components/esrb-rating/assets/en-e10.svg"
              alt="ESRB"
            />
            <div className="flex flex-col items-left justify-center">
              <p className="border-b border-black w-fit">
                Simulated Gambling, Use of Alcohol, Fantasy Violence, Use of
                Tobacco, Mild Blood, Mild Language
              </p>
              <p className="mt-1">Users interact</p>
            </div>
          </div>
        </div>

        {/* Nintendo Online Information */}
        <div className="flex flex-col items-left justify-left gap-4 gray-bg md:col-span-2 p-3">
          {/* Online Image */}
          <img
            src="https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/global/logos/logo-nso.svg"
            alt="Nintendo Online"
            className="w-40"
          />
          <p>
            Play online, access classic Super NES™ games, and more with a
            Nintendo Switch Online membership.
          </p>

          <a
            href="https://www.nintendo.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold flex flex-row items-center justify-left gap-2"
          >
            <span>Learn More</span>
            <i class="fa-solid fa-arrow-right"></i>
          </a>

          <h3 className="font-semibold">This game supports:</h3>

          {/* This Game Supports Buttons */}
          <div className="flex flex-row items-left justify-left gap-2">
            {/* Online Play Button */}
            <div
              className="flex flex-row items-center justify-between bg-red-500 p-3 w-fit cursor-pointer hover:bg-red-600 rounded-md"
              id="purchase-btn"
            >
              <button className=" text-white font-semibold">Online Play</button>
            </div>
            {/* Save Data Cloud Button */}
            <div
              className="flex flex-row items-center justify-center bg-red-500 p-3 w-fit cursor-pointer hover:bg-red-600 rounded-md"
              id="purchase-btn"
            >
              <button className=" text-white font-semibold">
                Save Data Cloud
              </button>
            </div>
          </div>
        </div>

        {/* Legal Stuff */}
        <div className="flex flex-col items-left justify-left gap-3 w-full mb-10">
          <p className="text-sm">
            Nintendo Switch Online membership (sold separately) and Nintendo
            Account required for online play. Not available in all countries.
            Internet access required for online features. Terms apply.
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-red-500 underline"
            >
              nintendo.com/switch-online
            </a>
          </p>
          <p className="text-sm">
            Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
