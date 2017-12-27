import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import anime from 'animejs';
import classNames from 'classnames';
import './searchbar.css';

export class SearchBar extends React.Component {
    state = {
        expand: false,
    }

    static propTypes = {}

    _onExpandBtnClick() {
        this.setState({expand: !this.state.expand});
    }

    render() {
        const {className, style, placeholder, autocomplete, onInputChange, children} = this.props;
        const finalClassName = classNames(
            'search-bar',
            className,
            this.state.expand ? "search-bar_expand" : "",
        );

        return (<div className={finalClassName} style={style}>
            <div className="search-bar__btn" onClick={this._onExpandBtnClick.bind(this)}>
                <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" width="25"
                     height="25">
                    <path
                        d="M921.6 563.2 546.133333 563.2l0 375.466667-85.333333 0L460.8 563.2 85.333333 563.2l0-85.333333 375.466667 0L460.8 102.4l85.333333 0 0 375.466667 375.466667 0L921.6 563.2z"
                        fill="#4285F4"/>
                </svg>
            </div>
            <div className="search-bar__input">
                <input type="text" placeholder={placeholder ? placeholder : "Search"} onChange={onInputChange}/>
                {autocomplete ? <ul className={"search-bar__list"}>
                    {children}
                </ul> : ""}
            </div>
        </div>)
    }
}