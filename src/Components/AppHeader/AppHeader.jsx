import { Container, Nav, Navbar } from "react-bootstrap"

const AppHeader = () => {
  return (
    <header >
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Todo App</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

    </header>
  )
}

export default AppHeader
