import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import twitter from "../icons/twitter.svg";

const FooterContent = ({ footer }) => (
  <>
    <Container>
      <FooterSection>
        <b> {footer.contactBrno}</b>
        <div> {footer.contactNameBrno}</div>
        <div> {footer.contactMailBrno}</div>
        <div> {footer.contactPhoneBrno}</div>
        <div> {footer.contactPhoneBrno2}</div>
      </FooterSection>
      <FooterSection>
        <b> {footer.addressBrno}</b>
        <div> {footer.institute}</div>
        <div> {footer.name}</div>
        <div> {footer.streetBrno}</div>
        <div> {footer.zipBrno}</div>
      </FooterSection>
      <FooterSection>
        <b> {footer.contactPruhonice}</b>
        <div> {footer.contactNamePruhonice}</div>
        <div> {footer.contactMailPruhonice}</div>
        <div> {footer.contactPhonePruhonice}</div>
      </FooterSection>

      <FooterSection>
        <b> {footer.addressPruhonice}</b>
        <div> {footer.institute}</div>
        <div> {footer.name}</div>
        <div> {footer.streetPruhonice}</div>
        <div> {footer.zipPruhonice}</div>
      </FooterSection>
    </Container>
    <FooterSectionSoc>
      <div>
        <b> {footer.socialSites}</b>
      </div>
      <a
        href="https://twitter.com/VegetPaleo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter src={twitter} alt="twitter" />
      </a>
    </FooterSectionSoc>
  </>
);

export default FooterContent;

FooterContent.propTypes = {
  language: PropTypes.object,
  footer: PropTypes.object,
};

const Container = styled.div`
  display: flex;
  margin: 1em auto 0;
  height: 100%;
  flex-wrap: wrap;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
  @media (min-width: 1200px) {
    margin: 4em auto 0;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.grey};
  padding: 1em;
  text-align: center;
  line-height: 1.5;
  min-width: 100%;
  @media (min-width: 600px) {
    min-width: 40%;
  }
  @media (min-width: 1024px) {
    min-width: initial;
  }
`;

const FooterSectionSoc = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.grey};
  border-top: 1px solid black;
`;

const Twitter = styled.img`
  margin-top: 5px;
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
`;
