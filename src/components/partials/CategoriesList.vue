<template>
    <v-container grid-list-xl fluid fill-height>
        <v-layout row wrap>
            <v-flex xs6 sm6 md1 xl1 v-for="category in categories" :key="category.tag" >
                <v-card class="elevation-1 pa-2 text-xs-center" :to="category.url">
                    <h1>{{ category.emoji }}</h1>
                    <h5>{{ category.title }}</h5>
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
</style>
