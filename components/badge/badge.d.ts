import { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_badge.scss";
import { textAlignTypes } from "../../types/box";
import { colorTypes } from "../../types/color";
export default class Badge extends PureComponent<IBadgeProps> {
    render(): JSX.Element;
}
interface IBadgeProps extends IDiv {
    textAlign?: textAlignTypes;
    className?: string;
    color?: colorTypes;
    icon?: string;
}
export {};
