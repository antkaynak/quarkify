import { PureComponent } from "react";
import IList from "../../interfaces/list";
import "../../styles/components/_list.scss";
import ListItem from "./listItem";
export default class List extends PureComponent<IListProps> {
    static Item: typeof ListItem;
    render(): JSX.Element;
}
interface IListProps extends IList {
    noDot?: boolean;
    className?: string;
}
export {};
