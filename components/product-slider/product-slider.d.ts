import { PureComponent } from "react";
import IDiv from "../../interfaces/div";
import "../../styles/components/_product-slider.scss";
export default class ProductSlider extends PureComponent<IProductSliderProps> {
    render(): JSX.Element;
}
interface IProductSliderProps extends IDiv {
    className?: string;
}
export {};
