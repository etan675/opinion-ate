import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';
import RestaurantList from '@/components/RestaurantList.vue';

describe('RestaurantList', () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);

    test('loads restaurants on mount', () => {
        const restaurantsModule = {
            namespaced: true,
            actions: {
                load: jest.fn().mockName('load'),
            }
        }

        const store = new Vuex.Store({
            modules: {
                restaurants: restaurantsModule
            }
        })

        mount(RestaurantList, { localVue, store });

        expect(restaurantsModule.actions.load).toHaveBeenCalled();
    })
})