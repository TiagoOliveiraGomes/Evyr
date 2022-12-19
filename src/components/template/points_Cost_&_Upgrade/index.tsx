import React from "react";
import "./styles.css";
import { BiteIcon } from "../../../assets/imgs/icons/bite";

export function PointsOfCostAndUpgrade() {
  return (
    <div className="PointsOfCostAndUpgrade-Container">
        <div className="Atributes-points">
            <header>
                <h1>Upgrade</h1>
            </header>
            <main>
                <h3>+2</h3>
                <BiteIcon />
            </main>
        </div>
        <div className="Atributes-points">
            <header>
                <h1>Cost</h1>
            </header>
            <main>
                <h3>+2</h3>
                <BiteIcon />
            </main>
        </div>
    </div>
  )
}
