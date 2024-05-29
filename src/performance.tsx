import React, {unstable_Activity as Offscreen, useState} from "react";
import LongList from "./LongList";
import Counter from "./counter";
import { Input } from "antd";
import StyleKeepAlive from "./styleKeepAlive";
import './App.css'


const StyleKeepAliveNoPerf: React.FC<any> = ({children, showComponentName}) => {
    return (
        <>
            {React.Children.map(children, (child) => (
                <div
                    style={{
                        display: child.props.name === showComponentName ? "block" : "none",
                    }}
                >
                    {child}
                </div>
            ))}
        </>
    );
}

const PerformanceTest = () => {
    const [activeComponent, setActiveComponent] = useState('A');
    const [value, setValue] = useState('');

    return (
        <div className="card">
            <p>
                <button
                    onClick={() =>
                        setActiveComponent((val) => (val === "A" ? "B" : "A"))
                    }
                >
                    Toggle Counter
                </button>
            </p>
            <p>
                受控组件:
                <Input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </p>
            <div>
                {/* 1. 直接使用display进行keep-alive */}
                <StyleKeepAlive showComponentName={activeComponent}>
                    <Counter name="A" />
                    <LongList value={value} name="B" />
                </StyleKeepAlive>

                {/* 2. 使用Offscreen */}
                {/* <Offscreen mode={activeComponent === 'A' ? 'visible' : 'hidden'}>
                    <Counter name="A" />
                </Offscreen>
                <Offscreen mode={activeComponent === 'B' ? 'visible' : 'hidden'}>
                    <LongList value={value}/>
                </Offscreen> */}
            </div>
        </div>
    );
}

export default PerformanceTest;