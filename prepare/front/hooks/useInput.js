import { useState, useCallback } from 'react';

const useInput = (initalValue = null) => {
    const [value, setValue] = useState('');
    
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, [])

    return [value, handler]
}

export default useInput;