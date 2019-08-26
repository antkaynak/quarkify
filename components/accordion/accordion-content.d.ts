import { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_accordion.scss";
import { animationTypes } from "../../types/modal";
export default class Content extends PureComponent<IAccordionContentProps> {
    render(): JSX.Element;
}
interface IAccordionContentProps extends IDiv {
    animation?: animationTypes;
    onChange?: () => void;
    className?: string;
    expanded?: boolean;
}
export {};
