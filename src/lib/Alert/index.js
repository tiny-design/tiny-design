import React from 'react';
import ReactDOM from 'react-dom';
import './tiny-alert.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import closeIcon from './close.svg';

export default class Alert extends React.Component {

    static propTypes = {
        type: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger', 'rose']),
        className: PropTypes.string,
        closable: PropTypes.bool,
    };

    static defaultProps = {
        type: 'primary',
        closable: true,
    };

    render() {
        const {children, type, className, closable} = this.props;
        const finalClassName = classNames(
            'tiny-alert',
            {'tiny-alert-primary': 'primary' === type},
            {'tiny-alert-danger': 'danger' === type},
            {'tiny-alert-warning': 'warning' === type},
            {'tiny-alert-success': 'success' === type},
            {'tiny-alert-info': 'info' === type},
            {'tiny-alert-rose': 'rose' === type},
            className
        );
        return (
            <div className={finalClassName}>
                {children}
                {closable ?
                    <button type="button" className="tiny-alert-close" onClick={this._closeBtnOnClick.bind(this)}>
                        <img src={closeIcon} alt="x"/>
                    </button>
                    : null
                }
            </div>
        );
    }

    _closeBtnOnClick() {
        const self = ReactDOM.findDOMNode(this);
        self.style.opacity = '0';
        setTimeout(() => {
            self.parentNode.removeChild(self);
        }, 500);
    }
}