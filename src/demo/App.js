import React from 'react';
import {List, ListItem} from "../lib/List";
import {MenuItem} from '../lib/MenuItem';
import {SliderMenu} from "../lib/SliderMenu";
import {SearchBar} from "../lib/SearchBar";
import './index.css';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <SliderMenu displayLength={4} className={"demo"}>
                    <MenuItem>TAB 1</MenuItem>
                    <MenuItem>TAB 2</MenuItem>
                    <MenuItem>TAB 3</MenuItem>
                    <MenuItem>TAB 4</MenuItem>
                    <MenuItem>TAB 5</MenuItem>
                    <MenuItem>TAB 6</MenuItem>
                    <MenuItem>TAB 7</MenuItem>
                    <MenuItem>TAB 8</MenuItem>
                    <MenuItem>TAB 9</MenuItem>
                </SliderMenu>
                <List className={"demo"} style={{
                    width: "400px",
                    fontFamily: "Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif"
                }}>
                    {[1, 2, 3, 4].map(() => <ListItem>
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
                                [1, 2].map(() => <div style={{
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
                    </ListItem>)}
                </List>

                <SearchBar className={"demo"}/>
            </div>
        );
    }
}


export default App;
