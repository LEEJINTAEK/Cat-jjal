import React from "react";

const Form = ({ onUpdateCat }) => {
  const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);

  const [value, setValue] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  function handleInputChange(e) {
    includesHangul(e.target.value)
      ? setErrorMsg("한글은 입력할 수 없어요")
      : setErrorMsg("");
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");
    if (value === "") {
      setErrorMsg("빈 값으로 생성 안돼요!!");
      return;
    }
    if (includesHangul(value)) {
      setErrorMsg("한글로 생성 안돼요!!");
      return;
    }
    onUpdateCat(value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="영어 대사를 입력해주세요"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit">생성</button>
      <p style={{ color: "red" }}>{errorMsg}</p>
    </form>
  );
};

export default Form;
