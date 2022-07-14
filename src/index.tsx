import React from 'react';
import ReactDOM from 'react-dom';
import '@logseq/libs';
import { App } from './App';

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

        /*
        –––––––––––––––––––––––––––––––
        | TOOLBAR VARIABLES |
        –––––––––––––––––––––––––––––––
        */
        /* DARK */
        /* 
        --text-style-toolbar-background: var(--color-gray-70);
        --text-style-button-background: var(--color-gray-70);
        --text-style-button-background-hover: var(--color-gray-100);
        --text-style-button-background-selected: var(--color-gray-2);
        --text-style-button-background-selected-hover: var(--color-gray-20);
        */

        /* LIGHT */
        --text-style-toolbar-background: var(--color-gray-5);
        --text-style-button-background: var(--color-gray-5);
        --text-style-button-background-hover: var(--color-gray-20);
        --text-style-button-background-selected: var(--color-gray-70);
        --text-style-button-background-selected-hover: var(--color-gray-100);
        --text-style-divider-background: var(--color-gray-10);
    }
    .draggable-handle,
    .resizable-handle {
        display: none;
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
        width: 400px;
        height: 40px;
        padding: 4px;
        box-shadow: 0 1px 3px var(--color-gray-20);
    }
    .text-style-icon {
        width: var(--space-8);
        height: var(--space-8);
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
    }
    .text-style-button {
        width: var(--space-9);
        height: var(--space-9);
        padding: var(--space-3);
        border-radius: var(--radius-3);
        cursor: pointer;
        background: var(--text-style-button-background);
    }
    .text-style-button:hover {
        background: var(--text-style-button-background-hover);
    }
    .text-style-button.selected {
        background: var(--text-style-button-background-selected);
    }
    .text-style-button.selected:hover {
        background: var(--text-style-button-background-selected-hover);
    }
    .text-style-divider {
        width: var(--space-1);
        height: var(--space-9);
        background: var(--text-style-divider-background);
    }
    .text-style-tb-item:hover {
        filter: drop-shadow(0 0 3px #fff);
    }
    .text-style-tb-item img {
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

    // parent.document.addEventListener("selectionchange", onSelectionChange)

    logseq.Editor.onInputSelectionEnd((event) => {
        const { x, y } = event.point;

        logseq.provideUI({
            key: TOOLBAR_ID,
            template: `
            <div id="${TOOLBAR_ID}">
                <button class="text-style-dropdown">
                    <span>Paragraph</span>
                    <!-- caret-down -->
                    <svg class="text-style-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9.75a.75.75 0 00-.586 1.219l4 5a.75.75 0 001.172 0l4-5A.75.75 0 0016 9.75H8z" fill="#2D2E2F"/>
                    </svg>
                </button>
                <div class="text-style-divider"></div>
                <button class="text-style-button">
                    <!-- bold -->
                    <svg class="text-style-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.45 11.61c.49-.57.8-1.3.8-2.11 0-1.79-1.46-3.25-3.25-3.25H8.5c-.41 0-.75.34-.75.75v10c0 .41.34.75.75.75H13c1.79 0 3.25-1.46 3.25-3.25 0-1.27-.74-2.36-1.8-2.89zM13 15.75H9.75V13H13c.69 0 1.25.62 1.25 1.38 0 .76-.56 1.37-1.25 1.37zM12 11H9.75V8.25H12c.69 0 1.25.62 1.25 1.38 0 .76-.56 1.37-1.25 1.37z" fill="#2D2E2F"/>
                    </svg>
                </button>
                <button class="text-style-button">
                    <!-- italic -->
                    <svg class="text-style-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.014 6.25H16a.75.75 0 010 1.5h-2.385l-1.7 8.5H14a.75.75 0 010 1.5H8a.75.75 0 010-1.5h2.385l1.7-8.5H10a.75.75 0 110-1.5h3.014z" fill="#2D2E2F"/>
                    </svg>
                </button>
                <button class="text-style-button">
                    <!-- underline -->
                    <svg class="text-style-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25 7a.75.75 0 00-1.5 0v5.5A4.254 4.254 0 0012 16.75a4.254 4.254 0 004.25-4.25V7a.75.75 0 00-1.5 0v5.5A2.754 2.754 0 0112 15.25a2.754 2.754 0 01-2.75-2.75V7zM8.5 18.25a.75.75 0 000 1.5h7a.75.75 0 000-1.5h-7z" fill="#2D2E2F"/>
                    </svg>
                </button>
                <button class="text-style-button">
                    <!-- strike -->
                    <svg class="text-style-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7.75c-1.238 0-1.75.76-1.75 1.25 0 .15.015.283.037.402a.75.75 0 01-1.474.276A3.67 3.67 0 018.75 9c0-1.51 1.388-2.75 3.25-2.75.932 0 1.595.316 2.031.664a2.666 2.666 0 01.586.654l.034.06.012.02.004.01.002.003.001.002s0 .002-.661.333l.662-.331a.75.75 0 01-1.335.684l-.002-.003a1.167 1.167 0 00-.24-.26c-.19-.152-.526-.336-1.094-.336zM6.25 12a.75.75 0 01.75-.75h10a.75.75 0 010 1.5h-1.752c.32.47.502 1.047.502 1.75 0 1.023-.518 1.853-1.227 2.404A4.16 4.16 0 0112 17.75c-1.11 0-2.012-.462-2.61-.89a5.639 5.639 0 01-.896-.798 2.976 2.976 0 01-.054-.063l-.017-.02-.005-.006-.002-.003c-.001 0-.002-.002.584-.47l-.586.469a.75.75 0 011.17-.94l.004.005.029.033a4.135 4.135 0 00.644.572c.45.323 1.05.611 1.739.611.593 0 1.178-.2 1.602-.53.416-.323.648-.743.648-1.22 0-.54-.168-.862-.405-1.103-.244-.248-.6-.448-1.073-.647H7a.75.75 0 01-.75-.75z" fill="#2D2E2F"/>
                    </svg>
                </button>
                <button class="text-style-button">
                    <!-- link -->
                    <svg class="text-style-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 9.75A2.246 2.246 0 004.75 12 2.246 2.246 0 007 14.25h3a.75.75 0 010 1.5H7A3.746 3.746 0 013.25 12 3.746 3.746 0 017 8.25h3a.75.75 0 010 1.5H7zM13.25 9a.75.75 0 01.75-.75h3A3.746 3.746 0 0120.75 12 3.746 3.746 0 0117 15.75h-3a.75.75 0 010-1.5h3A2.246 2.246 0 0019.25 12 2.246 2.246 0 0017 9.75h-3a.75.75 0 01-.75-.75z" fill="#2D2E2F"/>
                        <path d="M9 11.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z" fill="#2D2E2F"/>
                    </svg>
                </button>
                <div class="text-style-divider"></div>
                <button class="text-style-dropdown">
                    <!-- character-color -->
                    <svg class="text-style-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.69 16.19-4-9c-.02-.03-.05-.05-.07-.09a.642.642 0 0 0-.1-.13c-.03-.04-.08-.06-.12-.09-.04-.02-.06-.05-.1-.07h-.02a.75.75 0 0 0-.16-.04.502.502 0 0 0-.12-.02c-.04 0-.08.01-.12.02-.06.01-.11.02-.17.04h-.02c-.03.02-.05.05-.08.07a.42.42 0 0 0-.14.09c-.04.04-.06.09-.09.13-.02.04-.05.06-.07.09l-4 9c-.17.38 0 .82.38.99a.763.763 0 0 0 .99-.39l.92-2.04h4.8l.91 2.05c.12.28.4.45.69.45.1 0 .21-.02.3-.06.38-.18.55-.62.39-1Zm-6.42-2.94L12 9.35l1.73 3.9h-3.46Z" fill="#2D2E2F"/>
                    </svg>
                    <!-- caret-down -->
                    <svg class="text-style-icon" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 9.75a.75.75 0 00-.586 1.219l4 5a.75.75 0 001.172 0l4-5A.75.75 0 0016 9.75H8z" fill="#2D2E2F"/>
                    </svg>
                </button>
            </div>
            `,
            style: {
                left: `${x}px`,
                top: `${y}px`,
                width: 'auto',
                height: 'auto',
                zIndex: 100
            }
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
