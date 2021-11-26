import './App.scss';
import {connect} from 'react-redux';
import UserList from './components/UserList/UserList';


function App(props) {
  let users = props.users;
  return (
    <div className="app">
      <div className="header">
        <h1>Users app</h1>
      </div>
      <div className="container">
        <UserList users={users} />
      </div>
    </div>
  );
}

const mapState = (state) => {
  return state;
}

export default connect(mapState)(App);
