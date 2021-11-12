import React from 'react'
import { Carousel } from 'react-bootstrap'

const HsCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/images/banner.jpg"
                    alt="banner"
                    />
                </Carousel.Item>
            </Carousel>
            
        </div>
    )
}

export default HsCarousel
