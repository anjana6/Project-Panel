import React,{useState} from 'react'

const SignIn = () => {
    const [state, setState] = useState({Fname:'',Lname:'',email:'',password:''});

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(state);
    }

    const onChange = (e) => {
        setState({...state,[e.target.name]: e.target.value})
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="Fname" onChange={onChange} name="Fname"/>
                </div>
                <div className="input-field">
                    <label htmlFor="Lname">Last Name</label>
                    <input type="text" id="Lname" onChange={onChange} name="Lname"/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={onChange} name="email"/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="password" id="password" onChange={onChange} name="password"/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">SingUp</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
