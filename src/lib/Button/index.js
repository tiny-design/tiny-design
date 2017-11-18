import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './tiny-button.css';
import classNames from 'classnames';

export default class Button extends Component {

    static propTypes = {
        onClick: PropTypes.func,
        type: PropTypes.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger', 'rose']),  //primary, success, info, warning, danger, rose
        size: PropTypes.oneOf(['default', 'lg', 'sm', 'xs']),  //lg - large, sm - small, xs - xsmall
        uppercase: PropTypes.bool,
        isRound: PropTypes.bool,
        isOutline: PropTypes.bool,
        disabled: PropTypes.bool,
        className: PropTypes.string
    };

    static defaultProps = {
        isRound: false,
        disabled: false,
        isOutline: false,
        uppercase: true,
        type: 'default',
        size: 'default',
    };

    render() {
        const {children, onClick, uppercase, className, type, isRound, size, disabled, isOutline} = this.props;
        const finalClassName = classNames(
            'tiny-btn',
            {'tiny-btn-outline': isOutline},
            {'tiny-btn-rose': type === 'rose' && !isOutline},
            {'tiny-btn-rose-outline': type === 'rose' && isOutline},
            {'tiny-btn-success': type === 'success' && !isOutline},
            {'tiny-btn-success-outline': type === 'success' && isOutline},
            {'tiny-btn-danger': type === 'danger' && !isOutline},
            {'tiny-btn-danger-outline': type === 'danger' && isOutline},
            {'tiny-btn-primary': type === 'primary' && !isOutline},
            {'tiny-btn-primary-outline': type === 'primary' && isOutline},
            {'tiny-btn-info': type === 'info' && !isOutline},
            {'tiny-btn-info-outline': type === 'info' && isOutline},
            {'tiny-btn-warning': type === 'warning' && !isOutline},
            {'tiny-btn-warning-outline': type === 'warning' && isOutline},
            {'tiny-btn-round': isRound},
            {'tiny-btn-lg': size === 'lg'},
            {'tiny-btn-sm': size === 'sm'},
            {'tiny-btn-xs': size === 'xs'},
            {'tiny-btn-disabled': disabled},
            className,
        );
        return (
            <button
                disabled={disabled}
                className={finalClassName}
                style={{textTransform: uppercase ? 'uppercase' : 'default'}}
                onClick={onClick}>
                {children}
            </button>
        );
    }
}