import './button.scss';

type ButtonPropsType = {
  value: string;
  active: boolean;
  onChangeButton: (value: string) => void;
};

export const ButtonMain = (props: ButtonPropsType): JSX.Element => {
  const { value, active, onChangeButton } = props;
  const clazz = active ? 'btn btn-custom btn-custom_active' : 'btn btn-custom';
  return (
    <button className={clazz} onClick={() => onChangeButton(value)}>
      {value}
    </button>
  );
};
