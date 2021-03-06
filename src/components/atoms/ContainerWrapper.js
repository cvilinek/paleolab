import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContainerWrapper = ({ children }) => {
  return <Containerwrapper>{children}</Containerwrapper>;
};

export default ContainerWrapper;

const Containerwrapper = styled.div`
  padding: 0 20px;
  @media (min-width: 920px) {
    padding: 0 50px;
    max-width: 1920px;
  }
  @media (min-width: 1970px) {
    padding: 0;
  }
`;

ContainerWrapper.propTypes = {
  children: PropTypes.node,
};
