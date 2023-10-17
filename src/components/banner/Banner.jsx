
const Banner = () => {
    return (
        <div className="mt-8 mb-0 relative">
       
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/JnNTCNd/slideC1.webp" className="w-full  h-[500px] rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/yYDyvJF/slideC2.jpg" className="w-full  h-[500px] rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Rh0HG0d/slideC3.jpg" className="w-full  h-[500px] rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/r5Q1cHP/slide4C.jpg" className="w-full  h-[500px] rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
<div className="absolute top-48 text-3xl   text-center container mx-auto">
    <h1 className="font-bold text-white">Shop Smart,Shop Online<br></br> In Your Ultimate E-Commerce Destination!</h1>
    <button className="btn mt-8 border-none text-white bg-[#880ED4]">Explore More</button>
    </div>
        </div>
    );
};

export default Banner;