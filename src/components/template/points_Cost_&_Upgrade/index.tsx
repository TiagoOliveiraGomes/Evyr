import React from "react";
import "./styles.css";
import { BiteIcon } from "../../../assets/imgs/icons/bite";
import { DnaIcon } from "../../../assets/imgs/icons/dna";

export function PointsOfCostAndUpgrade() {
  return (
    <div className="PointsOfCostAndUpgrade-Container">
        <div className="Atributes-points">
            <header>
                <h1>Upgrade</h1>
            </header>
            <main className="text-green-500">
                <h3>+2</h3>
                <BiteIcon />
            </main>
        </div>
        <div className="Atributes-points">
            <header>
                <h1>Cost</h1>
            </header>
            <main className="text-red-500">
                <h3>-200</h3>
                <DnaIcon />
            </main>
        </div>
    </div>
  )
}
