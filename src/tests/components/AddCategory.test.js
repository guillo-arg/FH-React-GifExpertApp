import { AddCategory } from "../../components/AddCategory";
import {shallow} from 'enzyme';

describe('pruebas sobre <AddCategory />', () => {
    const setCategories =jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>);

    });

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
      const input = wrapper.find('input');
      const value = 'Hola mundo';
      input.simulate('change', {
          target : {
              value: value
          }
      });
    });

    
    
    test('No debe postear la información', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {
            target : {
                value: value
            }
        });

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');


    });
    
    
});
