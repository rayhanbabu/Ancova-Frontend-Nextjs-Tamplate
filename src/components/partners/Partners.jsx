"use client";
import styled, { keyframes } from "styled-components";

const companyLogos = [
  "/icons/google.svg",
  "/icons/meta.svg",
  "/icons/apple.svg",
  "/icons/microsoft.svg",
  "/icons/amazon.svg",
  "/icons/netflix.svg",
];

const marquee = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Partners = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #f3f4f6;
  position: relative;
`;

const MarqueeContent = styled.div`
  display: flex;
  gap: 40px;
  white-space: nowrap;
  animation: ${marquee} 10s linear infinite;
`;

const Logo = styled.img`
  height: 80px;
  display: inline-block;
`;

const MarqueeSlider = () => {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        {[...companyLogos, ...companyLogos].map((logo, index) => (
          <Logo key={index} src={logo} alt="Company Logo" />
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Partners;
