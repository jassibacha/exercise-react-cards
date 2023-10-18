import { useState } from 'react';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

function useAxios(url) {
    const [items, setItems] = useState([]);

    const addItem = async () => {
        const response = await axios.get(url);
        setItems((items) => [...items, { ...response.data, id: uuid() }]);
    };

    return [items, addItem];
}

export default useAxios;
