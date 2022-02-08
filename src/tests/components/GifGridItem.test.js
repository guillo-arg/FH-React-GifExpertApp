import {shallow} from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe('Test sobre el componentes <GifGridItem />', () => {
  
    const title = 'Un título';
    const url = 'http://localhost';
    const wrapper  = shallow(<GifGridItem title={title} url={url} />);

    test('Debe mostrar el componente correctamente', () => {
      
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });
    
    test('Debe tener la imagen igual al url y alt de los props', () => {
       const img = wrapper.find('img');
    //    console.log(img.props().src);
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('el div debe tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        const clase = 'animate__fadeIn';

        // console.log(div.prop('className'));
        expect(div.prop('className').includes(clase)).toBe(true);


    });
    
    
    
});
