import './Header.scss';

export const Header = () => {
  return (
    <section className="header">
      <div className="money">
        <div>
          <span>bitcoin</span>
          <span>13221654</span>
        </div>
        <div>
          <span>bitcoin</span>
          <span>13221654</span>
        </div>
        <div>
          <span>bitcoin</span>
          <span>13221654</span>
        </div>
      </div>
      <div className="profile">
        <h4>profile@gmail.com</h4>
        <div className="avatar">
          <img src="../../icons/money/bitcoin-btc-logo.svg" alt="" />
        </div>
        <div className="targets">134,32 USD +2,38 (1,80 %)</div>
      </div>
    </section>
  );
};
