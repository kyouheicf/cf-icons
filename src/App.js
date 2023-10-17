/* eslint-disable import/first */
import IconComponents from './components/reactsvgs/index.js'
const iconTypes = Object.keys(IconComponents)
console.log(iconTypes)
import './App.css';
import { Icon } from '@cloudflare/component-icon';
import { Logo, LogoInline, LogoCloud } from '@cloudflare/component-logo';
//import IconComponent from './components/IconComponent';
import { MemoryRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { StyleProvider, createRenderer } from '@cloudflare/style-provider';
import * as JSZip from 'jszip';
import { saveAs } from 'file-saver';

const renderer = createRenderer({
  dev: process.env.NODE_ENV === 'development',
  selectorPrefix: 'c_'
});
const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
});
const store = createStore(rootReducer);
/*
<ReduxProvider store={store}>
    <MemoryRouter>
      <StyleProvider renderer={renderer}>
*/
function App() {
  function downloadSvg(svgNode, filename) {
    const svgText = new XMLSerializer().serializeToString(svgNode);
    var svgBlob
    if (filename !== 'logo' && filename !== 'logo-inline' && filename !== 'logo-cloud') {
      console.log(svgText.replace(/^<svg/, '<svg fill="#0051c3"'));
      svgBlob = new Blob([svgText.replace(/^<svg/, '<svg fill="#0051c3"')], { type: 'image/svg+xml' });
    } else {
      console.log(svgText);
      svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
    }
    const svgUrl = URL.createObjectURL(svgBlob);

    const a = document.createElement('a');
    a.href = svgUrl;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(svgUrl);
  }

  function downloadZip() {
    let zip = new JSZip();
    let svgText = '';
    iconTypes.push('logo', 'logo-inline', 'logo-cloud');
    iconTypes.map((iconType) => {
      svgText = new XMLSerializer().serializeToString(document.getElementById(iconType).children[0]);

      if (iconType !== 'logo' && iconType !== 'logo-inline' && iconType !== 'logo-cloud') {
        //console.log(svgText.replace(/^<svg/, '<svg fill="#0051c3"'));
        svgText = svgText.replace(/^<svg/, '<svg fill="#0051c3"');
      } else if (iconType === 'logo' || iconType === 'logo-cloud') {
        //console.log(svgText);
        svgText = new XMLSerializer().serializeToString(document.getElementById(iconType).children[0].children[0]);
      }
      zip.file(`${iconType}.svg`, svgText);
    })

    zip.generateAsync({ type: "blob" })
      .then(function (blob) {
        saveAs(blob, "cf-icons-svg.zip");
      });
  }

  return (
    <ReduxProvider store={store}>
      <MemoryRouter>
        <StyleProvider renderer={renderer}>
          <div className="App">
            <h1>
              The Cloudflare Icons library
            </h1>
            <h3>from <a href="https://www.npmjs.com/package/@cloudflare/component-logo">@cloudflare/component-logo</a>, <a href="https://www.npmjs.com/package/@cloudflare/component-icon">@cloudflare/component-icon</a></h3>
            <h3>GitHub repo: <a href="https://github.com/kyouheicf/cf-icons">kyouheicf/cf-icons</a></h3>
            <h5>SVG files are also accessible through URL like <br /> <a href='https://cf-icons.pages.dev/pages-logo.svg'>https://cf-icons.pages.dev/pages-logo.svg</a></h5>
            <div>
              <button onClick={e => downloadZip()}>
                Save All SVG as ZIP
              </button><br /><br />
            </div>
            <div class="container" display="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
              <div class="item" key='logo'>
                <div id='logo'>
                  <Logo /></div><br />
                <code>logo</code><br />
                <button value='logo' onClick={e => downloadSvg(document.getElementById(e.target.value).children[0], e.target.value)}>
                  Save as SVG
                </button>
              </div>
              <div class="item" key='logo-inline'>
                <div id='logo-inline'>
                  <LogoInline /></div><br />
                <code>logo-inline</code><br />
                <button value='logo-inline' onClick={e => downloadSvg(document.getElementById(e.target.value).children[0], e.target.value)}>
                  Save as SVG
                </button>
              </div>
              <div class="item" key='logo-cloud'>
                <div id='logo-cloud'>
                  <LogoCloud /></div><br />
                <code>logo-cloud</code><br />
                <button value='logo-cloud' onClick={e => downloadSvg(document.getElementById(e.target.value).children[0], e.target.value)}>
                  Save as SVG
                </button>
              </div>
              {
                Object.entries(IconComponents).map(iconType => (
                  <div class="item" key={iconType[0]}>
                    <div id={iconType[0]}><Icon type={iconType[0]} size={48} color="blue.4" /></div><br />
                    <code>{iconType[0]} </code><br />
                    <button value={iconType[0]} onClick={e => downloadSvg(document.getElementById(e.target.value).children[0], e.target.value)}>
                      Save as SVG
                    </button>
                  </div>
                ))
              }
            </div>
          </div>
        </StyleProvider>
      </MemoryRouter >
    </ReduxProvider >
  );
}

export default App;
