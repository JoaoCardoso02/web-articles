import React from "react";
import Dots from "assets/svg/dots.svg";
import Ellipse from "assets/svg/ellipse.svg";
import { ContainerDots, ContainerEllipse } from "./styles";

export default function SvgBackground() {
  return (
    <div>
      <ContainerDots>
        <Ellipse />
      </ContainerDots>
      <ContainerEllipse>
        <Dots />
      </ContainerEllipse>
    </div>
  );
}
