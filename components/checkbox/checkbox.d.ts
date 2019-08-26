import { PureComponent } from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_checkbox.scss";
export default class CheckBox extends PureComponent<IProps> {
    render(): JSX.Element;
}
interface IProps extends IInput {
    error?: boolean;
    label?: string;
    value: string;
    className?: string;
}
export {};
