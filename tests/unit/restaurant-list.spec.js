import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';
import RestaurantList from '@/components/RestaurantList.vue';

const findElByTestId = (wrapper, testId, index) => {
    return wrapper.findAll(`[data-testid="${testId}"]`).at(index);
}

describe('RestaurantList', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    const records = [
        { id: 1, name: 'Sushi Place' },
        { id: 2, name: 'Pizza Place' }
    ];

    let restaurantsModule;
    let wrapper;

    beforeEach(() => {
        restaurantsModule = {
            namespaced: true,
            state: { records },
            actions: {
                load: jest.fn().mockName('load'),
            }
        }

        const store = new Vuex.Store({
            modules: {
                restaurants: restaurantsModule
            }
        })

        wrapper = mount(RestaurantList, { localVue, store });
    })

    test('loads restaurants on mount', () => {
        expect(restaurantsModule.actions.load).toHaveBeenCalled();
    })

    test('displays the restaurants', () => {
        expect(findElByTestId(wrapper, 'restaurant', 0).text()).toBe('Sushi Place');
        expect(findElByTestId(wrapper, 'restaurant', 1).text()).toBe('Pizza Place');
    })
})