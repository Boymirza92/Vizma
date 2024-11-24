"use client";
import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "../style.css";

const Footer = styled.div`
  background-color: #fff;
`;

const TopFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  letter-spacing: 0.7px;
  padding: 0;
  background-color: #253342;
  color: #fff;
`;
const TopSection = styled.div`
  margin: 0;
`;
const FooterSection = styled.div`
  flex: 1;
  margin: 0 10px;
  max-width: 300px;
`;
const FooterTitle = styled.h6`
font-size:13px;
font-weight: bold
margin-bottom: 10px;
color: #fff;
`;
const FooterItem = styled.p`
  font-size: 13px;
  line-height: 1;
`;

const FooterTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color:  #253342;
  color: aqua;
  font-size: 12px
  // letter-spacing: 2px;
  // line-height: 1;
`;

const App = () => {
  return (
    <Footer>
      <TopSection>
        <div className="footer">
          <FontAwesomeIcon icon={faLocationDot} />
          <h4 className="text">123456, Тавима, ул. Морская, д.21</h4>
          <img
            style={{ width: "200px", padding: "100px" }}
            src="https://www.mavenfirst.com/hubfs/Kuvat_sivuille/Asiakkaat/Visma/Digital_Visma_logo%20copy.png"
          />
          <FontAwesomeIcon icon={faPhoneVolume} />
          <h4 className="text">+7 (123) 456-67-89</h4>
          <FontAwesomeIcon icon={faEnvelope} />
          <h4 className="text" style={{}}>
            Order@vizma.ru
          </h4>
        </div>
      </TopSection>
      <TopFooterWrapper>
        <FooterSection>
          <FooterTitle>ИНФОРМАЦИЯ Щ ЮРЮЛИЦЕ</FooterTitle>
          <FooterItem> ОГРН 111111111111111</FooterItem>
          <FooterItem> ИНН 222222222222222</FooterItem>
          <FooterItem> КПП 333333333333333</FooterItem>
          <FooterItem> ОКПО 4444444444 ОКВЭД 52.24</FooterItem>
          <FooterItem> ОКТМО 555555555555555</FooterItem>
        </FooterSection>
        <FooterSection>
          <FooterTitle>ЗАКУПКИ</FooterTitle>
          <FooterItem>Нормативные документы</FooterItem>
          <FooterItem>Закупки на VISMA Order</FooterItem>
          <FooterItem>Закупки на VISMA Tender</FooterItem>
        </FooterSection>
        <FooterSection>
          <FooterTitle>ОКЦИЯНЕРОМ</FooterTitle>
          <FooterItem>Устав EVISMA</FooterItem>
          <FooterItem>Список аффилированных лиц</FooterItem>
          <FooterItem>Информация</FooterItem>
          <FooterItem>Атветы</FooterItem>
        </FooterSection>
        <FooterSection>
          <FooterTitle>О КОМПАНИЯ</FooterTitle>
          <FooterItem>Пост сегодня</FooterItem>
          <FooterItem>Характеристики поста</FooterItem>
          <FooterItem>История</FooterItem>
          <FooterItem>Дипломы и награды</FooterItem>
          <FooterItem>Экалогия</FooterItem>
          <FooterItem>Правовая информация</FooterItem>
        </FooterSection>
        
      </TopFooterWrapper>
      <FooterTextWrapper>
        <p>ВСЕ ПРАВА ЗАЩИЩЕНЫ АО VIZMA</p> <br />
      </FooterTextWrapper>
      
    </Footer>
  );
};

export default App;
