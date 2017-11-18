import React from 'react';
import {Button, Input, FabButton, Avatar, Accordion, Switch, Radio, Timeline, Spinner, Alert} from '../lib';
import ReactDOM from 'react-dom';
import './index.css';
import github from '../assets/github.svg';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            checked1: false,
            checked2: false,
            checked3: true,
        };
    }

    render() {
        return (
            <div style={{}}>
                <div style={{display: 'flex'}}>
                    <div style={{flex: '1'}}>
                        <Button
                            isOutline={true}
                            isRound={false}
                            style={{backgroundColor: '#ff0000'}}
                            onClick={() => {
                                console.log(this.hintlabel);
                                ReactDOM.findDOMNode(this.hintlabel).innerText = 'Error, mate'
                            }}
                            className="my-button"
                            type="default"
                            disabled={false}>
                            <a>dsdsd</a><span>3232</span>
                        </Button>
                        <Button isOutline type="success" onClick={() => {

                        }}>dsds</Button>
                    </div>
                    <div style={{flex: '1', float: 'right'}}>
                        <Button isOutline={false} isRound={true} type="primary" onClick={() => {

                        }}>Normal</Button>
                        <Button size="lg" disabled>Small</Button>
                        <Switch color="#9c27b0" disabled={true} checked={this.state.checked}
                                onChange={checked => this.setState({checked})}/>
                        <Switch/>
                    </div>
                </div>
                <Input
                    isError={false}
                    headerLabel="Email"
                    type="password"
                    inputRef={el => this.input = el}
                    placeholder="Enter Your Name"
                />
                <Input
                    disabled={true}
                    hintRef={el => this.hintlabel = el}
                    isError={false}
                    type="password"
                    placeholder="Enter Your Name"
                />

                <Radio name="radio" label="A" size={1} checked={this.state.checked1}
                       onChange={checked => {
                           this.setState({checked1: checked});
                           console.log('1: ' + checked);
                       }}/>
                <Radio name="radio" label="B" checked={this.state.checked2}
                       onChange={checked => {
                           this.setState({checked2: checked});
                           console.log('2: ' + checked);
                       }}/>
                <Radio name="radio" label="C" checked={this.state.checked3}
                       onChange={checked => {
                           this.setState({checked3: checked});
                           console.log('3: ' + checked);
                       }}/>

                <FabButton type="primary">uu</FabButton>

                <Avatar raised borderRadius="5px"
                        src="https://s.gravatar.com/avatar/cd5a734ef07be36b4e68220e53ff2553?size=496&default=retro"/>
                <Avatar raised onClick={() => {
                    console.log('dsds')
                }} className="happy">WS</Avatar>

                {/*<Spinner reverse={false} duration={5}>*/}
                    {/*<img src={github} alt="img" width={40}/>*/}
                {/*</Spinner>*/}

                <Alert type="danger" closable={false}>
                    <span>dsdsd dsds dsdsd fdsfs fsdfsd fsdfsdf dsf sdfs dfsd fsd fsd sfsdf sdf</span>
                </Alert>
                <Alert type="primary">
                    <span>dsdsd dsds dsdsd fdsfs fsdfsd fsdfsdf dsf sdfs dfsd fsd fsd sfsdf sdf</span>
                </Alert>
                <Alert type="success">
                    <span>dsdsd dsds dsdsd fdsfs fsdfsd fsdfsdf dsf sdfs dfsd fsd fsd sfsdf sdf</span>
                </Alert>
                <Alert type="info">
                    <span>dsdsd dsds dsdsd fdsfs fsdfsd fsdfsdf dsf sdfs dfsd fsd fsd sfsdf sdf</span>
                </Alert>
                <Alert type="warning">
                    <span>dsdsd dsds dsdsd fdsfs fsdfsd fsdfsdf dsf sdfs dfsd fsd fsd sfsdf sdf</span>
                </Alert>
                <Alert type="rose">
                    <span>dsdsd dsds dsdsd fdsfs fsdfsd fsdfsdf dsf sdfs dfsd fsd fsd sfsdf sdf</span>
                </Alert>

                <Accordion activeKeys={[]} onlyOnePanel={false}>
                    <Accordion.Panel isArrowOnRight={true} header={this._renderHeader()}>
                        <div style={{padding: '50px'}}>
                            <span>dsdsds</span>
                        </div>
                    </Accordion.Panel>
                    <Accordion.Panel isArrowOnRight={true} header="Header 2">
                        <div>
                            <button style={{display: 'block'}}>Button</button>
                            <button>Avatar</button>
                        </div>
                    </Accordion.Panel>
                    <Accordion.Panel isArrowOnRight={true} header="Header 3">
                        <p>dsdsds</p>
                    </Accordion.Panel>
                </Accordion>

                <Accordion activeKeys={[]} onlyOnePanel={true}>
                    <Accordion.Panel isArrowOnRight={true} header={this._renderHeader()}>
                        <div style={{padding: '50px'}}>
                            <span>dsdsds</span>
                        </div>
                    </Accordion.Panel>
                    <Accordion.Panel isArrowOnRight={true} header="Header 2">
                        <div>
                            <button style={{display: 'block'}}>Button</button>
                            <button>Avatar</button>
                        </div>
                    </Accordion.Panel>
                    <Accordion.Panel isArrowOnRight={true} header="Header 3">
                        <p>dsdsds</p>
                    </Accordion.Panel>
                    <Accordion.Panel isArrowOnRight={true} header="Header 4">
                        <p>dsdsds</p>
                    </Accordion.Panel>
                </Accordion>

                <Timeline />
            </div>
        );
    }

    _renderHeader() {
        return (
            <div>
                Header 10
                <button>Click</button>
            </div>
        );
    }
}


export default App;
