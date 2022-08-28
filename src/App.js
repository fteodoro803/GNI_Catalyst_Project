import logo from './logo.png';
import './App.css';

function App() {
  function test() {
    /*eslint-disable no-undef*/

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const activeTabId = tabs[0].id
      chrome.scripting.executeScript({
        target: {tabId: activeTabId},
        function: () => {
          //document.body.innerHTML = "CHANGETEXT"
          let numTags = document.getElementsByTagName('p');
          //alert(numTags.length);
          for(let i = 0;i < numTags.length; i++)
          {
            //ShowResults(numTags[i].id);
            //document.setAttribute('font', '')
            numTags[i].style.fontFamily = "Arial";
          }
        },
      });
    })

    function ShowResults(value) {
      alert(value);
    }
  }

  return(
      <div className="App">

        <button onClick={test}>Click</button>
      </div>
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Make the way you want to read, yours
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Started
        </a>
      </header>
    </div>
  );
}

export default App;
