describe('listing restaurants', () => {
    it('shows restaurants data from the server', () => {
        const sushiRestaurant = 'Sushi Place';
        const pizzaRestaurant = 'Pizza Place';

        cy.server({ force404: true });

        cy.route({
            method: 'GET',
            url: 'https://api.outsidein.dev/G0kwf5rBPZyWdFrayu8WysChwW35XP7H/restaurants',
            response: [
                {
                    id: 1,
                    name: sushiRestaurant
                },
                {
                    id: 2,
                    name: pizzaRestaurant
                },
            ]
        });

        cy.visit('/');
        cy.contains(sushiRestaurant);
        cy.contains(pizzaRestaurant);
    })
})