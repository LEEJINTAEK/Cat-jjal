function CatItem(props) {
  return (
    <li>
      <img
        src={props.img}
        style={{ width: "200px", border: "1px solid pink" }}
        alt="고양이"
      />
    </li>
  );
}

function Favor({ favorites }) {
  if (favorites.length === 0) {
    return <div>하트를 눌러 고양이 사진을 저장해봐요!</div>;
  }
  return (
    <ul className="favorites">
      {favorites.map((cat) => (
        <CatItem img={cat} key={cat} />
      ))}
    </ul>
  );
}

export default Favor;
