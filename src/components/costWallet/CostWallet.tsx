import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getCostWallet, getCurrentsWallet } from '../../redux/selectors';
import { AppRootStateType } from '../../redux/store';
import { Wrapper } from '../common/wrapper/Wrapper';
import Delete from '../../icons/other/delete.svg';
import './costWallet.scss';
import {
  CurrencyWalletType,
  deleteWallet,
  removeCrypto,
} from '../../redux/walletReducer';

export const CostWallet = () => {
  const dispatch = useDispatch();
  const costWallet = useSelector<AppRootStateType, number>(getCostWallet);
  let arrayBoughtCurrency = useSelector<AppRootStateType, CurrencyWalletType[]>(
    getCurrentsWallet
  );

  const onDeleteWallet = () => {
    dispatch(deleteWallet());
  };

  const onDeleteCrypto = (coin: CurrencyWalletType) => {
    dispatch(removeCrypto(coin));
  };

  const element = arrayBoughtCurrency.map((item) => (
    <div className="cost-wallet__group">
      <div className="cost-wallet__name-currency">{item.id}</div>
      <div className="cost-wallet__count-currency">{item.count}</div>
      <div className="cost-wallet__cost-currency">
        {item.resultUsd.toFixed(2)} $
      </div>
      <Button variant="danger" onClick={() => onDeleteCrypto(item)}>
        <img src={Delete} alt="delete" />
      </Button>
    </div>
  ));

  return (
    <section className="cost-wallet cost-wallet_mr">
      <div className="cost-wallet__wrapper">
        <Wrapper>
          <div className="cost-wallet__balance">
            <div className="cost-wallet__title">Balance:</div>
            <div className="cost-wallet__cost">{costWallet} $</div>
          </div>
        </Wrapper>
        <Wrapper>
          <div className="cost-wallet__delete">
            <button className="btn btn_delete" onClick={onDeleteWallet}>
              Delete
            </button>
          </div>
        </Wrapper>
        <div className="cost-wallet__coins">
          <Wrapper>
            <div className="cost-wallet__title">Currency Wallet</div>
            {element}
          </Wrapper>
        </div>
      </div>
    </section>
  );
};
