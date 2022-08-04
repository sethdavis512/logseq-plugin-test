import React from 'react';
import ReactDOM from 'react-dom';
import '@logseq/libs';
import { App } from './App';
import Toolbar from './components/Toolbar';

const TOOLBAR_ID = "text-style-toolbar"
let toolbar
let textarea

const main = () => {
    // Reset values.
    toolbar = null
    textarea = null

    const app = document.getElementById('app');
    ReactDOM.render(<App />, app);

    const createModel = () => ({
        show() {
            logseq.showMainUI();
        }
    });

    logseq.provideModel(createModel());
    logseq.provideStyle(`
    :root {
        /*
        –––––––––––––––––––––––––––––––
        | COLORS |
        –––––––––––––––––––––––––––––––
        */
        --color-blue-5: #E8F5FF;
        --color-blue-10: #CFE8FF;
        --color-blue-20: #A1D3FF;
        --color-blue-30: #58B4FF;
        --color-blue-40: #2491FF;
        --color-blue-50: #0076DA;
        --color-blue-60: #005EA2;
        --color-blue-70: #0B4778;
        --color-blue-80: #112F4E;
        
        --color-gray-0: #FFFFFF;
        --color-gray-1: #FBFCFD;
        --color-gray-2: #F7F9FA;
        --color-gray-3: #F5F6F7;
        --color-gray-4: #F1F3F6;
        --color-gray-5: #EDEFF0;
        --color-gray-10: #DFE1E2;
        --color-gray-20: #C6CACE;
        --color-gray-30: #A9AEB1;
        --color-gray-40: #8D9297;
        --color-gray-50: #71767A;
        --color-gray-60: #565C65;
        --color-gray-70: #3D4551;
        --color-gray-80: #2D2E2F;
        --color-gray-90: #1C1D1F;
        --color-gray-100: #000000;
        
        --color-mint-5: #D5FBF3;
        --color-mint-10: #7EFBE1;
        --color-mint-20: #29E1CB;
        --color-mint-30: #1DC2AE;
        --color-mint-40: #00A398;
        --color-mint-50: #008480;
        --color-mint-60: #0F6460;
        --color-mint-70: #0B4B3F;
        --color-mint-80: #123131;
        
        --color-red-5: #FFF3F2;
        --color-red-10: #FDE0DB;
        --color-red-20: #FDB8AE;
        --color-red-30: #FF8D7B;
        --color-red-40: #FB5A47;
        --color-red-50: #E52207;
        --color-red-60: #B50909;
        --color-red-70: #8B0A03;
        --color-red-80: #5C1111;
        
        /* Highlight colors */
        --color-highlight-light-gray: #F0F0F0;
        --color-highlight-light-orange: #FFF5EE;
        --color-highlight-light-red: #FFF2F5;
        --color-highlight-light-yellow: #FFF5C2;
        --color-highlight-light-green: #DDF9C7;
        --color-highlight-light-mint: #C9FBEB;
        --color-highlight-light-cyan: #E5FAFF;
        --color-highlight-light-blue: #E8F5FF;
        --color-highlight-light-indigo: #F5F2FF;
        --color-highlight-light-violet: #FEF2FF;
        
        --color-highlight-dark-gray: #454545;
        --color-highlight-dark-orange: #63340F;
        --color-highlight-dark-red: #822133;
        --color-highlight-dark-yellow: #5C4809;
        --color-highlight-dark-green: #2F4A0B;
        --color-highlight-dark-mint: #0C4E29;
        --color-highlight-dark-cyan: #0E4F5C;
        --color-highlight-dark-blue: #0B4778;
        --color-highlight-dark-indigo: #3D2C9D;
        --color-highlight-dark-violet: #711E6C;
        
        /* Text colors */
        --color-text-light-gray: #919191;
        --color-text-light-orange: #EF5E25;
        --color-text-light-red: #F45D79;
        --color-text-light-yellow: #B38C00;
        --color-text-light-green: #719F2A;
        --color-text-light-mint: #00A871;
        --color-text-light-cyan: #009EC1;
        --color-text-light-blue: #2491FF;
        --color-text-light-indigo: #967EFB;
        --color-text-light-violet: #D85BEF;
        
        --color-text-dark-gray: #ADADAD;
        --color-text-dark-orange: #F39268;
        --color-text-dark-red: #FD8BA0;
        --color-text-dark-yellow: #DDAA01;
        --color-text-dark-green: #7FB135;
        --color-text-dark-mint: #04C585;
        --color-text-dark-cyan: #00BDE3;
        --color-text-dark-blue: #58B4FF;
        --color-text-dark-indigo: #B69FFF;
        --color-text-dark-violet: #EE83FF;
        
        /*
        –––––––––––––––––––––––––––––––
        | FONTS |
        –––––––––––––––––––––––––––––––
        */
        --font-family-default: "Source Sans Pro", "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
        --font-size-1: 0.625rem;  // 10px
        --font-size-2: 0.75rem;   // 12px
        --font-size-3: 1rem;      // 16px
        --font-size-4: 1.25rem;   // 20px
        --font-size-5: 1.5rem;    // 24px
        --font-size-6: 2rem;      // 32px
        --font-size-7: 2.5rem;    // 40px
        --font-size-8: 3rem;      // 48px
        
        --font-weight-normal: 400;
        --font-weight-medium: 600;
        --font-weight-bold: 700;
        
        --font-line-height-1: 112.5%;
        --font-line-height-2: 125%;
        --font-line-height-3: 133.4%;
        --font-line-height-4: 140%;
        --font-line-height-5: 150%;
        --font-line-height-6: 166.7%;
        
        /*
        –––––––––––––––––––––––––––––––
        | SPACE |
        –––––––––––––––––––––––––––––––
        */
        --space-0: 0rem;      // 0px
        --space-1: 0.0625rem; // 1px
        --space-2: 0.125rem;  // 2px
        --space-3: 0.25rem;   // 4px
        --space-4: 0.5rem;    // 8px
        --space-5: 0.75rem;   // 12px
        --space-6: 1rem;      // 16px
        --space-7: 1.25rem;   // 20px
        --space-8: 1.5rem;    // 24px
        --space-9: 2rem;      // 32px
        --space-10: 2.5rem;   // 40px
        --space-11: 3rem;     // 48px
        --space-12: 4rem;     // 64px
        --space-13: 4.5rem;   // 72px
        --space-14: 5rem;     // 80px
        
        /*
        –––––––––––––––––––––––––––––––
        | RADII |
        –––––––––––––––––––––––––––––––
        */
        --radius-1: 0rem;     // 0px
        --radius-2: 0.125rem; // 2px
        --radius-3: 0.25rem;  // 4px
        --radius-4: 0.5rem;   // 8px
        --radius-5: 1rem;     // 16px
        --radius-full: 100%;
    }
    html[data-theme="light"] {
        /* TOOLBAR STYLES */
        --text-style-toolbar-background: var(--color-gray-5);
        --text-style-button-background: var(--color-gray-5);
        --text-style-button-icon-selected: var(--color-gray-5);

        --text-style-toolbar-shadow: 0 1px 3px var(--color-gray-20);

        --text-style-button-icon: var(--color-gray-80);
        --text-style-button-color: var(--color-gray-80);

        --text-style-button-background-hover: var(--color-gray-20);
        --text-style-divider-background: var(--color-gray-20);

        --text-style-button-background-selected: var(--color-gray-70);
        --text-style-button-background-selected-hover: var(--color-gray-100);

        /* TEXT COLOR + HIGHLIGHT */
        --color-text-gray: #919191;
        --color-text-orange: #EF5E25;
        --color-text-red: #F45D79;
        --color-text-yellow: #B38C00;
        --color-text-green: #719F2A;
        --color-text-mint: #00A871;
        --color-text-cyan: #009EC1;
        --color-text-blue: #2491FF;
        --color-text-indigo: #967EFB;
        --color-text-violet: #D85BEF;

        --color-highlight-gray: #F0F0F0;
        --color-highlight-orange: #FFF5EE;
        --color-highlight-red: #FFF2F5;
        --color-highlight-yellow: #FFF5C2;
        --color-highlight-green: #DDF9C7;
        --color-highlight-mint: #C9FBEB;
        --color-highlight-cyan: #E5FAFF;
        --color-highlight-blue: #E8F5FF;
        --color-highlight-indigo: #F5F2FF;
        --color-highlight-violet: #FEF2FF;

    }
    html[data-theme="dark"] {
        /* TOOLBAR STYLES */
        --text-style-toolbar-background: var(--color-gray-70);
        --text-style-button-background: var(--color-gray-70);
        --text-style-button-icon-selected: var(--color-gray-80);

        --text-style-toolbar-shadow: 0 1px 3px var(--color-gray-100);
        
        --text-style-button-icon: var(--color-gray-5);
        --text-style-button-color: var(--color-gray-5);

        --text-style-button-background-hover: var(--color-gray-100);
        --text-style-divider-background: var(--color-gray-60);

        --text-style-button-background-selected: var(--color-gray-2);
        --text-style-button-background-selected-hover: var(--color-gray-20);   

        /* TEXT COLOR + HIGHLIGHT */
        --color-text-gray: #ADADAD;
        --color-text-orange: #F39268;
        --color-text-red: #FD8BA0;
        --color-text-yellow: #DDAA01;
        --color-text-green: #7FB135;
        --color-text-mint: #04C585;
        --color-text-cyan: #00BDE3;
        --color-text-blue: #58B4FF;
        --color-text-indigo: #B69FFF;
        --color-text-violet: #EE83FF;
        
        --color-highlight-gray: #454545;
        --color-highlight-orange: #63340F;
        --color-highlight-red: #822133;
        --color-highlight-yellow: #5C4809;
        --color-highlight-green: #2F4A0B;
        --color-highlight-mint: #0C4E29;
        --color-highlight-cyan: #0E4F5C;
        --color-highlight-blue: #0B4778;
        --color-highlight-indigo: #3D2C9D;
        --color-highlight-violet: #711E6C;
    }
    .draggable-handle,
    .resizable-handle {
        display: none;
        touch-action: none;
    }
    #text-style-toolbar {
        position: absolute;
        top: 0;
        left: 0;
        z-index: var(--ls-z-index-level-2);
        transition: opacity 100ms ease-in-out;
        background-color: var(--text-style-toolbar-background);
        border-radius: var(--radius-4);
        display: flex;
        gap: var(--space-3);
        align-items: center;
        width: auto;
        height: 40px;
        padding: var(--space-3);
        box-shadow: var(--text-style-toolbar-shadow);
    }
    .text-style-icon {
        width: var(--space-8);
        height: var(--space-8);
        fill: var(--text-style-button-icon);
    }
    .text-style-dropdown {
        display: flex;
        gap: var(--space-3);
        width: auto;
        height: var(--space-9);
        padding: var(--space-3) var(--space-5);
        border-radius: var(--radius-3);
        cursor: pointer;
        background: var(--text-style-button-background);
        white-space: nowrap;
        color: var(--text-style-button-color);
    }
    
    .text-style-button {
        width: var(--space-9);
        height: var(--space-9);
        padding: var(--space-3);
        border-radius: var(--radius-3);
        cursor: pointer;
        background: var(--text-style-button-background);
    }
    .text-style-button:hover,
    .text-style-dropdown:hover {
        background: var(--text-style-button-background-hover);
    }
    .text-style-button.selected {
        background: var(--text-style-button-background-selected);
    }
    .text-style-button.selected .text-style-icon {
        fill: var(--text-style-button-icon-selected);
    }
    .text-style-button.selected:hover {
        background: var(--text-style-button-background-selected-hover);
    }
    .text-style-divider {
        width: var(--space-1);
        height: var(--space-8);
        background: var(--text-style-divider-background);
        margin: 0 var(--space-2);
    }

    .text-gray { color: var(--color-text-gray); }
    .text-orange { color: var(--color-text-orange); }
    .text-red { color: var(--color-text-red); }
    .text-yellow { color: var(--color-text-yellow); }
    .text-green { color: var(--color-text-green); }
    .text-mint { color: var(--color-text-mint); }
    .text-cyan { color: var(--color-text-cyan); }
    .text-blue { color: var(--color-text-blue); }
    .text-indigo { color: var(--color-text-indigo); }
    .text-violet { color: var(--color-text-violet); }

    [class^="highlight-"] {
        padding: 0 var(--space-3);
        border-radius: var(--space-3);
    }
    .highlight-gray { background-color: var(--color-highlight-gray); }
    .highlight-orange { background-color: var(--color-highlight-orange); }
    .highlight-red { background-color: var(--color-highlight-red); }
    .highlight-yellow { background-color: var(--color-highlight-yellow); }
    .highlight-green { background-color: var(--color-highlight-green); }
    .highlight-mint { background-color: var(--color-highlight-mint); }
    .highlight-cyan { background-color: var(--color-highlight-cyan); }
    .highlight-blue { background-color: var(--color-highlight-blue); }
    .highlight-indigo { background-color: var(--color-highlight-indigo); }
    .highlight-violet { background-color: var(--color-highlight-violet); }
  `);

    // parent.document.addEventListener("selectionchange", onSelectionChange)

    logseq.Editor.onInputSelectionEnd((event) => {
        const { x, y } = event.point;

        logseq.provideUI({
            key: TOOLBAR_ID,
            template: '<Toolbar />'
        });
    });

    const openIconName = 'text-style-logseq-open-plugin';

    logseq.App.registerUIItem('toolbar', {
        key: openIconName,
        template: `
        <div id="injected-ui-item-open-text-style" title="open-text-style" class="injected-ui-item-toolbar">    
            <div id="logseq-text-style--open-calendar" class="${openIconName}" data-injected-ui="logseq-text-style--open-calendar">
                <a data-rect="" data-on-click="show" class="button">
                    <i class="ti ti-typography"></i> 
                </a>
            </div>
        </div>
        `
    });
};

logseq.ready(main).catch(console.error);
