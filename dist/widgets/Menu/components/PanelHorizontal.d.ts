import React from "react";
import { PanelProps, PushedProps } from "../types";
interface Props extends PanelProps, PushedProps {
    showMenu: boolean;
    isMobile: boolean;
}
declare const PanelHorizontal: React.FC<Props>;
export default PanelHorizontal;
