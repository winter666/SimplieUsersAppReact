import './UserList.scss';
import User from '../User/User';

export default function UserList (props) {
    return (
        <div className="users">
        {
            props.users.map((user, index) => (
                <User user={user} key={index}/>
            ))
        }
        </div>
    );
}