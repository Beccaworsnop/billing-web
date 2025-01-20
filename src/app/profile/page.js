'use client';
import { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState({
    name: '',
    nickname: '',
    profilePicture: '',
    card: '',
    balance: 0,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const mockUser = {
        name: '/',
        nickname: '/',
        profilePicture: 'https://example.com/profile.jpg',
        card: '1234-5678-9101',
        balance: 100.5,
      };
      setUser(mockUser);
      setUpdatedProfile(mockUser);
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({ ...updatedProfile, [name]: value });
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Profile</h1>
      <img src={user.profilePicture} alt={`${user.name}'s profile`} />
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={updatedProfile.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Nickname:</label>
          <input
            type="text"
            name="nickname"
            value={updatedProfile.nickname}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Card:</label>
          <input
            type="text"
            name="card"
            value={updatedProfile.card}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Balance:</label>
          <input
            type="number"
            name="balance"
            value={updatedProfile.balance}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
