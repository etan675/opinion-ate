<template>
    <div>
        <h1>Restaurant List</h1>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'RestaurantList',
    mounted() {
        this.loadRestaurants();
    },
    methods: mapActions({
        loadRestaurants: 'restaurants/load'
    })    
}
</script>