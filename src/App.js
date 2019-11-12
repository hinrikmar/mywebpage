import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import AboutMe from './Components/AboutMe/AboutMe'
import Tasks from './Components/Tasks/Tasks'
import Goals from './Components/Goals/Goals'
import AboutSite from './Components/AboutSite/AboutSite'
import ContactMe from './Components/ContactMe/ContactMe'
import Footer from './Components/Footer/Footer'

class App extends React.Component {

  refAboutMe = React.createRef();
  refTasks = React.createRef();
  refGoals = React.createRef();
  refAboutSite = React.createRef();
  refContactMe = React.createRef();


  componentDidMount() {

    this.setState({ loaded: true })
  }
  
  handleScrollTo = (elRef) => {
    // Incase the ref supplied isn't ref.current
    const el = elRef.current ? elRef.current : elRef
    
    // Scroll the element into view
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link onClick={() => { this.handleScrollTo(this.refAboutMe) }}>About me</Nav.Link>
            <Nav.Link onClick={() => { this.handleScrollTo(this.refTasks) }}>Tasks</Nav.Link>
            <Nav.Link onClick={() => { this.handleScrollTo(this.refGoals) }}>My goals</Nav.Link>
            <Nav.Link onClick={() => { this.handleScrollTo(this.refAboutSite) }}>About this site</Nav.Link>
            <Nav.Link onClick={() => { this.handleScrollTo(this.refContactMe) }}>Contact me</Nav.Link>
          </Nav>
        </Navbar>
        <header className="App-header">
          <div className="text">
          </div>
        </header>

        <div className="spacer"></div>

        <div ref={this.refAboutMe}>
          <AboutMe />
        </div>
        <div ref={this.refTasks}>
          <Tasks/>
        </div>
        <div ref={this.refGoals}>
          <Goals/>
        </div>
        <div ref={this.refAboutSite}>
          <AboutSite/>
        </div>
        <div ref={this.refContactMe}>
          <ContactMe/>
        </div >
        <div style = {{marginBottom: "3%", paddingTop: "5%"}}>
          <Footer/>
        </div>
      </div>
    );
    }
}
export default App;
