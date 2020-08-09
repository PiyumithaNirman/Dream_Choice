import React from 'react';
import axios from 'axios';

class register extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        };

        axios.post('http://localhost:4000/register/add', obj).then(res => console.log(res.date));

        this.setState({
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        })
    }


    render() {
        return (
            <section id="cover" class="min-vh-100">
                <div class="container">
                    <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                        <div style={{ marginTop: 10 }}>
                            <h3 class="text-center">User Registration</h3>
                            <br></br>
                            <form onSubmit={this.onSubmit}>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="First Name"
                                            value={this.state.first_name}
                                            onChange={this.onChangeFirstName}
                                        />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Last Name"
                                            value={this.state.last_name}
                                            onChange={this.onChangeLastName}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                    />
                                </div>
                                {/* <div className="form-group">
                                    <input type="password"
                                        className="form-control"
                                        placeholder="Confirm Password"
                                      value={this.state.business_nic_number}
                                      onChange={this.onChangeNicNumber}
                                    />
                                </div> */}
                                <div className="form-group">
                                    <input type="submit" value="Register Business" className="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default register;
