import "./../App.css";

function DetailsCards() {
  return (
    <>
      <div className="main-wrap">
        <div className="picture"><img src="https://store.yarin-shahaf.co.il/cdn/shop/products/73.jpg?v=1642482331&width=360" className="img-fluid" alt="Makeup" style={{ width: "150rem", height: "300px" }}></img></div>
        <div>
          <span> <h3>A case for restoring dry and damaged hair that has been straightened without salts - shampoo, mask and serum - Power Element</h3></span>
          <h5>Good make-up is make-up that you don't replace,
            the one that makes your skin look healthy and smooth,
            that emphasizes what you need and hides what you don't like,
            that the make-up goes on well and already feels like a part of your skin.
            Whether you prefer full coverage makeup, light or cream.
            BB makeup recommended for you is makeup that refers to several elements.
            So how do you choose make-up from all the existing types of make-up?
            Let's start with the skin type - make-up rich in moisture will not suit oily skin,
            while make-up-powder will look less good on dry skin.
            Then choose the desired level of coverage: BB cream for light coverage and rich in moisture,
            make-up for high coverage.</h5>
        </div>
      </div>

      <div>
        <span> <h5>Phone: { }</h5></span>
        <span> <h5>Email: { }</h5></span>
        <span> <h5>Web: { }</h5></span>
        <span> <h5>State: { }</h5></span>
        <span> <h5>Country: { }</h5></span>
        <span> <h5>City: { }</h5></span>
        <span> <h5>Street: { }</h5></span>
        <span> <h5>HouseNo: { }</h5></span>
        <span> <h5>Zip: { }</h5></span>

      </div>
    </>


  );
}

export default DetailsCards;