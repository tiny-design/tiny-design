import React from 'react';
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
        document.querySelectorAll('.tiny-list-item').forEach((d, i) => {
            const obj = Object.assign(
                {
                    targets: d,
                    translateX: [-250, 0],
                    opacity: [0, 100],
                    easing: 'easeOutExpo',
                    duration: 600,
                    offset: '-=300'
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
            'tiny-list-item',
            className
        );

        return (
            <div className={finalClassName} style={style}>
                {children}
            </div>
        );
    }
}