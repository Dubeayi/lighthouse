import React from 'react';
import NavigationalMenu from './NavigationalMenu';
import AboutUs from './webPages/AboutUs';
import ContactUs from './webPages/ContactUs';
import Home from './webPages/Home';
import Pricing from './webPages/Pricing';
import Services from './webPages/Services';
import VirtualTour from './webPages/VirtualTour';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false,
      page: 'Home',
    };
    this.onClick = this.onClick.bind(this);
    this.pageRender = this.pageRender.bind(this);
    this.loadPage = this.loadPage.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     page: Home
  //   });
  // }

  onClick() {
    this.setState({
      buttonClicked: !this.state.buttonClicked,
    });
  }

  pageRender(e) {
    e.preventDefault();

    const pageClicked = e.target.value;
    console.log('pageClicked ', pageClicked);
    this.setState({
      page: pageClicked,
    });
  }

  loadPage() {
    const { page } = this.state;

    if (page === 'Home') {
      return <Home />;
    }
    if (page === 'AboutUs') {
      return <AboutUs />;
    }
    if (page === 'Pricing') {
      return <Pricing />;
    }
    if (page === 'VirtualTour') {
      return <VirtualTour />;
    }
    if (page === 'Services') {
      return <Services />;
    }
    return <Home />;
  }

  render() {
    return (
      <div>
        <NavigationalMenu pageSelected={this.state} pageRender={this.pageRender} />
        { this.loadPage()}
        {/* <div id="gridRow1">gridRow1</div>
        <div id="gridColumn1">gridColumn1</div>
        <div id="gridRow2"> gridRow2</div>
        <div id="gridColumn2">gridColumn2</div> */}
      </div>
    );
  }
}

export default App;
