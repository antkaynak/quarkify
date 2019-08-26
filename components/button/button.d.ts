import { PureComponent } from "react";
import IButton from "../../interfaces/button";
import "../../styles/components/_button.scss";
import { variantTypes } from "../../types/button";
export default class Button extends PureComponent<IButtonProps> {
    render(): JSX.Element;
}
interface IButtonProps extends IButton {
    variant?: variantTypes;
    fluid?: boolean;
    disabled?: boolean;
    icon?: string;
    round?: boolean;
    circular?: boolean;
    className?: string;
    loading?: boolean;
    ripple?: boolean;
}
export {};
