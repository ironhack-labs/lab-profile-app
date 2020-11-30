import {Link} from 'react-router-dom'
export default function Home() {
    return (
      <div>
        <h1>IronProfile</h1>
        <h5>
          Today we will create an App with authoritation, adding some cool
          styles!
        </h5>
        <Link to={'/signup'}>
          <button>Sign up</button>
        </Link>
        <Link to={'/login'}>
          <button>Log in</button>
        </Link>
      </div>
    );
}