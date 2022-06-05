function Footer() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-black bg-opacity-80 text-white p-3">
      <div className="grid grid-cols-4 w-fit gap-6">
        <h4 className="col-span-2 font-semibold text-lg">Contact Us</h4>
        <h4 className="col-span-2 font-semibold text-lg">Website Feedback</h4>
        {/* Social Media Icon */}
        <div className="flex flex-col items-center justify-center rounded-md bg-blue-800 text-white w-14 h-14">
          <i class="fa-brands fa-facebook fa-2xl" />
        </div>
        {/* Social Media Icon */}
        <div className="flex flex-col items-center justify-center rounded-md bg-pink-600 text-white w-14 h-14">
          <i class="fa-brands fa-instagram fa-2xl" />
        </div>
        {/* Social Media Icon */}
        <div className="flex flex-col items-center justify-center rounded-md bg-blue-500 text-white w-14 h-14">
          <i class="fa-brands fa-twitter fa-2xl" />
        </div>
        {/* Social Media Icon */}
        <div className="flex flex-col items-center justify-center rounded-md bg-red-500 text-white w-14 h-14">
          <i class="fa-brands fa-youtube fa-2xl" />
        </div>
      </div>
      {/* ESRB */}
      <img
        src="https://code.nintendo.com/web-components/esrb-rating/assets/en-e10.svg"
        alt="ESRB"
        className="inline-block w-14"
      />
      {/* Footer Description */}
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-sm opacity-40">
          © 2021 Nintendo. Games are property of their respective owners.{" "}
        </p>
        <p className="text-sm opacity-40">
          Nintendo of America Inc. | Headquarters are in Redmond, Washington,
          USA | Support{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
