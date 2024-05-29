import React, { useRef } from 'react';

const ShouldRender = ({ children, visible }: any) => {
    // 是否已经挂载
    const renderedRef = useRef(false);
    // 缓存子组件，避免不必要的渲染
    const childRef = useRef();
    
    if (visible) {
        renderedRef.current = true;
        childRef.current = children();
    } 

    if (!renderedRef.current) return null;
    
    return (
        <div
            style={{
                display: visible ? "block" : "none",
            }}
        >
            {childRef.current}
        </div>
    );
};

const StyleKeepAlive: React.FC<any> = ({children, showComponentName}) => {
    return (
        <>
            {React.Children.map(children, (child) => {
                const visible = child.props.name === showComponentName;
                return (
                    <ShouldRender visible={visible}>
                       {() => child}
                    </ShouldRender>
                );
            })}
        </>
    );
}

export default StyleKeepAlive;