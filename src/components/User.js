import React from 'react';

const User = ({handleLogout}) => {

    return(
        <section className='hero'>
            <nav>
                <h>Welcome</h>
                <button onclick="handleLogout">Logout</button>
            </nav>
        </section>
    )

}

export default User;