import { ChangeEvent, useState } from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { CurrencyType } from '../../../api/Api';

import './ModalWindow.scss';

type ModalWindowPropsType = {
  data: CurrencyType;
  handleClose: () => void;
  changeHandler: (numberCur: number) => void;
};

export const ModalWindow = (props: ModalWindowPropsType) => {
  const { changeHandler, handleClose } = props;
  const { id, priceUsd } = props.data;
  const [cur, setCur] = useState<number>(0);

  const onAddAssetsHandler = () => cur !== 0 && changeHandler(cur);

  const onChangeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
    setCur(+e.currentTarget.value);
  };

  return (
    <>
      <Modal show={true} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add in the Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text>{id}</InputGroup.Text>
            <FormControl
              type="number"
              aria-label="Amount (to the nearest dollar)"
              onChange={onChangeValueInput}
            />
            <InputGroup.Text>{priceUsd + ' $'}</InputGroup.Text>
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onAddAssetsHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
