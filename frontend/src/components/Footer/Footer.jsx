import { Link } from 'react-router-dom';
import SourceCodeLink from '../SourceCodeLink';

function Footer() {
	return (
		<div className="container">
			<Link to="/" className="logo-font">
				UKH Blog
			</Link>
			<span className="attribution">A Software Architecture project for UKH University. Code licensed under MIT.</span>
		</div>
	);
}

export default Footer;
