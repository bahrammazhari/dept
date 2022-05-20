
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../doc_template/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/layout/content/index.tsx';
reactComponents['Body'] = Component0;

import Component1 from '../src/components/card/index.tsx';
reactComponents['Card'] = Component1;

import Component2 from '../src/layout/content/Clients.tsx';
reactComponents['Clients'] = Component2;

import Component3 from '../src/layout/footer/index.tsx';
reactComponents['Footer'] = Component3;

import Component4 from '../src/layout/header/index.tsx';
reactComponents['Header'] = Component4;

import Component5 from '../src/layout/content/index.tsx';
reactComponents['Landing'] = Component5;

import Component6 from '../src/layout/index.tsx';
reactComponents['Layout'] = Component6;

import Component7 from '../src/layout/header/Menu.tsx';
reactComponents['Menu'] = Component7;

import Component8 from '../src/layout/content/QuestionBox.tsx';
reactComponents['QuestionBox'] = Component8;

import Component9 from '../src/layout/content/Works.tsx';
reactComponents['Works'] = Component9;