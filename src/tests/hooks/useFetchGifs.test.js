import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';
;

describe('Pruebas sobre useFetchGifs', () => {
    test('debe retornar el estado inicial', async () => {


        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('goku'));
        const {data, loading} = result.current;
        await waitForNextUpdate({ timeout: 2500 });
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar el arreglo con imagenes y loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('goku'));
        await waitForNextUpdate({ timeout: 2500 });
        const {data, loading} = result.current;
        
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
    
});
