import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

new Promise((resolve) => {resolve(1)});

function sleep(timer) {
    return new Promise(resolve => {
        setTimeout(resolve, timer);
    });
}

(async () => {
    await sleep(3000);
    console.log('Sleep 3000ms');
})();

ReactDOM.render(<App />, document.getElementById('app'));
