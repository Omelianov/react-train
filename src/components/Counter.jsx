import React, { useState, useEffect } from 'react';

const Example = () => {
    const [count, setCount] = useState(0);
    

    // По принципу componentDidMount и componentDidUpdate:
    useEffect(() => {
        // Обновляем заголовок документа, используя API браузера
        document.title = `Вы нажали ${count} раз`;
    });

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня +1
            </button>      
            <button onClick={() => setCount(count - 1)}>
                Нажми на меня -1
            </button>
            <button onClick={() => setCount(0)}>
                Нажми на меня, чтобы обнулить
            </button>
        </div>
    );
};

export default Example;