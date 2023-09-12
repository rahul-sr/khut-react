function ProfileCard(props) {
  const { user, render } = props;
  return (
    <>
      <h3>ProfileCard</h3>
      <div>Name: {user.name}</div>
      <div>Age: {user.age}</div>
      <div>{render(true)}</div>
    </>
  );
}

export default ProfileCard;
