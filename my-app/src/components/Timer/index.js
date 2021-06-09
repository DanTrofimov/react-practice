import React, { useState } from 'react';

const Timer = () => {

    const [time, setTime] = useState(new Date());

    setInterval(() => setTime(new Date()), 1000);

    return (
        <div>
            <p>{ time.toLocaleTimeString() }</p>
        </div>
    );
};

export default Timer;