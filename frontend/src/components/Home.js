import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div className="container">
			<div className="box">
				<div className="box-left">
					<div className="form">
						<h1>IronProfile</h1>
						<p>Today we will create an app with authorization, adding some cool styles!</p>
					</div>
					<div className="form">
						<Link to="/signup"><button>Sign up</button></Link>
						<Link to="/login"><button>Log in</button></Link>
					</div>
				</div>
			</div>
		</div>
	);
}
