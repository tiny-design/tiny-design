import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './menuitem.css';

export class MenuItem extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    onClick(e) {
        const parent = ReactDOM.findDOMNode(this);
        const ripple = ReactDOM.findDOMNode(this.refs.ripple);
        const box = parent.getBoundingClientRect();
        const offsetX = box.left;
        const offsetY = box.top;
        let width = box.width;
        let height = box.height;

        if (width > height) {
            height = width;
        } else {
            width = height;
        }

        let x = (e.pageX - offsetX - width / 2);
        let y = (e.pageY - offsetY - height / 2);

        ripple.style.transform = `translate(${x}%, ${y}%)`;
        ripple.style.width = width +'px';
        ripple.style.height = height + 'px';
        ripple.className += ' animated';

        setTimeout(() => {
            ripple.style.translate = `translate(0%, 0%)`;
            ripple.style.width = 0;
            ripple.style.height = 0;
            ripple.className = ripple.className.replace(' animated', '');
        }, 600);
    }

    render() {
        const {children, className, style} = this.props;
        const finalClassName = classNames(
            'menu-item',
            className
        );
        return (<div className={finalClassName} style={style} onClick={(evt) => {
            this.onClick(evt);
            this.props.onClick ? this.props.onClick(evt) : '';
        }}>
            {children}
            <div ref="ripple" className="ripple"/>
        </div>);
    }
}
