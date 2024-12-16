import React from 'react'

const Profile = () => {
  return (
    <div className='profile journalLayout'>
      <h1>프로필</h1>
      <div className='profileHeader'>
        <div className='profilePic'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4dSWank4KGUIYGGHOc1EMW3fV0slW13l4Tw&s" alt="" />
        </div>
        <div className='profileInfo'>
          <h2>홍길동</h2>
          <h2>@abc</h2>
          <h2>@example.com</h2>
        </div>
      </div>
      <div className='profileSettings'></div>
    </div>
  )
}

export default Profile