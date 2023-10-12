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
              <div class="item" key="logo">
                <svg
                  width="61"
                  height="29"
                  viewBox="0 0 61 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="61" height="29" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M54.511 16.6872L47.172 12.4789L45.9061 11.9314L15.8832 12.1367V27.3791H54.511V16.6872Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M41.1503 25.9764C41.5096 24.7446 41.3727 23.6156 40.774 22.7773C40.2266 22.0075 39.3028 21.5627 38.1908 21.5114L17.132 21.2377C16.9951 21.2377 16.8754 21.1693 16.807 21.0666C16.7385 20.964 16.7214 20.8271 16.7556 20.6903C16.8241 20.485 17.0293 20.331 17.2517 20.3139L38.4987 20.0402C41.0135 19.9204 43.7506 17.8847 44.7086 15.3871L45.9232 12.2223C45.9745 12.0854 45.9917 11.9485 45.9574 11.8117C44.5889 5.61892 39.0633 1 32.4599 1C26.3698 1 21.2035 4.93463 19.3559 10.3918C18.1584 9.50223 16.6359 9.02323 14.9936 9.17719C12.0683 9.46801 9.72462 11.8117 9.4338 14.737C9.36537 15.4897 9.41669 16.2253 9.58776 16.9096C4.81488 17.0465 1 20.9469 1 25.754C1 26.1816 1.03421 26.6093 1.08554 27.037C1.11975 27.2423 1.29082 27.3962 1.49611 27.3962H40.3634C40.5858 27.3962 40.7911 27.2423 40.8595 27.0199L41.1503 25.9764Z"
                    fill="#F38020"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M47.8563 12.4446C47.6681 12.4446 47.4629 12.4446 47.2747 12.4618C47.1378 12.4618 47.0181 12.5644 46.9668 12.7013L46.1456 15.5581C45.7864 16.7898 45.9232 17.9189 46.522 18.7572C47.0694 19.527 47.9932 19.9718 49.1051 20.0231L53.5872 20.2968C53.7241 20.2968 53.8438 20.3652 53.9122 20.4679C53.9807 20.5705 53.9978 20.7245 53.9636 20.8442C53.8951 21.0495 53.6898 21.2035 53.4675 21.2206L48.7972 21.4943C46.2654 21.614 43.5453 23.6498 42.5873 26.1474L42.2452 27.0199C42.1768 27.191 42.2965 27.362 42.4847 27.362H58.5312C58.7193 27.362 58.8904 27.2423 58.9417 27.0541C59.2154 26.0619 59.3694 25.0184 59.3694 23.9406C59.3694 17.611 54.2031 12.4446 47.8563 12.4446"
                    fill="#FAAE40"
                  />
                </svg><br />
                <code>cloudflare-logo</code></div>
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
