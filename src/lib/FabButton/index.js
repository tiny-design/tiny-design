import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../Button/tiny-button.css';

export default class FabButton extends Component{

    static propTypes = {
        onClick: PropTypes.func,
        type: PropTypes.string,  //primary, success, info, warning, danger, rose
        disabled: PropTypes.bool,
        className: PropTypes.string,
    };

    static defaultProps = {
        type: 'default',
        disabled: false,
    };

    render(){
        const {
            children,
            onClick,
            disabled,
            type,
            className,
        } = this.props;

        const finalClassName = classNames(
            'tiny-btn',
            'tiny-btn-fab',
            {'tiny-btn-rose': type === 'rose'},
            {'tiny-btn-success': type === 'success'},
            {'tiny-btn-danger': type === 'danger'},
            {'tiny-btn-primary': type === 'primary'},
            {'tiny-btn-info': type === 'info'},
            {'tiny-btn-warning': type === 'warning'},
            {'tiny-btn-disabled': disabled},
            className
        );

        return (
            <button
                className={finalClassName}
                onClick={onClick}
                disabled={disabled}>
                {children}
            </button>
        );
    }
}