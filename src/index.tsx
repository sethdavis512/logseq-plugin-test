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

    const openIconName = 'shauns-logseq-open-plugin';

    logseq.App.registerUIItem('toolbar', {
        key: openIconName,
        template: `
            <div data-on-click="show" class="${openIconName}">⚙️</div>
        `
    });
};

logseq.ready(main).catch(console.error);
