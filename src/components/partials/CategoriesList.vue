<template>
    <v-container grid-list-xl fluid fill-height>
        <v-layout row wrap>
            <v-flex xs6 sm6 md1 xl1 v-for="category in categories" :key="category.tag" >
                <v-card class="elevation-1 pt-2 pb-2 text-xs-center" :to="category.url">
                    <h1>{{ category.emoji }}</h1>
                    <h4>{{ category.title }}</h4>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'categories',
  props: {
    categories: Array
  }
}
</script>

<style scoped>
    h1 {
        text-align: center;
    }
    h4 {
        text-align: center;
    }
</style>
