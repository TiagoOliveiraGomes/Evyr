import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import "./styles.css"
import { Keyboard, Pagination, Navigation} from 'swiper'
import { Player } from '../../player'

export function SwiperSlider() {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={true}
        navigation={true}
        pagination={{clickable: false}}
        modules={[Keyboard, Pagination, Navigation]}
    >
        <SwiperSlide>
          <Player />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
    </Swiper>
  )
}
