// "use client";
// import React from "react";
// import styled from "styled-components";
// import videoFile from "./video/potr.mp4"

// const AppWrapper = styled.div`
// display: flex;
// flex-1;
// justify-content: space-between;
// align-items: flex-start;
// flex-wrap: wrap;
// width: 100%;
// height: 100vh;
// background-color: aqua;
// `;

// const SectionRight = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: flex-start
// width: 100%;
// height: 100vh;
// background-color: aqua;;
// `;
// // const iframe = styled.a`
// //  border: none;
// //   border-radius: 15px;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// // `;

// const Imge = styled.div``;
// const SectionLeft = styled.div``;

// const SectionText = styled.div``;

// const SectionInfo = styled.div``;

// const App = () => {
//   return (
//     <AppWrapper>
//      <SectionRight>
//     <video width="600" height="400" controls>
//       <source src={videoFile} type="video/mp4"/>
//       Sizning brauziringiz
//     </video>
//     <Imge></Imge>
//   </SectionRight>
//   <SectionLeft>
//     <SectionText></SectionText>
//     <SectionInfo></SectionInfo>
//   </SectionLeft>
//     </AppWrapper>
//   );
// };

// export default App;

"use client";
import React from "react";
import styled from "styled-components";
import VideoFile from "./Video/port.mp4"; // Video faylni to‘g‘ri import qilish

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background-color: #E0FFFF;
`;

const SectionRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%; 
  height: 100vh;
`;
const Card = styled.div`
// display: flex;
// justify-content: flex-start;
// align-items: center;
// flex

width: 35rem;
height: 13rem;
border-radius: 20px;
margin-top: 3rem;
background-color: #87CEFA
`;

const Title = styled.h5`
color: #E0FFFF;
margin: 25px;
letter-spacing: 1px;
`;
const TitleWrapper = styled.p`
`

const SectionLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%; /* Chap va o'ng tomonlar uchun teng kenglik */
  height: 100vh;
`;

const VideoWrapper = styled.video`
  width: 35rem;
  height: 20rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SectionText = styled.div`
  font-size: 16px;
  color: white;
`;

const SectionInfo = styled.div`
  font-size: 14px;
  color: black;
`;

const App = () => {
  return (
    <AppWrapper>
      {/* O'ng qism */}
      <SectionRight>
        <SectionText>Bu matn bo'lishi mumkin</SectionText>
        <SectionInfo>Qo'shimcha ma'lumotlar bo'lishi mumkin</SectionInfo>
      </SectionRight>

      <SectionLeft>
        <VideoWrapper controls>
          <source src={VideoFile} type="Video/mp4" />
          Sizning brauzeringiz ushbu videoni qollab-quvvatlamaydi.
        </VideoWrapper>
        <Card>
          <Title>ЗАПРОС СТАВКИ И УСЛОВИЙ ПОГРУЗОЧНО-ЗАГРОЗОЧНЫХ РАБОТ</Title>
          <TitleWrapper> Зассчитайте моментально стоимось полных <br /> портавых услуг в порту VIZMA </TitleWrapper>
        </Card>
      </SectionLeft>
    </AppWrapper>
  );
};

export default App;
