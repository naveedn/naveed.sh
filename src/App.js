import React, { Component } from 'react';
import './App.css';
import Terminal from 'terminal-in-react';
import Emoji from 'a11y-react-emoji'
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin';


const FileSystemPlugin = pseudoFileSystemPlugin();


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
    <p>  Made with
            {' '}
            <Emoji symbol="❤️" label="love" />
            {' '}
            by Naveed Nadjmabadi</p>
    <p>Github: <a href="https://github.com/naveedn">naveedn</a> | Twitter: <a
        href="https://twitter.com/nudgemybody">@nudgemybody</a></p>
  </footer>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Banner />
        </header>
        <Terminal
          plugins={[FileSystemPlugin]}
          color='#41FF00'
          backgroundColor='black'
          barColor='black'
          hideTopBar={true}
          allowTabs={false}
          style={{ fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New"', fontWeight: "bold", fontSize: "1em", textAlign: "left", marginLeft: "2em" }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
        <Footer />
      </div>
    );
  }
}

export default App;
