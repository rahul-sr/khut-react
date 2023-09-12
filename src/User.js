import ProfileCard from "./ProfileCard";

function User() {
  const user = { name: "Jay", age: 30 };
  const getLoginStatus = (
    loginStatus
  ) => {
    return (
      <>
        {loginStatus ? (
          <div>LoggedIn</div>
        ) : (
          <div>Not LoggedIn</div>
        )}
      </>
    );
  };

  return (
    <>
      <ProfileCard
        render={getLoginStatus}
        user={user}
      />
    </>
  );
}

export default User;

// 200000 IND =>  2,00,000 INR

// 200000 USA => 200,000 USD

// Account Statement
