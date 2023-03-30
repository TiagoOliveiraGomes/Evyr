import React, { useState } from "react";
import './styles.css'
import { SwiperSlider } from "../../commons/swiperSlider";
import { PointsOfCostAndUpgrade } from "../points_Cost_&_Upgrade";
import partsList from '../../../utils/partsList.json'

export function PartsViewCarousel() {
  const [currentPositionCarousel, setCurrentPositionCarousel] = useState<number>(1)
  const variavel = 1

  return (
    <div className="PartsViewCarousel-Container">
      <header>
        <h1>Head</h1>
        <h3>{partsList[currentPositionCarousel].name}</h3>
      </header>
      <main>
        <SwiperSlider />
        <PointsOfCostAndUpgrade />
      </main>
    </div>
  )
}
