import { useState, unstable_Activity as Offscreen } from "react";
import Counter from "./counter";
import { Tabs } from "antd";
import StyleKeepAlive from "./styleKeepAlive";
import OffscreenKeepAlive from "./offscreenKeepAlive";
import ActivationKeepAlive, { AliveScope } from './activationKeepAlive';
import MyForm from "./MyForm";
import "./App.css";

const useForceRender = () => {
    const [_, setState] = useState(0);
    return { forceRender: () => setState((state) => state + 1), state: _ };
};

function App() {
    const [counterName, setCounterName] = useState('A');
    const { forceRender, state } = useForceRender();

    return (
        <div className="card">
            <p>
                <button
                    onClick={() =>
                        setCounterName((val) => (val === "A" ? "B" : "A"))
                    }
                >
                    Toggle Counter
                </button>
                <button onClick={() => forceRender()}>
                    Trigger Father Render
                </button>
            </p>

            {/* <Tabs
                items={[
                    {
                        key: "A",
                        label: "A",
                        children: <Counter name="A" />,
                    },
                    {
                        key: "B",
                        label: "B",
                        children: <Counter name="B" />,
                    },
                ]}
            ></Tabs> */}

            {/* <StyleKeepAlive showComponentName={counterName}>
                <Counter name="A" />
                <Counter name="B" />
            </StyleKeepAlive> */}

            {/* <Offscreen mode={counterName === "A" ? "visible" : "hidden"}>
                <Counter name="A" />
            </Offscreen>
            <Offscreen mode={counterName === "B" ? "visible" : "hidden"}>
                <Counter name="B" />
            </Offscreen> */}

            {/* <OffscreenKeepAlive active={counterName === "A"}>
                <Counter name="A" />
            </OffscreenKeepAlive>
            <OffscreenKeepAlive active={counterName === "B"}>
               <Counter name="B" />
            </OffscreenKeepAlive> */}
            {/* <AliveScope>
                {counterName === "A" && (
                    <ActivationKeepAlive id="A">
                        <Counter name="A" />
                    </ActivationKeepAlive>
                )}
                {counterName === "B" && (
                    <ActivationKeepAlive id="B">
                        <Counter name="B" state={state}/>
                    </ActivationKeepAlive>
                )}
            </AliveScope> */}
        </div>
    );
}

export default App;
