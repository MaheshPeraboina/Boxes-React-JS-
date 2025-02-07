const Box = (props) => {
  //  Write your code here.
  const { boxCls, boxText } = props;
  return (
    <div className={boxCls}>
      <p className="box-text">{boxText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="box-bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box boxCls="small" boxText="Small" />
      <Box boxCls="medium" boxText="Medium" />
      <Box boxCls="large" boxText="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
