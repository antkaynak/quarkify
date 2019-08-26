import React, { PureComponent } from "react";
import "../../styles/components/_popup.scss";
export default class Popup extends PureComponent<IPopupProps> {
    constructor(props: IPopupProps);
    componentDidUpdate(prevProps: Readonly<IPopupProps>): void;
    componentWillUnmount(): void;
    handleTouchMove(e: Event): void;
    onEnter(): void;
    onExit(): void;
    render(): React.ReactPortal | null;
    private popupBodyClick;
}
interface IPopupProps {
    show: boolean;
    onChange: (status: boolean) => void;
    iconLeft?: boolean;
    noIcon?: boolean;
    closeOnOverlayClick?: boolean;
    className?: string;
}
export {};
