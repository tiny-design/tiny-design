import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './tiny-accordion.css';

export default class Panel extends Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        };
    }

    static propTypes = {
        header: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
        headerClassName: PropTypes.string,
        isDisplayArrow: PropTypes.bool,
        isArrowOnRight: PropTypes.bool,
        arrowColor: PropTypes.string,
    };
    //_isActive -- from parent
    //_onlyOnePanel -- from parent
    //_index -- from parent

    static defaultProps = {
        isDisplayArrow: true,
        isArrowOnRight: false,
        arrowColor: '#8a8a8a',
    };

    componentDidMount() {
        const header = ReactDOM.findDOMNode(this.header);
        const arrow = ReactDOM.findDOMNode(this.arrow);
        const content = header.nextElementSibling;
        let isOpen = this.state.isOpen;

        if (this.props._isActive) {
            content.style.maxHeight = content.scrollHeight + "px";
            arrow.style.transform = 'rotate(0)';
            isOpen = true;
        } else {
            content.style.maxHeight = null;
            arrow.style.transform = 'rotate(-90deg)';
            isOpen = false;
        }

        this.setState({isOpen});
    }

    render() {
        const {
            children,
            header,
            headerClassName,
            isDisplayArrow,
            isArrowOnRight,
            arrowColor,
            _index,
            _totalChildren
        } = this.props;

        const finalHeaderClassName = classNames(
            'tiny-accordion-panel-header',
            {'tiny-accordion-panel-first-child': _index === 0},
            {'tiny-accordion-panel-last-child': _index === _totalChildren - 1 && !this.state.isOpen},
            {'tiny-accordion-panel-header-arrow-right' : isArrowOnRight},
            headerClassName
        );
        const contentClassName = classNames(
            'tiny-accordion-content',
            {'tiny-accordion-panel-last-child': _index === _totalChildren - 1}
        );

        return (
            <div className="tiny-accordion-panel">
                <div
                    ref={el => this.header = el}
                    onClick={this._headerOnClick.bind(this)}
                    className={finalHeaderClassName}>
                    {isDisplayArrow ?
                        <svg ref={el => this.arrow = el} className="tiny-arrow-down" width="15px"
                             viewBox="0 0 1024 1024"
                             version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path fill={arrowColor}
                                  d="M511.87199999999996 676.8a32 32 0 0 1-23.232000000000006-9.983999999999988l-251.264-265.6a32 32 0 0 1 46.527999999999956-43.96800000000002l228.03200000000024 241.08799999999982 228.22399999999982-241.08800000000016a32.064 32.064 0 0 1 45.248-1.2800000000000367c12.80000000000001 12.159999999999993 13.376000000000012 32.44799999999998 1.2800000000000367 45.248l-251.51999999999998 265.5999999999999a32 32 0 0 1-23.296 9.98400000000002z"/>
                        </svg>
                        : null
                    }
                    {header}
                </div>
                <div className={contentClassName}>{children}</div>
            </div>
        );
    }

    _headerOnClick() {
        if (this.props._onlyOnePanel) {
            const uuid = this.props._uuid;
            const contents = document.querySelectorAll(`.accordion-${uuid} .tiny-accordion-content`);
            const arrows = document.querySelectorAll(`.accordion-${uuid} .tiny-arrow-down`);
            for (let i = 0; i < contents.length; i++) {
                if (i === this.props._index) continue;

                contents[i].style.maxHeight = null;
                arrows[i].style.transform = 'rotate(-90deg)';
            }
        }

        const header = ReactDOM.findDOMNode(this.header);
        const arrow = ReactDOM.findDOMNode(this.arrow);
        const content = header.nextElementSibling;
        let isOpen = this.state.isOpen;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            arrow.style.transform = 'rotate(-90deg)';
            isOpen = false;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            arrow.style.transform = 'rotate(0)';
            isOpen = true;
        }

        this.setState({isOpen});
    }
}