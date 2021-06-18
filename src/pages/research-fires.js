import React from "react";
import { Consumer } from "../layouts/Context";
import Img from "gatsby-image";
import styled from "styled-components";

import { cz, en, czImgTitles, enImgTitles } from "../content/research/fires";

const IndexPage = ({ data }) => {
  return (
    <Consumer>
      {({ int }) => {
        const content = int === "en" ? en : cz;
        const imgData = int === "en" ? enImgTitles : czImgTitles;
        const imgs = data.allImageSharp.edges.map((img, index) => (
          <Img
            fluid={img.node.fluid}
            alt={imgData[`image${index + 1}`]}
            title={imgData[`image${index + 1}`]}
          />
        ));

        return (
          <ResearchWrapper>
            <TextWrapper>{content}</TextWrapper>
            <ImgWrapper>{imgs}</ImgWrapper>
          </ResearchWrapper>
        );
      }}
    </Consumer>
  );
};

export default IndexPage;

const ImgWrapper = styled.div`
  display: none;
  @media (min-width: 920px) {
    display: block;
    flex: 1;

    img {
      margin-top: 5px;
    }
  }
  @media (min-width: 1600px) {
    min-width: 320px;
  }
`;

const ResearchWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled.div`
  flex: 2;
  margin-right: 50px;
  text-align: justify;
`;

export const query = graphql`
  query {
    allImageSharp(
      sort: { fields: [fluid___originalName], order: ASC }
      filter: { fluid: { src: { regex: "//fires/" } } }
    ) {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
