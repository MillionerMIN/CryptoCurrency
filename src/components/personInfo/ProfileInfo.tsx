import Ava from '../../icons/person/avatar.svg';

import './profileInfo.scss';

export const ProfileInfo = () => {
  return (
    <div className="profile">
      <div className="profile__avatar">
        <img className='profile__img' src={Ava} alt="ava" />
      </div>
      <span className="profile__name">profile@mail.com</span>
    </div>
  );
};
