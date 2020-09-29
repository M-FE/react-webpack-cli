import React, { Suspense, lazy } from 'react';
import _ from 'lodash';

const AsyncComponent = lazy(() => import('./AsyncComponent'));

import './index.scss';

const App = () => {
    const name = _.join(['Hello', 'World', ' ']);

    return (<div>
        { name }
        <Suspense fallback={<div>Loading...</div>}>
            <AsyncComponent />
        </Suspense>
    </div>);
}

export default App;
