import React from 'react';
import '../../styles/components/_button.scss';
import classNamesDefault from '../../utils/class-names-default';

class Button extends React.Component<IProps, any> {
  public render() {
    return (
      <button
        className={classNamesDefault(this.props)}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

interface IProps {
  variant?: string;
  disabled?: boolean;
  className?: string;
  size?: string;
  onClick?: () => {};
}

export default Button;
