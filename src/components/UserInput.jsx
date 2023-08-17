import React from "react";
import { useState } from "react";

const UserInput = (props) => {
	const [username, setUsername] = useState("");
	const [message, setMessage] = useState("");

	return (
		<div className="col m-4">
			<div className="container shadow rounded w-75">
				<form className="p-3 form-group">
					<div className="input-group mb-2">
						<input className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
					</div>
					<div className="input-group mb-2">
						<textarea className="form-control" placeholder="Your thoughts..." value={message} onChange={(e) => setMessage(e.target.value)} />
					</div>
				</form>
				<button
					className="btn btn-primary mx-3 mb-3"
					type="submit"
					onClick={() => {
						if (!username) {
							return alert("Please pick a username!");
						} else if (!message) {
							return alert("Please type a message!");
						} else {
							props.update({ username, message });
							setUsername("");
							setMessage("");
						}
					}}
				>
					Chirp It
				</button>
			</div>
		</div>
	);
};

export default UserInput;
