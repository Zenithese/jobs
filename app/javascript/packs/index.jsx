// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
import configureStore from '../store/store'
import Root from '../components/root';

// const Root = props => (
//   <main>Hello!</main>
// )

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.getProps = store.getProps;
  ReactDOM.render(
    <Root store={store} />,
    document.body.appendChild(document.createElement('div')),
  )
})

// document.addEventListener('DomContentLoaded', () => {
//   let store;
//   if (window.currentUser) {
//     const preloadedState = {
//       session: { id: window.currentUser.id },
//       entities: {
//         users: { [window.currentUser.id]: window.currentUser }
//       }
//     };
//     store = configureStore(preloadedState);
//     delete window.currentUser;
//   } else {
//     store = configureStore();
//   }
//   window.getState = store.getState;
//   window.dispatch = store.dispatch;
//   window.getProps = store.getProps;
//   const root = document.getElementById('root');
//   ReactDom.render(<Root store={store} />, root)
// })


// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }