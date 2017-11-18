import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './tiny-input.css';
import classNames from 'classnames';

function nope() {
}

export default class Input extends Component {

    static propTypes = {
        value: PropTypes.string,
        defaultValue: PropTypes.string,
        type: PropTypes.string,
        inputRef: PropTypes.func,
        hintRef: PropTypes.func,
        placeholder: PropTypes.string,
        hitLabel: PropTypes.string,
        headerLabel: PropTypes.string,
        className: PropTypes.string,
        hintClassName: PropTypes.string,
        headerClassName: PropTypes.string,
        isError: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        inputRef: nope,
        hintRef: nope,
        isError: false,
        headerLabel: null,
        disabled: false,
        type: 'text'
    };

    render() {
        const {
            value,
            defaultValue,
            hintRef,
            inputRef,
            placeholder,
            hitLabel,
            className,
            hintClassName,
            headerClassName,
            type,
            headerLabel,
            isError,
            disabled,
            onChange
        } = this.props;

        const finalClassName = classNames(
            'tiny-input',
            {'tiny-input-error': isError},
            {'tiny-input-disabled': disabled},
            className,
        );
        const finalHeaderClassName = classNames(
            'tiny-input-header',
            headerClassName
        );
        const finalHintClassName = classNames(
            'tiny-input-hint',
            {'tiny-input-hint-error': isError},
            hintClassName,
        );

        return (
            <div className="tiny-input-container">
                {headerLabel ?
                    <span className={finalHeaderClassName}>{headerLabel}</span>
                    : null
                }
                <input
                    disabled={disabled}
                    type={type}
                    ref={inputRef}
                    className={finalClassName}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    defaultValue={defaultValue}
                />
                <span ref={hintRef} className={finalHintClassName}>{hitLabel}</span>
            </div>
        );
    }
}