import { PureComponent } from "react";
import IListItem from "../../interfaces/list-item";
import "../../styles/components/_list.scss";
import { colorTypes } from "../../types/color";
export default class ListItem extends PureComponent<IItemProps> {
    render(): JSX.Element;
}
interface IItemProps extends IListItem {
    icon?: string;
    iconColor?: colorTypes;
    className?: string;
}
export {};
