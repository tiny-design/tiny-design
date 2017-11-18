import React, {Component} from 'react';
import './tiny-switch.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Switch extends Component {

    constructor(props) {
        super(props);

        let checked = false;
        if ('checked' in props) {
            checked = !!props.checked;
        } else {
            checked = !!props.defaultChecked;
        }
        this.state = {checked};
    }

    static propTypes = {
        color: PropTypes.string,
        defaultChecked: PropTypes.bool,
        checked: PropTypes.bool,
        onChange: PropTypes.func,
        className: PropTypes.string,
        disabled: PropTypes.bool,
    };

    static defaultProps = {
        color: '#2196F3',
        disabled: false,
        onChange: () => {
        }
    };

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: !!nextProps.checked,
            });
        }
    }

    render() {
        const {checked} = this.state;
        const {className, color, disabled} = this.props;
        const finalClassNames = classNames(
            'tiny-switch',
            {'tiny-switch-disabled': disabled},
            className
        );
        return (
            <label className={finalClassNames}>
                <span className="tiny-toggle" onClick={this._onClick.bind(this)}
                      style={{
                          backgroundColor: checked ? color : 'rgba(80,80,80,.7)',
                          cursor: disabled ? 'not-allowed' : 'pointer'
                      }}>
                <span className="tiny-thumb" style={{
                    borderColor: checked ? color : 'rgba(0,0,0,.54)',
                    transform: checked ? 'translateX(26px)' : 'translateX(0)'
                }}/>
                </span>
            </label>
        );
    }

    _onClick() {
        if (this.props.disabled) return;

        const checked = !this.state.checked;
        this.props.onChange(checked);
    }
}
