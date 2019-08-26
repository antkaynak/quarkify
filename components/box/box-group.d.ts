import { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_box.scss";
export default class BoxGroup extends PureComponent<IBoxGroupProps> {
    render(): JSX.Element;
}
interface IBoxGroupProps extends IDiv {
}
export {};
