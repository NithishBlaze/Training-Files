import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import zoro from "../assets/images/zoro.jpg"
import background from "../assets/images/background.jpg"
import onepieceLogo from "../assets/images/onepieceLogo.jpg"

const MyCarouselComp = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        <img src={background}  className="d-block w-100"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src={zoro}  className="d-block w-100"/>

      </Carousel.Item>
      <Carousel.Item>
      <img src={onepieceLogo}  className="d-block w-100" />

      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default MyCarouselComp
