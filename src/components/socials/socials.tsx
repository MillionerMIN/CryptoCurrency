import Telegram from '../../icons/social/telegram_icon.svg';
import FaceBook from '../../icons/social/facebook_icon.svg';
import Google from '../../icons/social/google_icon.svg';
import Discord from '../../icons/social/discord_icon.svg';
import './socials.scss';

export const Socials = () => {
  return (
    <div className="socials socials_gap40">
      <img src={Telegram} alt="telegram" />
      <img src={FaceBook} alt="facebook" />
      <img src={Google} alt="google" />
      <img src={Discord} alt="discord" />
    </div>
  );
};
