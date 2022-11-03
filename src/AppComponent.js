import React from "react";
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material/';
import axios from 'axios';
import {
    validEmail,
    minStringLength,
    validContact,
    validBOD,
    INVALID_INPUT_MESSAGE_LANG,
    API_SRC
} from "./AppConstant";


export class AppBarCustom extends React.Component {

    render() {

        const navItems = ['Home', 'About', 'Contact'];

        return (
            <>
                <Box sx={{ display: 'flex' }}>
                    <AppBar component="nav">
                        <Toolbar>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                &nbsp;
                            </Typography>

                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {navItems.map((item) => (
                                    <Button key={item} sx={{ color: '#fff' }}>
                                        {item}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box >
            </>
            )
    }
}

export class DisplayMovies extends React.Component {

    state = {
        mv : []
    }

    componentDidMount() {
        axios.get(API_SRC)
            .then(res => {
                this.setState({ mv: res.data.entries });
            })
    }

    render() {
        return (
            <>
                <h2>Fetching API</h2>

                <ol>
                    {
                        this.state.mv
                            .map((mv_ , idx) =>
                                <li key={idx}>{mv_.Description}</li>
                            )
                    }
                </ol>

            </>
        )
    }
}

class DisplayProfile extends React.Component {

    render() {
        return (
            <>
                <div className="showDataContainer" style={{ visibility: this.props.viewData.showDataContainer == true && this.props.viewData.formValid == true ? 'visible' : 'hidden' }}>
                    <h1>View Data</h1>
                    <hr/>
                    <p>{this.props.viewData.name}</p>
                    <p>{this.props.viewData.contact}</p>
                    <p>{this.props.viewData.email}</p>
                    <p>{this.props.viewData.dob}</p>
                </div>
            </>
            )
    }
}

class ProfileForm extends React.Component {
    render() {
        return (
            <>
                <form className="profileform" onSubmit={this.props.handleResponse}>
                    <label className="mandatory">Name</label>
                    <input
                        type="text"
                        name="name"
                        onChange={this.props.handleChange}
                    />
                    <div className="mandatory-message">{this.props.errorMessage.name}</div>
                    <label className="mandatory">Mobile No (09399999999)</label>
                    <input
                        type="text"
                        name="contact"
                        onChange={this.props.handleChange}
                    />
                    <div className="mandatory-message">{this.props.errorMessage.contact}</div>
                    <label className="mandatory">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={this.props.handleChange}
                    />
                    <div className="mandatory-message">{this.props.errorMessage.email}</div>
                    <label className="mandatory">Date of Birth (mm/dd/yy)</label>
                    <input
                        type="text"
                        name="dob"
                        onChange={this.props.handleChange}
                    />
                    <div className="mandatory-message">{this.props.errorMessage.dob}</div>
                    <input
                        type="submit"
                        name="submit"
                        value="Submit"
                    />
                </form>
            </>
        )
    }
}

export class Profile extends React.Component {

    state = {
        formValid: false,
        showDataContainer: false,
        errorMessage: {}

    }

    validateForm = (evt) => {

        let _name = evt.target.name;
        let _value = evt.target.value ? evt.target.value.trim() : null ;

        this.setState({ [_name]: _value });

        switch (_name) {
            case 'name':

                let NameBool = minStringLength.test(_value);

                this.setState(prevState => ({
                    errorMessage: {                   // object that we want to update
                        ...prevState.errorMessage,    // keep all other key-value pairs. Update the value of specific key
                        name: NameBool == false ? INVALID_INPUT_MESSAGE_LANG : '',
                        nameIsPassed: NameBool
                    }
                }));

                break;
            case 'email':
                let EmailBool = validEmail.test(_value);

                this.setState(prevState => ({
                    errorMessage: {                   // object that we want to update
                        ...prevState.errorMessage,    // keep all other key-value pairs. Update the value of specific key
                        email: EmailBool == false ? INVALID_INPUT_MESSAGE_LANG : '',
                        emailIsPassed: EmailBool
                    }
                }))

                break;
            case 'contact':

                let ContactBool = validContact.test(_value);

                this.setState(prevState => ({
                    errorMessage: {                   // object that we want to update
                        ...prevState.errorMessage,    // keep all other key-value pairs. Update the value of specific key
                        contact: ContactBool == false ? INVALID_INPUT_MESSAGE_LANG : '',
                        contactIsPassed: ContactBool
                    }
                }))
                
                break;

            case 'dob':

                let DOBBool = validBOD.test(_value);

                this.setState(prevState => ({
                    errorMessage: {                   // object that we want to update
                        ...prevState.errorMessage,    // keep all other key-value pairs. Update the value of specific key
                        dob: DOBBool == false ? INVALID_INPUT_MESSAGE_LANG : '',
                        dobIsPassed: DOBBool
                    }
                }))

                break;


        }

        const { nameIsPassed, emailIsPassed, contactIsPassed, dobIsPassed } = this.state.errorMessage;

        if ((nameIsPassed == true && emailIsPassed == true && contactIsPassed == true && dobIsPassed == true) == true) {
            this.setState({ formValid: true });
        } else {
            this.setState({ formValid: false });
        }

        this.setState({ showDataContainer: false });
    }

    handleChange = (evt) => { this.validateForm(evt) }

    handleResponse = (evt) => {

        evt.preventDefault();

        this.validateForm(evt);


        if (this.state.formValid == true) {
            this.setState({ showDataContainer: true });
            alert('Form submitted');
        } else {

            alert('false');
        }

    }

    render() {
        return (
            <>
                <ProfileForm handleResponse={this.handleResponse} handleChange={this.handleChange} errorMessage={this.state.errorMessage} />
                <DisplayProfile viewData={ this.state } />
            </>

            );
    }
}