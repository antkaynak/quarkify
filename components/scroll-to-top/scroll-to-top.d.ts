import { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_scroll-to-top.scss";
declare class ScrollToTop extends PureComponent<IScrollToTopProps, IScrollToTopState> {
    static defaultProps: {
        duration: number;
        showUnder: number;
        smooth: boolean;
    };
    private requestAnimationFrameId;
    private initialPosition;
    private startTime;
    private lastScrollPosition;
    constructor(props: IScrollToTopProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private handleClick;
    private handleScroll;
    private scrollStep;
    private stopScrolling;
    private easeOutCubic;
}
interface IScrollToTopProps extends IDiv {
    duration?: number;
    showUnder?: number;
    smooth?: boolean;
}
interface IScrollToTopState {
    show: boolean;
}
export default ScrollToTop;
