import {FC} from 'react';
import {
	Navbar,
	NavbarBrand,
} from "reactstrap";

const Header: FC = () => (
	<Navbar
		color="dark"
		dark
	>
		<NavbarBrand href="/">Capitales del Mundo</NavbarBrand>
	</Navbar>
);

export default Header