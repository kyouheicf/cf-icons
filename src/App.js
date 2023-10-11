/* eslint-disable import/first */
import IconComponents from './components/reactsvgs/index.js'
const iconTypes = Object.keys(IconComponents)
console.log(iconTypes)
import './App.css';
import { Icon } from '@cloudflare/component-icon';
//import IconComponent from './components/IconComponent';
import { MemoryRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { StyleProvider, createRenderer } from '@cloudflare/style-provider';

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
  return (
    <ReduxProvider store={store}>
      <MemoryRouter>
        <StyleProvider renderer={renderer}>
          <div className="App">
            <h2>
              The Cloudflare Icons library allows you to quickly create customised
              icons <br />in a number of formats for use both in and outside of stratus
              apps.
            </h2>
            <div class="container" display="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}>
              {
                Object.entries(IconComponents).map(iconType => (
                  <div class="item" key={iconType[0]}>
                    <Icon type={iconType[0]} size={48} color="blue.4" /><br />
                    <code>{iconType[0]} </code>
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
