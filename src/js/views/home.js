import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<><div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		</div>
		<div className="card mb-3" >
			<div className="row g-0">
				<div className="col-md-4">
					<img src="..." className="img-fluid rounded-start" alt="..."/>
				</div>
				<div className="col-md-6">
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
						<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
					</div>
				</div>
				<div className="col-md-2 d-flex">
					<i className="far fa-pencil"></i>
				</div>
			</div>
		</div>
	</>
);