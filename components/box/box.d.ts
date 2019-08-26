import { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_box.scss";
import { textAlignTypes } from "../../types/box";
export default class Box extends PureComponent<IBoxProps> {
    render(): JSX.Element;
}
interface IBoxProps extends IDiv {
    spaced?: boolean;
    fitted?: boolean;
    textAlign?: textAlignTypes;
    className?: string;
}
export {};
