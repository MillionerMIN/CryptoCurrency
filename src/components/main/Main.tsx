import Logo from '../../icons/digital-wallet.png';
import './main.scss';
import { TopCurrency } from '../topCurrency/TopCurrency';
import { ButtonMain } from '../common/button/button';

type MainPropsType = {
  activeBtn: boolean;
  onChangeButton: (value: string) => void;
};

export const Main = ({ activeBtn, onChangeButton }: MainPropsType) => {
  const buttons = [
    { value: 'Balance', active: activeBtn },
    { value: 'Information panel', active: !activeBtn },
  ];

  const button = buttons.map((btn) => (
    <ButtonMain
      key={btn.value}
      value={btn.value}
      active={btn.active}
      onChangeButton={onChangeButton}
    />
  ));
  return (
    <section className="main">
      <div className="main__header">
        <div className="logo logo_center logo_end">
          <img className="logo__img" src={Logo} alt="Logo" />
        </div>
        <h1 className="title">Crypto-wallet</h1>
      </div>
      <div className="main__panel">{button}</div>
      <TopCurrency />
    </section>
  );
};
