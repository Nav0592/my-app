function UserInfo(users){
    return (
        <div className="item">
        <h4>Booking Id: {users.userProp.id}</h4> 
        <p>Service Name: {users.userProp.username}</p>
        <button className="btn btn-success">Delete</button>
     </div> 
     )
}

export default UserInfo;