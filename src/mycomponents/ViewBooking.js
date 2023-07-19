import NavMenu from "./NavMenu";

function ViewBooking(){
    return(
        <>
           <div className="container">
                <div className="booking-list">
                    <h3>List of all Bookings</h3>
                     <div className="group">
                        <div className="item">
                           <h4>Booking Id: 4021</h4> 
                           <p>Service Name: Washing</p>
                           <p>Booking Date: 07/18/2023</p>
                           <button className="btn btn-success">Delete</button>
                        </div> 
                        <div className="item">
                           <h4>Booking Id: 4021</h4> 
                           <p>Service Name: Washing</p>
                           <p>Booking Date: 07/18/2023</p>
                           <button className="btn btn-success">Delete</button>
                        </div> 
                        <div className="item">
                           <h4>Booking Id: 4021</h4> 
                           <p>Service Name: Washing</p>
                           <p>Booking Date: 07/18/2023</p>
                           <button className="btn btn-success">Delete</button>
                        </div> 
                     </div>   
                </div>
           </div> 
        </>
    );
}

export default ViewBooking;