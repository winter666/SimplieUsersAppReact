import './User.scss';
import {connect} from 'react-redux';
import {useState} from 'react';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import Button from '../Button/Button';

function User(props) {
    let [isHiddenForm, setIsHiddenForm] = useState(false);
    let formClass = "form-container ";
    formClass += isHiddenForm ? "show" : "hide";
    return (
        <div className="user">
            <div className="info">
                <div className="name">{props.user.name}</div>
            </div>
            <div className="edit">
                <div className="toggle-form">
                    <ArrowIcon clickHandler={() => {setIsHiddenForm(!isHiddenForm);}} />
                </div>
                <div className={formClass}>
                    <form method="POST" action="#">
                        <div className="form-input">
                            <input type="text" value={props.user.name} name="user_name" onChange={()=> {}} />
                        </div>
                        <div className="form-controller">
                            <Button name="Save" signature="success" />
                            <Button name="Delete" signature="danger" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapState = (state) => {
    return state;
}
  
const mapDispatch = (state, action) => {
    return {
      type: 'test',
      payload: {}
    }
}

export default connect(mapState, mapDispatch)(User);