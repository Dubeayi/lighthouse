import React from 'react';
import CLOUDS from 'vanta/dist/vanta.clouds.min';

class Clouds extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = CLOUDS({
      el: '#clouds',
      // el: this.vantaRef.current,
      // el: document.getElementById("vantajs-bg")
      // skyColor: 0x68b8d7,
      // cloudColor: 0xadc1de,
      // cloudShadowColor: 0x183550,
      // sunColor: 0xff9919,
      // sunGlareColor: 0xff6633,
      // sunlightColor: 0xff9933,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      width: 245.00,
      height: 435.00,
      minHeight: 200.00,
      minWidth: 200.00,
      speed: 0.3,
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
