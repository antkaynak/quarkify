import { PureComponent } from "react";
import ILink from "../../interfaces/link";
import "../../styles/components/_link.scss";
import { variantTypes } from "../../types/button";
export default class Link extends PureComponent<ILinkProps> {
    render(): JSX.Element;
}
interface ILinkProps extends ILink {
    variant?: variantTypes;
    fluid?: boolean;
    disabled?: boolean;
    icon?: string;
    round?: boolean;
    ripple?: boolean;
    circular?: boolean;
    className?: string;
    loading?: boolean;
    to: string;
}
export {};
