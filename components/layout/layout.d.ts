import { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_layout.scss";
export default class Layout extends PureComponent<ILayoutProps> {
    render(): JSX.Element;
}
interface ILayoutProps extends IDiv {
    fitted?: boolean;
}
export {};
