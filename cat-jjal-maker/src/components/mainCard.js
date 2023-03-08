function MainCard({ img, onHandleClick, alreadyFavor }) {
  const heartIcon = alreadyFavor ? "💖" : "🤍";
  return (
    <div className="main-card">
      <img src={img} alt="고양이" width="400" />
      <button onClick={onHandleClick}>{heartIcon}</button>
    </div>
  );
}

export default MainCard;
