import './wrapper.scss';

export const Wrapper: React.FunctionComponent = ({ children }): JSX.Element => {
  return <div className="wrapper wrapper_pd20">{children}</div>;
};
