import React,{Component} from 'react';
import axios from 'axios'

class ContactForm extends Component {
    state ={
        name :"",
        email:"",
        subject:"",
        message:""
    }
    changeHandelar = (event)=>{
        this.setState({
            ...this.state,
            [event.target.name] : event.target.value
        })
    }

    submit=()=>{
        console.log("form submited wp rest api")
        const form = new FormData()

        form.set("your-name",this.state.name)
        form.set("your-email",this.state.email)
        form.set("your-subject",this.state.subject)
        form.set("your-message",this.state.message)

        const url = 'http://localhost/wordpress/wp-json/contact-form-7/v1/contact-forms/120/feedback'
        axios.post(url,form)
        .then(res=>{
            console.log(res)
            this.setState({
                ...this.state,
                name :"",
                email:"",
                subject:"",
                message:""
            })
            alert('Message Sent Successfully')
        })
        .catch(err=>console.log(err))
    }

    render(){
        return (
        <div className="col-md-6">
            <div role="form" class="wpcf7" id="wpcf7-f120-p118-o1" lang="en-US" dir="ltr">
                
                <div className="row">
                    <div className="col-md-6">
                        <input className="form-control" onChange={event=>this.changeHandelar(event)}type="text" name="name"  value={this.state.name}placeholder="Your Name"/>
                    </div>

                    <div className="col-md-6">
                        <input className="form-control" onChange={event=>this.changeHandelar(event)}type="email" name="email"  value={this.state.email}placeholder="Your email"/>
                    </div>
                </div>
                
                <input className="form-control" onChange={event=>this.changeHandelar(event)}type="text" name="subject"  value={this.state.subject}placeholder="Your Subject"/>
                <textarea className="form-control" onChange={event=>this.changeHandelar(event)}name="message" id="" cols="30" rows="10" value={this.state.message}></textarea>
                <div className="btn btn-defeault btn-send send" onClick={this.submit} value={this.state.name}>SUBMIT</div>
            
            </div>
        </div>
        );
    }
};

export default ContactForm;