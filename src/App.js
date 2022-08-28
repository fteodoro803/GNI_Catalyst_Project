import logo from './logo.png';
import './App.css';

function App() {
  function fontScript() {
    //console.log('test')
    var e = document.getElementById("s")

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
            //document.setAttribute('font', '')
            numTags[i].style.fontFamily = "Arial";
          }
          //document.body.innerHTML = test;
        },
      });
    })

    function ShowResults(value) {
      alert(value);
    }
  }

  return(
      <div className="App">
        <select id="fontValue">
          <option value="Arial">Arial</option>
          <option value="Comic-Sans">Comic Sans</option>
          <option value="Verdana">Verdana</option>
          <option value="Calibri">Calibri</option>
        </select>
        <button onClick={fontScript}>Click</button>
      </div>
  )

}

export default App;
