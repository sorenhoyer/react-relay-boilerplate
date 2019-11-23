import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root/Root';

const render = (rootNode: HTMLElement | Element): void => {
  ReactDOM.createRoot(rootNode).render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>,
  );
};

const RootNode = document.getElementById('root');

if (RootNode) render(RootNode);

if (module?.hot) {
  module.hot.accept(() => {
    if (RootNode) {
      ReactDOM.unmountComponentAtNode(RootNode);
      render(RootNode);
    }
  });
}
