import { PureComponent } from "react";
export default class Header extends PureComponent<IHeaderProps> {
    render(): JSX.Element;
}
export interface IHeaderProps {
    leftIcon?: string;
    rightIcon?: string;
    leftIconOnClick?: (event: any) => any;
    rightIconOnClick?: (event: any) => any;
}
