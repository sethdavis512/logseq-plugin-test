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
    logseq.setMainUIInlineStyle({
        zIndex: 11
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
