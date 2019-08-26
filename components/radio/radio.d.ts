import { PureComponent } from "react";
import IInput from "../../interfaces/input";
import "../../styles/components/_radio.scss";
export default class Radio extends PureComponent<IProps> {
    render(): JSX.Element;
}
interface IProps extends IInput {
    error?: boolean;
    label?: string;
    value: string;
    className?: string;
}
export {};
