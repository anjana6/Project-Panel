import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createProject} from '../../store/action/projectAction';

const CreateProject = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const [state, setState] = useState({title:'',content:''});

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createProject(state));
        history.push('/')
    }

    const onChange = (e) => {
        setState({...state,[e.target.name]: e.target.value});
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text"  onChange={onChange} name="title"/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea className="materialize-textarea" name="content" onChange={onChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProject;
