function NavMenu({setShowForm}){
    return(
        <>
               <header className="header">
                    <div className="logo">MY CAR CARE</div>
                    <ul className="nav">
                        <li onClick={()=>setShowForm(true)}>Book Services</li>
                        <li onClick={()=>setShowForm(false)}>View Booking</li>
                       
                    </ul>
                </header>
        </>
    );
}

export default NavMenu;