import React from "react";

import * as S from "./style";

function Card(props) {
  return <S.Container src={props.imgUrl}></S.Container>;
}

export default Card;
