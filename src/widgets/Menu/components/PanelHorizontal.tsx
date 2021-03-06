import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: absolute;
  left: 0;
  top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-shrink: 0;
  transition: padding-top 0.2s, width 0.2s;
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  background-color: ${({ theme }) => theme.colors.card};
  height: 100vh;

  ${({ theme }) => theme.mediaQueries.md} {
    position: relative;
    background-color: unset;
    height: 100%;
    top: 0;
  }
`;

const PanelHorizontal: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <PanelBody {...props} />
      {/* <PanelFooter {...props} /> */}
    </StyledPanel>
  );
};

export default PanelHorizontal;
