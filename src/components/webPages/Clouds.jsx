// import React from 'react';
// import CLOUDS from 'vanta/dist/vanta.clouds.min';

// class Clouds extends React.Component {
//   constructor() {
//     super();
//     this.vantaRef = React.createRef();
//   }

//   componentDidMount() {
//     this.vantaEffect = CLOUDS({
//       el: '#clouds',
//       // el: this.vantaRef.current,
//       // el: document.getElementById("vantajs-bg")
//       // skyColor: 0x68b8d7,
//       // cloudColor: 0xadc1de,
//       // cloudShadowColor: 0x183550,
//       // sunColor: 0xff9919,
//       // sunGlareColor: 0xff6633,
//       // sunlightColor: 0xff9933,
//       mouseControls: true,
//       touchControls: true,
//       gyroControls: false,
//       width: 245.00,
//       height: 435.00,
//       minHeight: 200.00,
//       minWidth: 200.00,
//       speed: 0.3,
//       mouseEase: true,
//     });
//   }

//   componentWillUnmount() {
//     if (this.vantaEffect) this.vantaEffect.destroy();
//   }

//   render() {
//     return (
//       <div ref={this.vantaRef} id="clouds">
//       </div>
//     );
//   }
// }

// export default Clouds;
import React from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import * as p5 from 'p5';

class Clouds extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0xffffff,
      color1: 0x4aa7a7,
      birdSize: 1.20,
      wingSpan: 37.00,
      speedLimit: 4.00,
      separation: 79.00,
      quantity: 2.00,
      backgroundAlpha: 0.96
      // p5: p5,
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  render() {
    return (
      <div ref={this.vantaRef} id="clouds">
      </div>
    );
  }
}

export default Clouds;
