


import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./test-event'));

export function TestSuspense() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>
        </div>
    );
}