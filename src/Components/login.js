import React from 'react';

class login extends React.Component {
    render () {
        return(
<section id="cover" class="min-vh-100">
    <div class="container">
        <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
           <div style= {{marginTop: 10}}>
            <h3 class="text-center">User Loging</h3>
            <br></br>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input type="email" 
                          className="form-control"
                          placeholder="Your Email" 
                        //   value={this.state.person_name}
                        //   onChange={this.onChangePersonName}
                          />
                </div>
                <div className="form-group">
                    <input type="password" 
                           className="form-control"
                           placeholder="Password"
                        //    value={this.state.business_name}
                        //    onChange={this.onChangeBusinessName}
                           />
                </div>
                <div className="form-group">
                    <input type="submit" value="LOGIN" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    </div>
   </div>
</section>
        );
    }
}

export default login;

