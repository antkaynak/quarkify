import { PureComponent } from "react";
import "../../styles/components/_accordion.scss";
import Content from "./accordion-content";
import Header from "./accordion-header";
export default class Accordion extends PureComponent<IAccordionProps, IAccordionState> {
    static Header: typeof Header;
    static Content: typeof Content;
    constructor(props: IAccordionProps);
    componentWillReceiveProps(nextProps: IAccordionProps, prevProps: IAccordionProps): void;
    componentWillUpdate(nextProps: Readonly<IAccordionProps>, nextState: Readonly<IAccordionState>, nextContext: any): void;
    render(): JSX.Element;
    private handleHeaderClick;
}
interface IAccordionProps {
    className?: string;
    expanded?: boolean;
    onChange?: (expanded: boolean) => void;
}
interface IAccordionState {
    expanded: boolean;
}
export {};
