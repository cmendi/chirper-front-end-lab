import React from "react";

const UserInput = () => {
	return (
		<div className="col m-4">
			<div className="container shadow rounded w-75">
				<form className="p-3 form-group">
					<div className="input-group mb-2">
						<input className="form-control" placeholder="Username" />
					</div>
					<div className="input-group mb-2">
						<textarea className="form-control" placeholder="Your thoughts..." />
					</div>
					<button className="btn btn-primary" type="submit">
						Chirp It
					</button>
				</form>
			</div>
		</div>
	);
};

export default UserInput;
