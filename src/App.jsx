import React from "react";
import UserInput from "./components/UserInput";
import UserPost from "./components/UserPost";

const App = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<UserInput />
					<div className="col p-0 m-4">
						<UserPost />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
