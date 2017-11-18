import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './tiny-radio.css';

export default class Radio extends Component {
    constructor(props) {
        super(props);
        const checked = 'checked' in props ? props.checked : props.defaultChecked;
        this.state = {
            checked,
        };
    }

    static propTypes = {
        color: PropTypes.string,
        size: PropTypes.number,
        label: PropTypes.string,
        disabled: PropTypes.bool,
        name: PropTypes.string,
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        onChange: PropTypes.func,
        className: PropTypes.string,
    };

    static defaultProps = {
        color: '#9c27b0',
        size: 1,
        label: null,
        disabled: false,
        onChange: ()=>{},
    };

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked,
            });
        }
    }

    render() {
        const {checked} = this.state;
        const {color, label, size, name} = this.props;
        return (
            <label className="tiny-radio-container">
                <span className="tiny-radio" style={{transform: `scale(${size})`}}>
                    <input type="radio" checked={checked} name={name} onChange={this._onChange.bind(this)}/>
                    {/*<span className="tiny-radio-circle" style={{borderColor: checked? color : 'rgba(0,0,0,.54)'}}/>*/}
                    {/*<span className="tiny-radio-check" style={{backgroundColor: checked? color : 'transparent'}}/>*/}
                </span>
                {label ?
                    <span className="tiny-radio-label">{label}</span>
                    : null
                }
            </label>
        );
    }

    _onChange(e){
        const checked = e.target.checked;
        this.props.onChange(checked);
    }
}
