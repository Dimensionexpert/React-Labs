const ErrorMessage = ({ items }) => {
  return <>{items.length === 0 ? <h3>i am still hungry</h3> : null}</>;
};

export default ErrorMessage;
