import useAxios from "axios-hooks";
import { useEffect, useState } from "react";

export function useTestingMock() {
    const [result, setResult] = useState<boolean>(false);
    const [results] = useAxios<boolean>('https://pokeapi.co/api/v2/pokemon/ditto');

    useEffect(() => {
        if (results.loading === false && results.data === true) {
            setResult(true);
        }
    }, [results]);
    

    return result;
}