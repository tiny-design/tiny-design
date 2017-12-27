import React from 'react';
import {List, ListItem} from "../lib/List";
import {MenuItem} from '../lib/MenuItem';
import {SliderMenu} from "../lib/SliderMenu";
import {SearchBar} from "../lib/SearchBar";
import {Debounce} from "../lib/Utils/index";
import './index.css';

const RenderSuggestions = Debounce(
    (self, suggestions)=>{
        self.setState({suggestions});
    }, 400);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curr: 0,
            suggestions: [],
        }
    }

    _onMenuItemClick(i) {
        this.setState({curr: i});
    }

    _onMenuRender() {
        const items = [];
        for (let i = 0; i <= this.state.curr; i++) {
            items.push(<ListItem>
                <div style={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "#75ADFF",
                    borderRadius: "5px"
                }}/>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{
                        height: "10px",
                        width: "100px",
                        backgroundColor: "#8f8f8f",
                        borderRadius: "5px",
                        marginTop: "10px",
                        marginBottom: "10px",
                        marginLeft: "10px",
                        marginRight: "10px"
                    }}/>
                    {
                        [1, 2].map((d) => <div key={d} style={{
                            height: "10px",
                            width: "200px",
                            backgroundColor: "#8f8f8f",
                            borderRadius: "5px",
                            marginTop: "10px",
                            marginBottom: "10px",
                            marginLeft: "10px",
                            marginRight: "10px"
                        }}/>)
                    }
                </div>
            </ListItem>);
        }
        return (<List className={"demo"} style={{
            width: "400px",
        }}>{items}</List>);
    }

    _onInputChange(evt) {

        const suggestions = evt.target.value?[
            <li>Suggestion for {evt.target.value}...</li>,
            <li>Suggestion for {evt.target.value}...</li>,
            <li>Suggestion for {evt.target.value}...</li>
        ]:[];

        RenderSuggestions(this, suggestions);
    }

    render() {
        return (
            <div>
                <SliderMenu displayLength={4} className={"demo"} style={{width: "400px"}}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8]
                        .map((d) => <MenuItem key={d}
                                              onClick={this._onMenuItemClick.bind(this, d)}>TAB {d + 1}</MenuItem>)}
                </SliderMenu>

                {this._onMenuRender()}

                <SearchBar className={"demo"} autocomplete onInputChange={this._onInputChange.bind(this)}>
                    {this.state.suggestions}
                </SearchBar>
            </div>
        );
    }
}


export default App;
