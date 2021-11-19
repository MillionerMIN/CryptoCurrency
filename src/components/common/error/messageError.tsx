import Error429 from '../../../icons/error/error-429.jpeg';

import './messageError.scss';

export const MessageError = () => {
  return (
    <div className="message-error">
      <img className="message-error__img" src={Error429} alt="error429" />
    </div>
  );
};
