import { useState } from "react";

const LongList = ({value}: any) => {
    const [list] = useState(new Array(20000).fill(0))

    return (
        <ul style={{ height: 500, overflow: "auto" }}>
            {list.map((_, index) => (
                <li key={index}>{value}: {index}</li>
            ))}
        </ul>
    );
}

export default LongList;