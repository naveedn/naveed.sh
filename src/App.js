import React, { Component } from 'react';
import './App.css';
import Terminal from 'terminal-in-react';
import Emoji from 'a11y-react-emoji'

const Banner = () => (
  <div id="banner">
    <pre className="banner">{`
███╗   ██╗ █████╗ ██╗   ██╗███████╗███████╗██████╗    ███████╗██╗  ██╗
████╗  ██║██╔══██╗██║   ██║██╔════╝██╔════╝██╔══██╗   ██╔════╝██║  ██║
██╔██╗ ██║███████║██║   ██║█████╗  █████╗  ██║  ██║   ███████╗███████║
██║╚██╗██║██╔══██║╚██╗ ██╔╝██╔══╝  ██╔══╝  ██║  ██║   ╚════██║██╔══██║
██║ ╚████║██║  ██║ ╚████╔╝ ███████╗███████╗██████╔╝██╗███████║██║  ██║
╚═╝  ╚═══╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚══════╝╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝
  `}</pre>
</div>)


const Footer = () => (
  <footer>
    <span>Made with <Emoji symbol="❤️" label="love"/> by a guy with too much time on his hands</span>
  </footer>
)

const notImplemented = () => "This function is not yet implemented!"

class IntroScreen extends Component {
  render() {
    console.log('YESSS')
    return (
      <React.Fragment>
        <p>Welcome to Naveed's personal website!</p>
        <p>What's your name?</p>
        <p>Type some keys and then press enter:</p>
      </React.Fragment>
    )
  }
}

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      seenIntro: false
    }
  }

  render() {
    return (
      <div className="App">
        <Banner />
        {this.state.seenIntro ? <IntroScreen /> : <Terminal
          color='#41FF00'
          outputColor='#41FF00'
          backgroundColor='black'
          promptSymbol={'$'}
          hideTopBar={true}
          allowTabs={false}
          style={{ maxHeight: '75%', fontFamily: ["Courier New", "Courier", "monospace"], fontWeight: 'bold', fontSize: ".9em" }}
          commands={{
            'cd': notImplemented,
            'ls': notImplemented,
            'mkdir': notImplemented,
            '*': () => "hello"
          }}
          descriptions={{
          }}
          />
        }
        <Footer />
      </div>
    );
  }
}

export default App;
