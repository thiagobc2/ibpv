import React from "react";

import * as S from "./style";
import myLogo from "./logo.png";

// import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PodcastsIcon from "@mui/icons-material/Podcasts";

export default function Topbar() {
  return (
    <S.Container>
      <S.Center>
        <S.Content>
          <S.Logo src={myLogo} alt="Logo igreja" />
          <S.Title>Igreja Batista Palavra da Vida</S.Title>
        </S.Content>
        <S.Content>
          {/* <S.ButtonSocialMedia
            href="https://www.facebook.com/marketplace/101857903189722/?unavailable_product=1&rdid=iCmloWGKZELfo8qc"
            target="_blank"
          >
            <FacebookIcon />
          </S.ButtonSocialMedia> */}
          <S.ButtonSocialMedia
            href="https://www.instagram.com/ibpalavradavida_/"
            target="_blank"
          >
            <InstagramIcon />
          </S.ButtonSocialMedia>
          <S.ButtonSocialMedia
            href="https://www.youtube.com/@IgrejaBatistaPalavradaVida"
            target="_blank"
          >
            <YouTubeIcon />
          </S.ButtonSocialMedia>

          <S.ButtonSocialMedia
            href="https://open.spotify.com/show/4rs3xAHm54zKHQ4aKrZfXH"
            target="_blank"
          >
            <PodcastsIcon />
          </S.ButtonSocialMedia>
          <S.Search />
        </S.Content>
      </S.Center>
    </S.Container>
  );
}
