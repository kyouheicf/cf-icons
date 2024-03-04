/* eslint-disable import/first */
import IconComponents from './components/reactsvgs/index'
//import type { IconType } from '@cloudflare/component-icon';
const iconTypes: IconType = Object.keys(IconComponents)
console.log(iconTypes)
console.log(typeof (iconTypes))
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

const DocsIcons = [
  '1.1.1.1',
  'ai-gateway',
  'ai',
  'analytics',
  'api-shield',
  'api',
  'apps',
  'argo-smart-routing',
  'automatic-platform-optimization',
  'bots',
  'browser-rendering',
  'byoip',
  'cache',
  'calls',
  'china-network',
  'client-ip-geolocation',
  'cloudflare-for-platforms',
  'cloudflare-one',
  'constellation',
  'd1',
  'data-localization',
  'ddos-protection',
  'dmarc-management',
  'dns',
  'docs-guide',
  'durable-objects',
  'email-routing',
  'email-security',
  'firewall',
  'fundamentals',
  'health-checks',
  'hyperdrive',
  'images',
  'kv',
  'learning-paths',
  'load-balancing',
  'logs',
  'magic-firewall',
  'magic-network-monitoring',
  'magic-transit',
  'magic-wan',
  'network-error-logging',
  'network-interconnect',
  'notifications',
  'page-shield',
  'pages',
  'privacy-gateway',
  'pub-sub',
  'pulumi',
  'queues',
  'r2',
  'radar',
  'railgun',
  'randomness-beacon',
  'reference-architecture',
  'registrar',
  'rules',
  'ruleset-engine',
  'security-center',
  'spectrum',
  'speed',
  'ssl',
  'stream',
  'style-guide',
  'support',
  'tenant',
  'terraform',
  'time-services',
  'turnstile',
  'vectorize',
  'version-management',
  'waf',
  'waiting-room',
  'warp-client',
  'web3',
  'workers-ai',
  'workers',
  'zaraz'
];
console.log(DocsIcons)

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
            <h3>GitHub repo: <a href="https://github.com/kyouheicf/cf-icons">kyouheicf/cf-icons</a></h3>
            <h3>SVG files are also accessible through URL like <br /> <a href='https://cf-icons.pages.dev/pages-logo.svg'>https://cf-icons.pages.dev/pages-logo.svg</a></h3>
            <h5>from <a href="https://www.npmjs.com/package/@cloudflare/component-logo">@cloudflare/component-logo</a>, <a href="https://www.npmjs.com/package/@cloudflare/component-icon">@cloudflare/component-icon</a></h5>
            <div>
              <button onClick={e => downloadZip()}>
                Save All SVG as ZIP
              </button><br /><br />
            </div>
            <div className="container" display="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
              <div className="item" key='logo'>
                <div id='logo'>
                  <Logo /></div><br />
                <code>logo</code><br />
                <button value='logo' onClick={e => downloadSvg(document.getElementById(e.target.value).children[0], e.target.value)}>
                  Save as SVG
                </button>
              </div>
              <div className="item" key='logo-inline'>
                <div id='logo-inline'>
                  <LogoInline /></div><br />
                <code>logo-inline</code><br />
                <button value='logo-inline' onClick={e => downloadSvg(document.getElementById(e.target.value).children[0], e.target.value)}>
                  Save as SVG
                </button>
              </div>
              <div className="item" key='logo-cloud'>
                <div id='logo-cloud'>
                  <LogoCloud /></div><br />
                <code>logo-cloud</code><br />
                <button value='logo-cloud' onClick={e => downloadSvg(document.getElementById(e.target.value).children[0], e.target.value)}>
                  Save as SVG
                </button>
              </div>
              {
                Object.entries(IconComponents).map(iconType => (
                  <div className="item" key={iconType[0]}>
                    <div id={iconType[0]}><Icon type={iconType[0]} size={48} color="blue.4" /></div><br />
                    <code>{iconType[0]} </code><br />
                    <button value={iconType[0]} onClick={e => downloadSvg(document.getElementById(e.target.value).children[0], e.target.value)}>
                      Save as SVG
                    </button>
                  </div>
                ))
              }
            </div>
            <h5>from <a href="https://github.com/cloudflare/cloudflare-docs/tree/production/assets/images/reference-architecture">cloudflare-docs/assets/images/reference-architecture</a></h5>
            <div className="container" display="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
              <div className="item" key='router'>
                <div id='router'>
                  <img src={"https://cf-icons.pages.dev/router.svg"} width='48' height='48' /></div><br />
                <code>router</code><br />
              </div>
              <div className="item" key='server-database'>
                <div id='server-database'>
                  <img src={"https://cf-icons.pages.dev/server-database.svg"} width='48' height='48' /></div><br />
                <code>server-database</code><br />
              </div>
              <div className="item" key='internet-globe'>
                <div id='internet-globe'>
                  <img src={"https://cf-icons.pages.dev/internet-globe.svg"} width='48' height='48' /></div><br />
                <code>internet-globe</code><br />
              </div>
              <div className="item" key='cloud-internet'>
                <div id='cloud-internet'>
                  <img src={"https://cf-icons.pages.dev/cloud-internet.svg"} width='48' height='48' /></div><br />
                <code>cloud-internet</code><br />
              </div>
              <div className="item" key='cloud-multi'>
                <div id='cloud-multi'>
                  <img src={"https://cf-icons.pages.dev/cloud-multi.svg"} width='48' height='48' /></div><br />
                <code>cloud-multi</code><br />
              </div>
              <div className="item" key='office-headquarters'>
                <div id='office-headquarters'>
                  <img src={"https://cf-icons.pages.dev/office-headquarters.svg"} width='48' height='48' /></div><br />
                <code>office-headquarters</code><br />
              </div>
              <div className="item" key='security-fingerprint-privacy'>
                <div id='security-fingerprint-privacy'>
                  <img src={"https://cf-icons.pages.dev/security-fingerprint-privacy.svg"} width='48' height='48' /></div><br />
                <code>security-fingerprint-privacy</code><br />
              </div>
              <div className="item" key='azureAD'>
                <div id='azureAD'>
                  <img src={"https://cf-icons.pages.dev/azureAD.svg"} width='48' height='48' /></div><br />
                <code>azureAD</code><br />
              </div>
              <div className="item" key='AndroidLaptop'>
                <div id='AndroidLaptop'>
                  <img src={"https://cf-icons.pages.dev/AndroidLaptop.svg"} width='48' height='48' /></div><br />
                <code>AndroidLaptop</code><br />
              </div>
              <div className="item" key='AndroidPhone'>
                <div id='AndroidPhone'>
                  <img src={"https://cf-icons.pages.dev/AndroidPhone.svg"} width='48' height='48' /></div><br />
                <code>AndroidPhone</code><br />
              </div>
              <div className="item" key='AndroidTablet'>
                <div id='AndroidTablet'>
                  <img src={"https://cf-icons.pages.dev/AndroidTablet.svg"} width='48' height='48' /></div><br />
                <code>AndroidTablet</code><br />
              </div>
              <div className="item" key='AppleLaptop'>
                <div id='AppleLaptop'>
                  <img src={"https://cf-icons.pages.dev/AppleLaptop.svg"} width='48' height='48' /></div><br />
                <code>AppleLaptop</code><br />
              </div>
              <div className="item" key='ApplePhone'>
                <div id='ApplePhone'>
                  <img src={"https://cf-icons.pages.dev/ApplePhone.svg"} width='48' height='48' /></div><br />
                <code>ApplePhone</code><br />
              </div>
              <div className="item" key='AppleTablet'>
                <div id='AppleTablet'>
                  <img src={"https://cf-icons.pages.dev/AppleTablet.svg"} width='48' height='48' /></div><br />
                <code>AppleTablet</code><br />
              </div>
              <div className="item" key='ChromeLaptop'>
                <div id='ChromeLaptop'>
                  <img src={"https://cf-icons.pages.dev/ChromeLaptop.svg"} width='48' height='48' /></div><br />
                <code>ChromeLaptop</code><br />
              </div>
              <div className="item" key='ChromePhone'>
                <div id='ChromePhone'>
                  <img src={"https://cf-icons.pages.dev/ChromePhone.svg"} width='48' height='48' /></div><br />
                <code>ChromePhone</code><br />
              </div>
              <div className="item" key='ChromeTablet'>
                <div id='ChromeTablet'>
                  <img src={"https://cf-icons.pages.dev/ChromeTablet.svg"} width='48' height='48' /></div><br />
                <code>ChromeTablet</code><br />
              </div>
              <div className="item" key='Cloudflared'>
                <div id='Cloudflared'>
                  <img src={"https://cf-icons.pages.dev/Cloudflared.svg"} width='48' height='48' /></div><br />
                <code>Cloudflared</code><br />
              </div>
              <div className="item" key='Google'>
                <div id='Google'>
                  <img src={"https://cf-icons.pages.dev/Google.svg"} width='48' height='48' /></div><br />
                <code>Google</code><br />
              </div>
              <div className="item" key='Onetimepin'>
                <div id='Onetimepin'>
                  <img src={"https://cf-icons.pages.dev/Onetimepin.svg"} width='48' height='48' /></div><br />
                <code>Onetimepin</code><br />
              </div>
              <div className="item" key='WarpConnector'>
                <div id='WarpConnector'>
                  <img src={"https://cf-icons.pages.dev/WarpConnector.svg"} width='48' height='48' /></div><br />
                <code>WarpConnector</code><br />
              </div>
              <div className="item" key='WindowsLaptop'>
                <div id='WindowsLaptop'>
                  <img src={"https://cf-icons.pages.dev/WindowsLaptop.svg"} width='48' height='48' /></div><br />
                <code>WindowsLaptop</code><br />
              </div>
              <div className="item" key='WindowsPhone'>
                <div id='WindowsPhone'>
                  <img src={"https://cf-icons.pages.dev/WindowsPhone.svg"} width='48' height='48' /></div><br />
                <code>WindowsPhone</code><br />
              </div>
              <div className="item" key='WindowsTablet'>
                <div id='WindowsTablet'>
                  <img src={"https://cf-icons.pages.dev/WindowsTablet.svg"} width='48' height='48' /></div><br />
                <code>WindowsTablet</code><br />
              </div>
              <div className="item" key='ZeroTrustLogo'>
                <div id='ZeroTrustLogo'>
                  <img src={"https://cf-icons.pages.dev/ZeroTrustLogo.svg"} width='48' height='48' /></div><br />
                <code>ZeroTrustLogo</code><br />
              </div>
            </div>

            <h5>from <a href="https://github.com/cloudflare/cloudflare-docs/tree/production/data">cloudflare-docs/data/product.yml</a></h5>
            <div className="container" display="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
              {
                DocsIcons.map(docsIcon => (
                  <div className="item" key={docsIcon} >
                    <div id={docsIcon}><img src={"https://cf-icons.pages.dev/" + docsIcon + ".svg"} width='48' height='48' /></div><br />
                    <code>{docsIcon} </code><br />
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
