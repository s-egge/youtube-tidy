/*
 * FoldingCube derived from https://tobiasahlin.com/spinkit/.
 */

import styled from "@emotion/styled";

const FoldingCubeStyle = styled.div`
  margin: 20px auto;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
  margin-bottom: 4rem;

  .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  .sk-cube:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ff0000;
    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
    animation: sk-foldCubeAngle 2.4s infinite linear both;
    -webkit-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }

  .sk-cube2 {
    -webkit-transform: scale(1.1) rotateZ(90deg);
    transform: scale(1.1) rotateZ(90deg);
  }

  .sk-cube3 {
    -webkit-transform: scale(1.1) rotateZ(180deg);
    transform: scale(1.1) rotateZ(180deg);
  }

  .sk-cube4 {
    -webkit-transform: scale(1.1) rotateZ(270deg);
    transform: scale(1.1) rotateZ(270deg);
  }

  .sk-cube2:before {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }

  .sk-cube3:before {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  .sk-cube4:before {
    -webkit-animation-delay: 0.9s;
    animation-delay: 0.9s;
  }

  @-webkit-keyframes sk-foldCubeAngle {
    0%,
    10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    }
    25%,
    75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
      transform: perspective(140px) rotateX(0deg);
      opacity: 1;
    }
    90%,
    100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
      transform: perspective(140px) rotateY(180deg);
      opacity: 0;
    }
  }

  @keyframes sk-foldCubeAngle {
    0%,
    10% {
      -webkit-transform: perspective(140px) rotateX(-180deg);
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    }
    25%,
    75% {
      -webkit-transform: perspective(140px) rotateX(0deg);
      transform: perspective(140px) rotateX(0deg);
      opacity: 1;
    }
    90%,
    100% {
      -webkit-transform: perspective(140px) rotateY(180deg);
      transform: perspective(140px) rotateY(180deg);
      opacity: 0;
    }
  }
`;

export default function FoldingCube() {
  return (
    <FoldingCubeStyle>
      <div className="sk-cube1 sk-cube"></div>
      <div className="sk-cube2 sk-cube"></div>
      <div className="sk-cube4 sk-cube"></div>
      <div className="sk-cube3 sk-cube"></div>
    </FoldingCubeStyle>
  );
}
