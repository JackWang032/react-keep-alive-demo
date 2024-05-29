import  { Suspense, useRef } from 'react';

const Wrapper = ({children, active}: any) => {
    const resolveRef = useRef<any>();

    if (active) {
        resolveRef.current && resolveRef.current();
        resolveRef.current = null;
    }

    if (!active) {
        throw new Promise((resolve) => {
           resolveRef.current = resolve;
        })
    }

    return children;
}

const OffscreenKeepAlive = ({children, active}: any) => {
    return <Suspense>
        <Wrapper active={active}>
            {children}
        </Wrapper>
    </Suspense>
}

export default OffscreenKeepAlive;