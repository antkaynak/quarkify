import React, { CSSProperties } from "react";
export default class Ripple extends React.PureComponent<IRipplesProps, IRippleState> {
    static displayName: string;
    static defaultProps: {
        active: boolean;
        className: string;
        color: string;
        display: string;
        during: number;
    };
    private boxStyle;
    constructor(props: IRipplesProps);
    render(): JSX.Element;
    private onClick;
}
export interface IRipplesProps {
    active?: boolean;
    during?: number;
    display?: string;
    color?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => any;
    className?: string;
}
declare type IRippleState = Readonly<{
    rippleStyle: CSSProperties;
}>;
export {};
