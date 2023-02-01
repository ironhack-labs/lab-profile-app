function HomePage() {
    return (
      <div>
        <h3>IronProfile</h3>
        <Link to={"/login"}> Login</Link>
        <Link to={"/signup"}> Sign Up</Link>
      </div>
    );
  }
  
  export default HomePage;