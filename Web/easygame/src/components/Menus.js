import React from 'react'; 

class Menus extends React.Component {
  // data needed
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
      this.setState({ menuOpen: false })
  }

  render(){
    return (
      <div class="wrapper">
        {this.state.isOpen && <div class="sidebar">sidebar</div>}
        <button onClick={() => this.toggleMenu()}>Toggle Menu</button>
        <div class="main-content">content</div>
      </div>
    );
  }
}

export default Menus;