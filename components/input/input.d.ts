import { PureComponent } from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_input.scss";
export default class Input extends PureComponent<IProps> {
    render(): JSX.Element;
}
interface IProps extends IInput {
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    label?: string;
    subtext?: string;
    fluid?: boolean;
    className?: string;
}
export {};
