import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './tiny-spinner.css';
import classNames from 'classnames';

export default class Spinner extends Component{

    static propTypes = {
        reverse: PropTypes.bool,
        duration: PropTypes.number,
        className: PropTypes.string,
    };

    static defaultProps = {
        reverse: false,
        duration: 5,
    };

    render(){
        const {children, reverse, duration, className} = this.props;
        const finalClassName = classNames(
            'tiny-spinner',
            {'tiny-spinner-reverse': reverse},
            className
        );
        return (
            <div className={finalClassName} style={{animationDuration: `${duration}s`}}>
                {children}
            </div>
        );
    }
}