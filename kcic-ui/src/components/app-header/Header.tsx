import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink
} from 'reactstrap';

import Dropdown from './Dropdown';
import { useUserService } from '../../user-context';

import routes from '../../constants/routes';

/* TODO improvement, the css is off with the refactoring, seems some of this is handled by the UI component libs
I am more acostumed to working with desing systems that would allow me to treat this a bit differently 
like  setting a flex box or grid to arrange the header UX. 
*/
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { state: user } = useUserService();
  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={NavLink} to={routes.HOME.PATH}>KCIC Recruiting Challenge</NavbarBrand>
          <NavbarToggler onClick={()=> setIsOpen(!isOpen)} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} to={routes.HOME.PATH} className="text-dark">Home</NavLink>
              </NavItem>
              { user.currentUser.username !== 'Unauthenticated' ? 
              <NavItem>
                <NavLink tag={Link} to={routes.APPROVALQUEUE.PATH} className="text-dark" >Approval Queue</NavLink>
              </NavItem>: null }

              <NavItem>
                <Dropdown />
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
