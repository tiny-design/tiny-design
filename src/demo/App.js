import React from 'react';
import {List, ListItem} from "../lib/List/index";
import './index.css';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <List style={{
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
            </div>
        );
    }
}


export default App;
