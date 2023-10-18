import { useState } from 'react';
import axios from 'axios';
import { v1 as uuid } from 'uuid';

function useAxios(url) {
    const [data, setData] = useState([]);

    const addData = async (endpoint = '') => {
        const response = await axios.get(`${url}${endpoint}`);
        setData((oldData) => [...oldData, { ...response.data, id: uuid() }]);
    };

    return [data, addData];
}

export default useAxios;
