import AlsoViewedCard from "../components/AlsoViewedCard";

function AlsoViewed() {
  return (
    <div className="also-viewed-wrapper flex flex-col gap-3 p-3 pb-10 border-b border-black border-opacity-40">
      {/* Heading */}
      <h3 className="font-bold text-2xl p-3">
        Customers who viewed this game also viewed
      </h3>
      <div className="flex flex-row row-wrapper gap-8 p-3">
        {/* Just Dance */}
        <AlsoViewedCard
          image="https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/en_US/games/switch/j/just-dance-2022-switch/hero"
          dateReleased="11/04/21"
          title="Just Dance 2022"
          price="$49.99"
          platform="Nintendo Switch"
        />
        {/* Saints Row lV */}
        <AlsoViewedCard
          image="https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/en_US/games/switch/s/saints-row-iv-re-elected-switch/hero"
          dateReleased="03/27/20"
          title="Saints Row IV: Re-Elected"
          price="$39.99"
          platform="Nintendo Switch"
        />
        {/* Metroid Dread */}
        <AlsoViewedCard
          image="https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/en_US/games/switch/m/metroid-dread-switch/hero"
          dateReleased="10/08/21"
          title="Metroid Dread"
          price="$59.99"
          platform="Nintendo Switch"
        />
        {/* Fortnite */}
        <AlsoViewedCard
          image="https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/en_US/games/switch/f/fortnite-switch/hero"
          dateReleased="06/12/18"
          title="Fortnite"
          price="$0.00"
          platform="Nintendo Switch"
        />
        {/* Mario Party Superstars */}
        <AlsoViewedCard
          image="https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/en_US/games/switch/m/mario-party-superstars-switch/hero"
          dateReleased="10/29/21"
          title="Mario Party Superstars"
          price="$59.99"
          platform="Nintendo Switch"
        />
        {/* NES Online */}
        <AlsoViewedCard
          image="https://assets.nintendo.com/image/upload/c_pad,f_auto,q_auto,w_300/ncom/en_US/games/switch/n/nintendo-entertainment-system-nintendo-switch-online-switch/hero"
          dateReleased="09/18/18"
          title="NES Online"
          price="$0.00"
          platform="Nintendo Switch"
        />
      </div>
    </div>
  );
}

export default AlsoViewed;
