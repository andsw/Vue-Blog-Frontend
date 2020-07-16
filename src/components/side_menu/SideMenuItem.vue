<template>
  <li :class="{active: targetItem===path}"><router-link :to="path"> <i :class="iconName"></i>{{name}} </router-link></li>
</template>

<script>
    export default {
        name: "SideMenuItem",
        props: {
            name: String,
            path: String,
            iconName: String
        },
        computed: {
            targetItem() {
                return this.$route.path;
            }
        }
    }
</script>

<style scoped>

</style>