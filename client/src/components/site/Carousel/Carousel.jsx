import React from 'react'
import './Carousel.css'
const Carousel = () => {
  return (
    <React.Fragment>
    <div id="carouselExampleRide" class="carousel slide mycarousel" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active mycarousel-slide">
      <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item mycarousel-slide">
    
      <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item mycarousel-slide">
      <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </React.Fragment>
  )
}

export default Carousel