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

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Terminal
          color='#41FF00'
          outputColor='#41FF00'
          backgroundColor='black'
          promptSymbol={'$'}
          hideTopBar={true}
          allowTabs={false}
          style={{ maxHeight: '75%', fontFamily: ["Courier New", "Courier", "monospace"], fontWeight: 'bold', fontSize: ".9em"}}
          commands={{
            'cd': notImplemented,
            'ls': notImplemented,
            'mkdir': notImplemented
          }}
          descriptions={{
          }}
          msg={`
Welcome to Naveed's personal website!

What's your name?

Type some keys and then press enter:
          `}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
