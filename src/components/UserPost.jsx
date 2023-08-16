import React from "react";

const UserPost = () => {
	const userData = [
		{
			userName: "Cmendi",
			message: "Winter is better than summer!",
		},
	];

	return (
		<>
			<div className="container shadow rounded p-0">
				<div className="card rounded rounded-0 p-3">
					{userData.map((val, index) => {
						return <h3 key={index}>{`@${val.userName}`}</h3>;
					})}
					{userData.map((val, index) => {
						return <p key={index}>{val.message}</p>;
					})}
				</div>
			</div>
		</>
	);
};

export default UserPost;
