import { GifGrid } from "../../components/GifGrid";
import {shallow} from 'enzyme';
import {useFetchGifs}  from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs")

const category = 'goku';

describe('pruebas sobre <GifGrid />', () => {

  test('Debe construirse correctamente', () => {
    useFetchGifs.mockReturnValue({
        data: [],
        loading: true
    });

    const wrapper = shallow(<GifGrid  category={category}/>);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar items cuando se cargan imagenes', () => {
    const gifs = [{
        id: 'abc',
        url: 'http://localhost',
        title: 'title'
    }]

    useFetchGifs.mockReturnValue({
        data: gifs,
        loading: false
    });

    const wrapper = shallow(<GifGrid  category={category}/>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);


  });
  
  
});
