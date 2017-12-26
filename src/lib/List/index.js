import React from 'react';
import ReactDOM from 'react-dom';
import anime from 'animejs';
import classNames from 'classnames';
import './list.css';

export class List extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    componentDidMount() {
        const timeline = anime.timeline();
        const items = [];
        const animation = this.props.animation ? this.props.animation : {};
        ReactDOM.findDOMNode(this)
            .querySelectorAll('.tiny-list__item')
            .forEach(
                (d, i) => {
                    const obj = Object.assign(
                        {
                            targets: d,
                            translateX: ["-50%", 0],
                            opacity: [0, 100],
                            easing: 'easeOutExpo',
                            duration: 600,
                            offset: '-=400'
                        }, animation);
                    if (i === 0) {
                        obj.delay = 300;
                    }
                    items.push(obj);
                });
        timeline.add(items);
    }

    render() {
        const {children, className, style} = this.props;
        const finalClassName = classNames(
            'tiny-list',
            className
        );

        return (
            <div className={finalClassName} style={style}>
                {children}
            </div>
        );
    }
}

export class ListItem extends React.Component {
    render() {
        const {children, className, style} = this.props;
        const finalClassName = classNames(
            'tiny-list__item',
            className
        );

        return (
            <div className={finalClassName} style={style}>
                {children}
            </div>
        );
    }
}