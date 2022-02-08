import { GifExpertApp } from "../GifExpertApp";
import {shallow} from 'enzyme';
;

describe('Pruebas sobre <GifExpertApp />', () => {
  
    test('Debe cargar el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['goku', 'vegeta'];
        const wrapper = shallow(< GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});
