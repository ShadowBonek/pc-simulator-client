import React from "react";
import styled from "styled-components";
// import pcmasterM from "img/pcmasterM.jpg";
// import pcmasterS from "img/pcmasterS.jpg";
const HexSt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
  }
`;
const Hex = () => {
  return (
    <HexSt>
      {/* <picture>
        <source media="(max-width: 567px)" srcSet={pcmasterS} />
        <source media="(min-width: 568px)" srcSet={pcmasterM} />
        <img className="ads" src={pcmasterM} alt="" />
      </picture> */}
      {window.innerWidth < 568 ? (
        <iframe
          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=288&l=ur1&category=primevideo&banner=0MWCAJK2KHPFPGGRX1R2&f=ifr&linkID=fc2758bde295c3c3356a5047e48a5a83&t=natus3k-20&tracking_id=natus3k-20"
          width="320"
          height="50"
          scrolling="no"
          border="0"
          marginWidth="0"
          // style="border:none;"
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
        ></iframe>
      ) : (
        <iframe
          src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=0KC3CQDCAEK3M5477XR2&f=ifr&linkID=3c7636038f75c9fdf4a1c53d13004f2f&t=natus3k-20&tracking_id=natus3k-20"
          width="728"
          height="90"
          scrolling="no"
          border="0"
          marginWidth="0"
          // style={{ border: "none" }}
          frameBorder="0"
          sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
        ></iframe>
      )}
    </HexSt>
  );
};

export default Hex;
