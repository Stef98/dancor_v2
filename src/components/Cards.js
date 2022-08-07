import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/waterjetCutting.jpg"
              text="Stainless steel waterjet cutting"
              path="/services"
            />
            <CardItem
              src="images/AluuminiumLevers.jpg"
              text="Aluminium Levers"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/BlockCopper.jpg"
              text="Copper Block"
              path="/services"
            />
            <CardItem
              src="images/KnifeGateLiners.jpg"
              text="Knife Gate Liners"
              path="/services"
            />
            <CardItem
              src="images/Pulley.jpg"
              text="Modified Pulley"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src="images/AluminiumBars.jpg"
              text="Aluminium Bars"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/AluminiumHydraulicConnectors.jpg"
              text="Aluminium Hydraulic Connectors"
              path="/services"
            />
            <CardItem
              src="images/Bars.jpg"
              text="Bars"
              path="/services"
            />
            <CardItem
              src="images/FishingWeightMoulds.jpg"
              text="Modified Pulley"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            
            <CardItem
              src="images/Hydrolic Blocks.jpg"
              text="...."
              path="/services"
            />
            <CardItem
              src="images/Iets.jpg"
              text="......"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
          <CardItem
              src="images/2Goed.jpg"
              text="...."
              path="/services"
            />
            <CardItem
              src="images/KingsleyCaps.jpg"
              text="Kingsley Caps"
              path="/services"
            />
            <CardItem
              src="images/KnifeBed.jpg"
              text="Knife Bed"
              path="/services"
            />
              
          </ul>
          
          <ul className="cards__items">
          <CardItem
              src="images/Truck.jpg"
              text="Truck Wheel ca"
              path="/services"
            />
            <CardItem
              src="images/NylonTrolleyBaseUnit.jpg"
              text="...."
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            
            <CardItem
              src="images/StainlessSteelBushes.jpg"
              text="Stainless Steel Bushes"
              path="/services"
            />
             <CardItem
              src="images/Tags.jpg"
              text="Tags"
              path="/services"
            />
             <CardItem
              src="images/Propellar.jpg"
              text="Propellar"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
