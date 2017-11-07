'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

const events = window.require('events');
const path = window.require('path');
const fs = window.require('fs');

const electron = window.require('electron');
const {dialog} = electron.remote;

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

let muiTheme = getMuiTheme({
    fontFamily: 'Microsoft YaHei',
    color:''
});

class MainWindow extends React.Component {

    constructor(props) {
        super(props);
        injectTapEventPlugin();

        this.state = {
            userName: '',
            password: ''
        };
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div style={styles.root}>
                    <img style={styles.icon} src='resources/images/avatar.png'/>
                    <TextField hintText='Username' value={this.state.userName} onChange={(event) => {this.setState({userName: event.target.value})}}/>
                    <TextField hintText='Password' type='password' value={this.state.password} onChange={(event) => {this.setState({password: event.target.value})}}/>
                    <div style={styles.buttons_container}>
                        <RaisedButton label="Sign In" primary={true} onClick={this.login.bind(this)}/>
                        <RaisedButton label="Sign Up" primary={false} style={{marginLeft: 60}} onClick={this.registry.bind(this)}/>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

    login() {
        let options = {
            type: 'info',
            buttons: ['OK'],
            title: 'Login',
            message: 'Login Success',
            defaultId: 0,
            cancelId: 0
        };

        dialog.showMessageBox(options, (response) => {
            if (response === 0) {
                console.log('OK pressed!');
            }
        });
    }

    registry() {
    }
}

const styles = {
    root: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 100,
        height: 100,
        marginBottom: 40
    },
    buttons_container: {
        paddingTop: 30,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

ReactDOM.render(
    <MainWindow/>,
    document.getElementById('content')
);