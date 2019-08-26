import { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_loader.scss";
export default class Loader extends PureComponent<ILoaderProps> {
    render(): JSX.Element | null;
}
interface ILoaderProps extends IDiv {
    active: boolean;
    type?: string;
}
export {};
