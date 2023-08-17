import React from "react";

const UserPost = (props) => {
	return (
		<>
			<div className="container shadow rounded p-0">
				<div className="card rounded rounded-0 p-3">
					{props.post.map((val, index) => (
						<div key={index}>
							<h3>@{val.username}</h3>
							<p>{val.message}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default UserPost;
