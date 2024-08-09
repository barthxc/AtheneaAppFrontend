import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="flex justify-between items-center absolute top-0 left-0 w-full h-20">
			<div className="flex-1 flex justify-start items-center px-12 h-full">
				<h2 className="text-2xl font-semibold">Athenea</h2>
			</div>
			<nav className="flex-[2] px-12 flex justify-between items-center h-full">
				<ul className="flex justify-start items-center gap-10 text-white">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="#about-us">About us</Link>
					</li>
					<li>
						<Link to="#campaigns">Campaigns</Link>
					</li>
					<li>
						<Link to="#blog">Blog</Link>
					</li>
					<li>
						<Link to="#contact">Contact</Link>
					</li>
				</ul>
				<Link to="/donate" className="py-2 px-5 bg-white text-black text-lg font-medium inline-block">
					Donate
				</Link>
			</nav>
		</div>
	);
};
