function ProfileCard({ name, age, job }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>프로필 카드</h3>
      </div>
      <div className="card-desc">
        <p>이름: {name}</p>
        <p>나이: {age}세</p>
        <p>직업: {job}</p>
      </div>
    </div>
  );
}
export default ProfileCard;
