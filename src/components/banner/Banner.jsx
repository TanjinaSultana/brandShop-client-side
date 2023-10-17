
const Banner = () => {
    return (
        <div className="mt-8 mb-0 relative">
<div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
  <img src="https://i.ibb.co/JnNTCNd/slideC1.webp" className="w-full  h-[500px] rounded-lg" />
  </div> 
  <div id="item2" className="carousel-item w-full">
  <img src="https://i.ibb.co/r5Q1cHP/slide4C.jpg" className="w-full  h-[500px] rounded-lg" />
  </div> 
  <div id="item3" className="carousel-item w-full">
  <img src="https://i.ibb.co/Rh0HG0d/slideC3.jpg" className="w-full  h-[500px] rounded-lg" />
  </div> 
  <div id="item4" className="carousel-item w-full">
  <img src="https://i.ibb.co/yYDyvJF/slideC2.jpg" className="w-full  h-[500px] rounded-lg" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
<div className="absolute top-48 text-3xl   text-center container mx-auto">
    <h1 className="font-bold text-white">Shop Smart,Shop Online<br></br> In Your Ultimate E-Commerce Destination!</h1>
    <button className="btn mt-8 border-none text-white bg-[#880ED4]">Explore More</button>
    </div>
        </div>
    );
};

export default Banner;