import { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_subheader.scss";
export default class SubHeader extends PureComponent<ISubHeader> {
    render(): JSX.Element;
}
interface ISubHeader extends IDiv {
    title: string;
    leftIcon?: string;
    rightIcon?: string;
    leftIconOnClick?: (event: any) => any;
    rightIconOnClick?: (event: any) => any;
}
export {};
