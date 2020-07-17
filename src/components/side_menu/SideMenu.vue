<template>
<!--最外面的div不能有v-for-->
  <div>
    <div v-for="(value, key) in menu">
      <span class="heading">{{key}}</span>
      <ul class="list-unstyled">
        <side_menu_item v-for="item in value" key="item.name" :name="item.name" :path="item.path" :icon-name="item.iconName"></side_menu_item>
      </ul>
    </div>
  </div>
</template>

<script>
    import SideMenuItem from "./SideMenuItem";
    export default {
        name: "SideMenu",
        props: {
            menu: {
                type: Object,
                required: true
            }
        },
        components: {
            side_menu_item: SideMenuItem
        }
    }
</script>

<style scoped>

</style>