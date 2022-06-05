import NintendoLogo from "../assets/nintendo.png";

function Navbar() {
  return (
    <div className="flex flex-col justify-center items-center relative w-full">
      {/* Top Nav */}
      <div className="flex flex-column justify-between items-center bg-white w-full border-b border-black border-opacity-30">
        <div className="flex flex-row items-center justify-center">
          {/* Brand Logo */}
          <div className="flex flex-col items-center justify-center w-24 h-12 md:h-16 md:w-36 p-2 bg-red-500 cursor-pointer">
            <img src={NintendoLogo} alt="Nintendo" />
          </div>

          {/* Search Bar */}
          <div className="hidden sm:inline-block nav-item ">
            <i class="fa-solid fa-magnifying-glass" />
            <form className="inline-block">
              <input
                type="search"
                placeholder="Search"
                className="p-1 hover:border-b hover:border-red-500 bg-transparent outline-none text-black lg:border-b lg:border-black"
              ></input>
            </form>
          </div>
        </div>

        {/* Top Right side */}
        <div className="flex flex-row items-center justify-center">
          <div className="cursor-pointer">
            {/* Support */}
            <div className="hidden md:inline-block nav-item">
              <i class="fa-solid fa-circle-info" />
              <a
                href="https://www.nintendo.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold"
              >
                Support
              </a>
            </div>

            {/* Wish List */}
            <div className="hidden md:inline-block nav-item">
              <i class="fa-solid fa-heart" />
              <a
                href="https://www.nintendo.com"
                target="_blank"
                rel="noreferrer"
                className="font-semibold"
              >
                Wish List
              </a>
            </div>

            {/* Login / Sign Up */}
            <div className="md:inline-block nav-item">
              <i class="fa-solid fa-user" alt="User" />
              <span className="font-semibold">
                Log In{" "}
                <span className="hidden md:inline-block"> / Sign Up</span>
              </span>
            </div>
          </div>

          {/* Hamburger Menu */}
          <div className="cursor-pointer md:hidden nav-item">
            <i class="fa-solid fa-bars" />
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="hidden md:flex flex-row items-center justify-center border-b border-black border-opacity-30 w-full p-3">
        {/* Games */}
        <div className="inline-block nav-item nav-bottom">
          <i class="fa-solid fa-gamepad" />
          <a
            href="https://www.nintendo.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Games
          </a>
          <i class="fa-solid fa-caret-down" />
        </div>

        {/* Hardware */}
        <div className="inline-block nav-item nav-bottom">
          <i class="fa-solid fa-gamepad"></i>
          <a
            href="https://www.nintendo.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Hardware
          </a>
          <i class="fa-solid fa-caret-down" />
        </div>

        {/* News and Events */}
        <div className="inline-block nav-item nav-bottom">
          <i class="fa-solid fa-gamepad"></i>
          <a
            href="https://www.nintendo.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            News {"&"} Events
          </a>
        </div>

        {/* Play Nintendo */}
        <div className="inline-block nav-item nav-bottom">
          <i class="fa-solid fa-star"></i>
          <a
            href="https://www.nintendo.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Play Nintendo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
