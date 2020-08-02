import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions';


function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>User list</h2>
            <ul style={{listStyleType: "none"}}>
            {
                userData && userData.users &&
                userData.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))
            }
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
