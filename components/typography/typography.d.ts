import { PureComponent } from "react";
import ITypography from "../../interfaces/typography";
import "../../styles/components/_typography.scss";
import { colorTypes } from "../../types/color";
import { displayTypes, variantTypes } from "../../types/typography";
export default class Typography extends PureComponent<ITypographyProps> {
    render(): JSX.Element;
}
interface ITypographyProps extends ITypography {
    variant: variantTypes;
    component?: string;
    bold?: boolean;
    underline?: boolean;
    noWrap?: boolean;
    display?: displayTypes;
    color?: colorTypes;
    className?: string;
}
export {};
