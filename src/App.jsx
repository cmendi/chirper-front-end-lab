import React from "react";
import { useState } from "react";
import UserInput from "./components/UserInput";
import UserPost from "./components/UserPost";

const App = () => {
	const [posts, setPosts] = useState([
		{ username: "Cmendi", message: "Winter is better than summer!" },
		{ username: "Kmendi", message: "Mammoth got 100ft of snow!" },
		{ username: "Valrog", message: "Lets go to that new bar in downtown!" },
	]);

	const update = (newPost) => {
		setPosts([newPost, ...posts]);
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<UserInput update={update} />
					<div className="col p-0 m-4">
						<UserPost post={posts} />
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
