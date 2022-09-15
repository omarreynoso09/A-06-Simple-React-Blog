const Navbar = ({ user }) => {
  return (
    <header>
      <div>Simple Blog</div>
      <div id="MainPhoto">
        {user && (
          <img src={user.url} alt="Profile Pictue" height="70px" width="70px" />
        )}
      </div>
    </header>
  );
};

export default Navbar;
