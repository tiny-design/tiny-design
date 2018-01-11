import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import anime from 'animejs';
import classNames from 'classnames';
import '../../styles/slidermenu.css';

export class SliderMenu extends React.Component {

    state = {
        curr: 0,
    }

    static propTypes = {
        displayLength: PropTypes.number
    };

    componentDidMount() {
        const container = ReactDOM.findDOMNode(this).querySelector('.slider-menu__item-container');
        const containerWrapper = ReactDOM.findDOMNode(this.refs.containerWrapper);
        const slider = container.querySelector('.slider-menu__slider');
        const {offsetWidth} = container;
        const unitOffsetWidth = (offsetWidth / this.props.children.length);

        containerWrapper.style.width = unitOffsetWidth * this.props.displayLength + 'px';

        slider.style.width = unitOffsetWidth + 'px';
        const self = this;
        this.props.children.forEach((childNode, i) => {
            const child = ReactDOM.findDOMNode(this.refs[i]);
            child.addEventListener('click', () => self._onItemClick(i));
        });
    }

    componentDidUpdate() {
        const container = ReactDOM.findDOMNode(this).querySelector('.slider-menu__item-container');
        const slider = container.querySelector('.slider-menu__slider');
        const {offsetWidth} = container;
        const unitOffsetWidth = (offsetWidth / this.props.children.length);
        const timeline = anime.timeline();
        let frames = [{
            targets: slider,
            translateX: this.state.curr * unitOffsetWidth + 'px',
            easing: 'easeInOutQuart',
            duration: 600,
        }];
        timeline.add(frames);
    }

    _onItemClick(curr) {
        this.setState({curr})
    }

    _onBtnLeftClick() {
        const container = ReactDOM.findDOMNode(this).querySelector('.slider-menu__item-container-wrapper');
        anime({
            targets: container,
            scrollLeft: '-=100',
            easing: 'easeInOutQuart',
        });
    }

    _onBtnRightClick() {
        const container = ReactDOM.findDOMNode(this).querySelector('.slider-menu__item-container-wrapper');
        anime({
            targets: container,
            scrollLeft: '+=100',
            easing: 'easeInOutQuart',
        });
    }

    render() {
        const {children, className, style, displayLength} = this.props;
        const finalClassName = classNames(
            'slider-menu',
            className
        );

        return (<div className={finalClassName} style={style}>
            {displayLength && displayLength < children.length ?
                <div className='slider-menu__btn' onClick={this._onBtnLeftClick.bind(this)}>
                    <svg className="icon" height="30px" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ffffff"
                              d="M347.2 511.87199999999996c4.336808689942018e-19-0.003 8.673617379884035e-19-0.006 1.734723475976807e-18-0.008 1.7763568394002505e-15-9.137 3.8290000000000033-17.379 9.970000000000006-23.21l265.614-251.2769999999999c5.720000000000001-5.415 13.464000000000002-8.742999999999999 21.984-8.743999999999996 17.678 3.552713678800501e-15 32.008 14.330000000000005 32.007999999999996 32.008-1.7763568394002505e-15 9.157-3.8450000000000033 17.416-10.009000000000007 23.25l-241.10300000000004 228.04499999999993 241.08799999999997 228.22400000000002c6.164999999999999 5.855000000000001 10.000999999999996 14.113000000000001 10.000999999999998 23.266000000000002-8.881784197001252e-16 8.516-3.320000000000002 16.256-8.736000000000004 21.997999999999998-12.145000000000003 12.784-32.434 13.359999999999994-45.233 1.2639999999999958l-265.5999999999999-251.52c-6.155-5.844000000000001-9.983999999999998-14.086000000000004-9.983999999999996-23.222999999999995 3.469446951953614e-18-0.025 3.469446951953614e-18-0.05099999999999999 1.3877787807814457e-17-0.076z"/>
                    </svg>
                </div> : ''}
            <div style={{overflow: 'hidden'}}>
                <div className={'slider-menu__item-container-wrapper'} ref={'containerWrapper'}>
                    <div className='slider-menu__item-container'>
                        {React.Children.map(children, (ele, idx) => React.cloneElement(ele, {ref: idx}))}
                        <div className='slider-menu__slider'/>
                    </div>
                </div>
            </div>
            {displayLength && displayLength < children.length ?
                <div className='slider-menu__btn' onClick={this._onBtnRightClick.bind(this)}>
                    <svg className="icon" height="30px" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill="#ffffff"
                              d="M676.8 512.128a32 32 0 0 1-9.984000000000004 23.231999999999996l-265.6 251.26399999999998a32 32 0 0 1-43.96799999999999-46.528l241.08800000000008-228.03199999999998-241.08799999999997-228.22400000000002a32.064 32.064 0 0 1-1.279999999999994-45.248c12.160000000000004-12.799999999999999 32.448-13.375999999999992 45.248-1.279999999999994l265.5999999999999 251.52a32 32 0 0 1 9.983999999999995 23.296z"/>
                    </svg>
                </div> : ''}
        </div>);
    }
}
