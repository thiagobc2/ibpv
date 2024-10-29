import React from "react";
import Slider from "react-slick";

import Card from "./components/Card";

import * as S from "./style";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <S.Container>
      <div className="slider-container">
        <Slider {...settings}>
          <Card imgUrl="https://bnz06pap004files.storage.live.com/y4mE-YGk_H6j-pDbw3J29vdMOiLX9f6idYc40Eso8LuQDWuQH2lUk_pKjNsmjJyo-DD3H8ok6htRnJez2L387Y_UM6cvQUIzuQeghtMmOt2fKMLDRJ2BAlMEERqSlZK4_3Xds5j6uTttqR0dBnaJdt_kqDZDcQoAkZrTE0x2NEnyYnAsBahyxus_oQ4KMNIrGXsv8gXI48gg-CCpWIUgq6ZasQGCRL1zqYCPR2NsjG_4u0?encodeFailures=1&width=1500&height=500" />
          <Card imgUrl="https://bnz06pap004files.storage.live.com/y4mkCvRQRBgijAdQmT-B-dPeze5l0lPz3djbg4Y7k8ixD9bU3eTSDvFrDNKghUKol_QfCc4Fdoev3lclX1p5B9ftn-BM-j1H6eBmILUrbtVicMizJ5U0pClfjXyplcOrjwbGF_IU1J1TeQBP6naYPgu7W4tuaZBoCHGLt_IlQYfFkx4c1ZE81N-j91fTb_L8OUcFZR8gIRNeDbxcP_VRLBQnUyzXSBTEZ3WbixiQYBYBXM?encodeFailures=1&width=1500&height=500" />
        </Slider>
      </div>
    </S.Container>
  );
}
