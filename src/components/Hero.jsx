const Hero = () => {
    return (
        <main className="hero">

      <div className="heroCon">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />SHOES.</p>
        <div className="buttons">
            <button className="button1">Shop Now</button>
            <button className="button2">Category</button>
        </div>
        <div className="comlog">
            <p>Also Available On</p>
            <div>
                <img src="/images/flipkart.png" alt="" />
                <img src="/images/amazon.png" alt="" />
            </div>
        </div>
      </div>
      <div className="heroImg">
        <img src="/images/shoe.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
