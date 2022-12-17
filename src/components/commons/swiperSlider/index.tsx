import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Pagination, Navigation} from 'swiper'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./styles.css"



export function SwiperSlider() {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{enabled: true}}
        navigation={true}
        pagination={{clickable: true}}
        modules={[Keyboard, Pagination, Navigation]}
    >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>
  )
}
