import { PureComponent } from "react";
import ISelect from "../../interfaces/select";
import "../../styles/components/_select.scss";
import { colorTypes } from "../../types/color";
import { variantTypes } from "../../types/select";
export default class Select extends PureComponent<IProps> {
    render(): JSX.Element;
}
interface IProps extends ISelect {
    variant?: variantTypes;
    items: any[];
    fluid?: boolean;
    value?: string;
    name?: string;
    error?: boolean;
    rightIcon?: string;
    leftIcon?: string;
    className?: string;
    selected?: string;
    rightIconColor?: colorTypes;
    leftIconColor?: colorTypes;
}
export {};
