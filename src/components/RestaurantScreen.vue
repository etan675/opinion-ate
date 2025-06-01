<template>
    <div>
        <h1>Restaurants</h1>
        <RestaurantList />
    </div>
</template>

<script>
import RestaurantList from '@/components/RestaurantList.vue';
export default {
    name: 'RestaurantScreen',
    components: {
        RestaurantList
    }
}
</script>