import { PureComponent } from "react";
import IIcon from "../../interfaces/icon";
import "../../styles/components/_icon.scss";
import { colorTypes } from "../../types/color";
import { sizeTypes } from "../../types/icon";
export default class Icon extends PureComponent<IProps> {
    render(): JSX.Element;
}
interface IProps extends IIcon {
    name: string;
    size?: sizeTypes;
    disabled?: boolean;
    circular?: boolean;
    color?: colorTypes;
    onClick?: (event: any) => any;
    className?: string;
}
export {};
