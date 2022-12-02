import React from "react";
import styled from "styled-components";
const AmazonBannerSt = styled.iframe`
  width: auto;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 1vw;
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
  }
`;
const AmazonBanner = () => {
  return (
    <AmazonBannerSt
      src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=electronics&banner=1RJ5QAT5B55ECPXSXB82&f=ifr&linkID=01bd6fe1d01ef7558270f78fe39fdf74&t=natus3k-20&tracking_id=natus3k-20"
      width="300"
      height="250"
      scrolling="no"
      border="0"
      marginWidth="0"
      frameBorder="0"
      sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
    ></AmazonBannerSt>
  );
};

export default AmazonBanner;
