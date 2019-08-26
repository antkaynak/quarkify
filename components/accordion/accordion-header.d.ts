import { PureComponent } from "react";
import IDiv from "../../interfaces/div";
export default class Header extends PureComponent<IHeaderProps> {
    render(): JSX.Element;
}
export interface IHeaderProps extends IDiv {
    icon?: string;
    expanded?: boolean;
    handleClick?: () => void;
}
