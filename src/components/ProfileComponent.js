import React from 'react'
import cardPattern from '../images/bg-pattern-card.svg';
import avatar from '../images/image-victor.jpg';

const ProfileComponent = () => {
  return (
    <div className='profile-card-component'>
        <img className='pattern' src={cardPattern} alt=""/>
        <img className='avatar' src={avatar} alt=""/>

        <div className='profile-details' >
            <h3>Victor Crest</h3>
            <p>26</p>
        </div>

        <p className='area'>London</p>

        <div className='account'>
            <div className='followers'>
               <h3>80K</h3>
               <p>Followers</p> 
            </div>
            <div className='likes'>
               <h3>803K</h3>
               <p>Likes</p> 
            </div>
            <div className='photos'>
               <h3>1.4K</h3>
               <p>Photos</p> 
            </div>
        </div>
    
    
    </div>
  )
}

export default ProfileComponent