import React, {useState} from 'react';
import "../../styles/count.scss";

export default function ({fullName}: {fullName: String}) {
    const [c, setC] = useState<number>(0);
    return (
        <>
            <h1>Name: {fullName}</h1>
            <p>{c}</p>
            <button onClick={() => setC(curr => curr + 1)}>Add One</button>
        </>
    );
}

