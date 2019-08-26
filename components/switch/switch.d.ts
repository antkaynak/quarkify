import { PureComponent } from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_switch.scss";
import { switchTypes, variantTypes } from "../../types/switch";
export default class Switch extends PureComponent<IProps> {
    render(): JSX.Element;
}
interface IProps extends IInput {
    type?: switchTypes;
    value: string;
    variant?: variantTypes;
    error?: boolean;
    disabled?: boolean;
    label?: string;
    className?: string;
}
export {};
