function MainCard({ img, onHandleClick, alreadyFavor }) {
  const heartIcon = alreadyFavor ? "đ" : "đ¤";
  return (
    <div className="main-card">
      <img src={img} alt="ęł ěě´" width="400" />
      <button onClick={onHandleClick}>{heartIcon}</button>
    </div>
  );
}

export default MainCard;
