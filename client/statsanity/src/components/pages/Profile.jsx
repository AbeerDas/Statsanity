import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/userContext';


const Profile = () => {
    const { user } = useContext(UserContext);
    // Function to simulate logout

    useEffect(() => {
        // Log user whenever it changes
        console.log('User:', user);
    }, [user]); // Trigger effect whenever user state changes
    return (
        <div className='home-content page-content'>
            <div className='HeaderContainer'>
                <div className="HeaderText">
                    <div className="Header-and-Paragraph">
                        {user ? (
                            <h1 className='Header'>Profile</h1>
                        ) : (
                            <h1 className='Header'>Own the Whole Court</h1>
                        )}
                        <p className='HeaderParagraph'>
                            Hello, {user.name}. Control and customize whatever you need here.   
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
