import './User.scss';
import {connect} from 'react-redux';
import {useState} from 'react';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import Button from '../Button/Button';

function User(props) {
    let user = {...props.user};
    let [isHiddenForm, setIsHiddenForm] = useState(false);
    let formClass = "form-container ";
    formClass += isHiddenForm ? "show" : "hide";

    const saveFormHandler = (e, user) => {
        props.updateUser(user);
    }
    const deleteUserHandler = (e, user_id) => {
        props.deleteUser(user_id);
    }

    return (
        <div className="user">
            <div className="info">
                <div className="name">{ props.user.name }</div>
            </div>
            <div className="edit">
                <div className="toggle-form">
                    <ArrowIcon clickHandler={() => {setIsHiddenForm(!isHiddenForm);}} />
                </div>
                <div className={formClass}>
                    <form method="POST" action="#">
                        <div className="form-input">
                            <input type="text" name="user_name" onChange={(e) => { user.name = e.target.value; }}/>
                        </div>
                        <div className="form-controller">
                            <Button name="Save" signature="success" click={{handler: saveFormHandler, bindParam: user}}/>
                            <Button name="Delete" signature="danger" click={{handler: deleteUserHandler, bindParam: user.id}}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapState = (state) => {
    let users = [...state.users];
    return { users };
}
  
const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: user => dispatch({type: 'users.update', payload: {user}}),
        deleteUser: user_id => dispatch({type: 'users.delete', payload: {user_id}}),
    }
}

export default connect(mapState, mapDispatchToProps)(User);