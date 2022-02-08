import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {
  
    test('debe traer 10 elementos', async () => {
        const gifs = await getGifs('goku');

        expect(gifs.length).toBe(10);
    });

    test('No debe traer elementos con argumento vacio', async () => {
      const gifs = await getGifs('');

      expect(gifs.length).toBe(0);
    });
    
    
});
