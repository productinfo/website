<template>
    <v-container grid-list-xl fluid fill-height>
        <v-layout row wrap>
            <v-flex xs6 sm6 md2 xl2 v-for="category in categories" :key="category.tag" >
                <v-card class="elevation-1 pa-2 text-xs-center" :to="category.url">
                    <h1>{{ category.emoji }}</h1>
                    <h3>{{ category.title }}</h3>
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
    h1 { font-size: 80px; }
</style>
