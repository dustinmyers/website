import styled from "styled-components";

export const Stage = styled.section`
  /* $darkblue: #152c3e;
$lightblue: #37618a;
$greenprimary: #879759;
$greenshadow: #648459;

* { margin: 0; padding: 0; }

@media (max-width: 960px) {
  body { zoom: 0.7; }
}

html, body { height: 100%; } */

  @keyframes bounce {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(-4px);
    }
  }

  @keyframes sway {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-12px);
    }
  }

  /* min-height: 100%; */
  background: -webkit-linear-gradient(top, $darkblue, $lightblue);
`;

export const Mountains = styled.svg`
  z-index: 2;
  position: absolute;
  bottom: 20%;
  margin-bottom: -16px;
  left: 10%;
  width: 550px;
  height: 390px;
`;

//     #cloud1 {
//         z-index: 2;
//         position: absolute;
//         top: 20%;
//         right: 4%;
//         animation: bounce 2s ease-in-out 0s infinite alternate;
//     }

//     #cloud2 {
//         z-index: 1;
//         position: absolute;
//         top: 22%;
//         right: 16%;
//         animation: bounce 3.5s ease-in-out 2s infinite alternate;
//     }

//     .trees {
//         width: 100%;
//         height: 130px;
//         z-index: 4;
//         position: absolute;
//         bottom: 20%;
//         margin-bottom: -100px;
//     }

//     #ground {
//         z-index: 1;
//         width: 100%;
//         height: 20%;
//         position: absolute;
//         bottom: 0;
//         background: $greenprimary;
//     }

//     #hills {
//         // background: rgba(255,0,0,0.3);
//         position: absolute;
//         left: 10%;
//         margin-left: -120px;
//         margin-bottom: -86px;
//         bottom: 20%;
//         z-index: 3;
//     }

//     #stars {
//         width: 100%;
//         height: 100%;
//     }
// }
