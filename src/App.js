import React from 'react'
import { render } from 'react-dom'
import 'aframe'
import { Scene, Entity } from 'aframe-react'

import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'
import img5 from './images/5.jpg'

import arrowObj from './images/obj/arrow.obj'
import arrowMtl from './images/obj/arrow.obj.mtl'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      images: [
        {
          src: img1
        },
        {
          src: img2
        },
        {
          src: img3
        },
        {
          src: img4
        },
        {
          src: img5
        }
      ]
    }

    this._onClickNext = this._onClickNext.bind(this)
  }
  _onClickNext() {
    let state = this.state
    state.active = state.active === state.images.length - 1 ? 0 : state.active + 1
    this.setState(state)
  }
  render() {
    return (
      <div>
        <Scene shadow vr-mode-ui="enabled: true">
          <a-assets>
            <a-asset-item id="arrow-obj" src={arrowObj} />
            <a-asset-item id="arrow-mtl" src={arrowMtl} />
          </a-assets>

          <Entity primitive="a-sky" src={this.state.images[this.state.active].src} />
          
          <a-obj-model src="#arrow-obj" mtl="#arrow-mtl"></a-obj-model>

        </Scene>

        <button
          style={{
            position: 'absolute',
            zIndex: 100,
            top: 0,
            left: 0
          }}
          onClick={this._onClickNext}
        >
          NEXT
        </button>
      </div>
    )
  }
}

export default App
