import React from 'react';
import ReactDOM from 'react-dom';
import '@logseq/libs';
import { App } from './App';

const main = () => {
    const app = document.getElementById('app');
    ReactDOM.render(<App />, app);

    const createModel = () => ({
        show() {
            logseq.showMainUI();
        }
    });

    logseq.provideModel(createModel());
    logseq.provideStyle(`
    #sf-wrap-toolbar {
      position: absolute;
      top: 0;
      left: -99999px;
      z-index: var(--ls-z-index-level-2);
      opacity: 0;
      will-change: opacity;
      transition: opacity 100ms ease-in-out;
      background: #333;
      border-radius: 6px;
      color: #fff;
      display: flex;
      align-items: center;
      height: 30px;
      padding: 0 10px;
    }
    .sf-wrap-tb-item {
      width: 30px;
      line-height: 20px;
      height: 30px;
      overflow: hidden;
      text-align: center;
      padding: 5px;
      margin: 0 2px;
      cursor: pointer;
    }
    .sf-wrap-tb-item:hover {
      filter: drop-shadow(0 0 3px #fff);
    }
    .sf-wrap-tb-item img {
      width: 20px;
      height: 20px;
    }
    mark {
      background: #fef3ac !important;
      color: #262626 !important;
    }
    span[data-ref="#red"],
    span[data-ref="#green"],
    span[data-ref="#blue"],
    span[data-ref="$red"],
    span[data-ref="$green"],
    span[data-ref="$blue"] {
      display: none;
    }
    span[data-ref="#red"] + mark {
      background: #ffc7c7 !important;
      color: #262626 !important;
    }
    span[data-ref="#green"] + mark {
      background: #ccffc1 !important;
      color: #262626 !important;
    }
    span[data-ref="#blue"] + mark {
      background: #abdfff !important;
      color: #262626 !important;
    }
    span[data-ref="$red"] + mark {
      color: #f00 !important;
      background: unset !important;
      padding: 0;
      border-radius: 0;
    }
    span[data-ref="$green"] + mark {
      color: #0f0 !important;
      background: unset !important;
      padding: 0;
      border-radius: 0;
    }
    span[data-ref="$blue"] + mark {
      color: #00f !important;
      background: unset !important;
      padding: 0;
      border-radius: 0;
    }
  `);

    logseq.Editor.onInputSelectionEnd((event) => {
        const { x, y } = event.point;

        logseq.provideUI({
            key: 'sf-plugin',
            template: `<div id="sf-wrap-toolbar">Hiyah!</div>`,
            style: {
                left: `${x}px`,
                top: `${y}px`,
                width: '300px',
                backgroundColor: 'green',
                color: 'white',
                zIndex: 100
            },
            attrs: {
                title: 'A Translator'
            }
        });
    });

    const openIconName = 'shauns-logseq-open-plugin';

    logseq.App.registerUIItem('toolbar', {
        key: openIconName,
        template: `
            <div data-on-click="show" class="${openIconName}">⚙️</div>
        `
    });
};

logseq.ready(main).catch(console.error);
