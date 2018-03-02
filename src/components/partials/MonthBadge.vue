<template>
    <v-container grid-list-xl text-xs-left fluid fill-height>
        <v-layout row wrap>
            <v-flex xs12 sm12 md2 xl2 v-for="date in dates" :key="date.id" >
                <v-card class="elevation-1" :to="`/when/${date.year}/${date.month}`">
                    <h2>{{ date.month.toUpperCase() }}</h2>
                    <h4>{{ date.year }}</h4>
                    <div class="mt-2 mb-2">
                        <h1>{{ date.conferences }}</h1>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
  name: 'month-badge',
  props: {
    dates: Array
  }
}
</script>

<style scoped>
    h1 { text-align: center; }
    h2 { text-align: center; }
    h4 { text-align: center; }
</style>
