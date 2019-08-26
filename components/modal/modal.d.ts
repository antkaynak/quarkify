import React, { ReactNode } from "react";
import "../../styles/components/_modal.scss";
import { animationTypes } from "../../types/modal";
import Actions from "./modal-actions";
import Content from "./modal-content";
import Header from "./modal-header";
export default class Modal extends React.Component<IModalProps> {
    static Header: typeof Header;
    static Actions: typeof Actions;
    static Content: typeof Content;
    componentDidMount(): void;
    componentWillUpdate(nextProps: Readonly<IModalProps>, nextState: Readonly<{}>, nextContext: any): void;
    render(): JSX.Element;
}
interface IModalProps {
    show: boolean;
    animation?: animationTypes;
    children?: ReactNode;
    onChange?: () => void;
    className?: string;
}
export {};
