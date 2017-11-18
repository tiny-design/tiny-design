import React, {Component} from 'react';
import './tiny-avatar.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Avatar extends Component {

    static propTypes = {
        src: PropTypes.string,
        backgroundColor: PropTypes.string,
        size: PropTypes.string,
        borderRadius: PropTypes.string,
        raised: PropTypes.bool,
        onClick: PropTypes.func,
        className: PropTypes.string,
    };

    static defaultProps = {
        backgroundColor: '#2992fc',
        size: '60px',
        borderRadius: '50%',
        raised: false,
        src: null,
        onClick: null
    };

    render() {
        const {children, backgroundColor, size, borderRadius, raised, src, onClick, className} = this.props;
        const finalName = classNames(
            'tiny-avatar',
            {'tiny-avatar-raised': raised},
            className
        );
        return (
            <div
                className={finalName}
                style={{
                    backgroundColor,
                    width: size,
                    height: size,
                    borderRadius,
                    cursor: onClick ? 'pointer' : 'default'
                }}
                onClick={onClick}>
                {src ? <img src={src} alt="avatar"/> : children}
            </div>
        );
    }
}