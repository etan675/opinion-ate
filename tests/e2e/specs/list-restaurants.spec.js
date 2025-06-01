describe('listing restaurants', () => {
    it('shows restaurants data from the server', () => {
        const sushiRestaurant = 'Sushi Place';
        const pizzaRestaurant = 'Pizza Place';

        cy.intercept('GET', 'https://api.outsidein.dev/G0kwf5rBPZyWdFrayu8WysChwW35XP7H/restaurants', [
            {
                id: 1,
                name: sushiRestaurant
            },
            {
                id: 2,
                name: pizzaRestaurant
            },
        ]);

        cy.visit('/');
        cy.contains(sushiRestaurant);
        cy.contains(pizzaRestaurant);
    })
})