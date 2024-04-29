import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router';

function Header() {

  const navigate = useNavigate();

  const handleNew=()=>{

    navigate('/')


  }
  const handleData=()=>{

    navigate('/review_table')

  }



  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='p-2'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link variant=" me-5" className='text-white' onClick={handleNew}>New Review</Nav.Link>
            <Nav.Link variant=" me-5" className='text-white' onClick={handleData}>Review List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;