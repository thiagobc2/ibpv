import React from "react";

import Topbar from "../../components/TopBar";
import * as S from "./style";
import Carousel from "../../components/Carousel";

export default function Main() {
  return (
    <S.Container>
      <Topbar />
      <Carousel />
    </S.Container>
  );
}
