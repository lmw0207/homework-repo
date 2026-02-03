function Card({ name, birthyear, currentYear, hobbies, mbti }) {
  return (
    <>
      <div className="card-content">
        <h2>{name}</h2>
        <p>나이: {currentYear - birthyear + 1}세</p>
        <p>취미: {hobbies.join(", ")}</p>
        <p>MBTI: {mbti}</p>
      </div>
    </>
  );
}
export default Card;
