import React, {Component, Children} from 'react';
import PropTypes from 'prop-types';
import UUIDv1 from 'uuid/v4';
import './tiny-accordion.css';
import classNames from 'classnames';

export default class AccordionContainer extends Component {
    constructor(props){
        super(props);
        this.uuid = UUIDv1();
    }

    static propTypes = {
        activeKeys: PropTypes.array,
        onlyOnePanel: PropTypes.bool,
        className: PropTypes.string,
    };

    static defaultProps = {
        activeKeys: [],
        onlyOnePanel: false
    };

    _bindPropsToChildren() {
        const children = [];
        const {onlyOnePanel} = this.props;
        let keys = [].concat(this.props.activeKeys);

        Children.forEach(this.props.children, (child, index) => {
            if (!child) return;

            //if only display one panel, the rest of keys will be discarded.
            if (onlyOnePanel) {
                keys = keys.splice(0, 1);
            }

            const props = {
                key: String(index),
                _uuid: this.uuid,
                _index: index,
                _isActive: keys.indexOf(String(index)) !== -1,
                _onlyOnePanel: onlyOnePanel,
                _totalChildren: this.props.children.length
            };

            children.push(React.cloneElement(child, props));
        });

        return children;
    }

    render() {
        const className = classNames(
            'tiny-accordion',
            `accordion-${this.uuid}`,
            this.props.className
        );
        return (
            <div className={className}>
                {this._bindPropsToChildren()}
            </div>
        );
    }
}