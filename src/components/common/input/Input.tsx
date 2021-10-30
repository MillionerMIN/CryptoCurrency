import { ChangeEvent } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

type InputPropsType = {
  id?: string;
  priceUsd: string;
  onChangeValueInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputPropsType) => {
  const { id, priceUsd, onChangeValueInput } = props;

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text>{id}</InputGroup.Text>
      <FormControl
        type="number"
        aria-label="Amount (to the nearest dollar)"
        // onChange={(e) => onChangeValueInput(e.currentTarget.value)}
      />
      <InputGroup.Text>{priceUsd + ' $'}</InputGroup.Text>
    </InputGroup>
  );
};
