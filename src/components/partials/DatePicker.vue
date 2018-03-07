<template>
    <v-layout row wrap class="mt-4">
        <v-flex xs12 sm12>
            <v-card>
                <v-form ref="form">

                <v-card-text>
                    <v-menu
                            ref="startmenu"
                            lazy
                            :close-on-content-click="false"
                            v-model="startmenu"
                            transition="scale-transition"
                            offset-y
                            full-width
                            :nudge-right="40"
                            min-width="290px"
                            :return-value.sync="startdate"
                    >
                        <v-text-field
                                slot="activator"
                                label="Start Date"
                                v-model="startdate"
                                prepend-icon="event"
                                readonly
                        ></v-text-field>
                        <v-date-picker v-model="startdate" no-title scrollable color="deep-purple">
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="startmenu = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.startmenu.save(startdate)">OK</v-btn>
                        </v-date-picker>
                    </v-menu>

                    <v-menu
                            ref="menuend"
                            lazy
                            :close-on-content-click="false"
                            v-model="menuend"
                            transition="scale-transition"
                            offset-y
                            full-width
                            :nudge-right="40"
                            min-width="290px"
                            :return-value.sync="enddate"
                    >
                        <v-text-field
                                slot="activator"
                                label="End Date"
                                v-model="enddate"
                                prepend-icon="event"
                                readonly
                        ></v-text-field>
                        <v-date-picker v-model="enddate" no-title scrollable color="deep-purple" :picker-date="startdate">
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menuend = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.menuend.save(enddate)">OK</v-btn>
                        </v-date-picker>
                    </v-menu>

                    <v-select
                            color="deep-purple"
                            label="Country"
                            v-model="country"
                            :items="$store.state.countries"
                            autocomplete
                    ></v-select>

                    <v-btn block dark color="deep-purple" @click="submitForm">Search</v-btn>
                </v-card-text>
                </v-form>
            </v-card>

        </v-flex>

    </v-layout>
</template>

<script>
export default {
  name: 'DatePicker',
  data () {
    return {
      startdate: null,
      enddate: null,
      startmenu: false,
      endmenu: false,
      country: '',
      introMsg: 'Awesome Conference is a web and mobile application built to help developers, markerters, designers in finding the best conference around the world in an unique place.',
      mobileMsg: '👇 Stay always updated using our 📱 application 👇'
    }
  },
  methods: {
    submitForm () {
      if (this.startdate === null) {
        this.startdate = 'none'
      }
      if (this.enddate === null) {
        this.enddate = 'none'
      }
      if (this.country === '') {
        this.country = 'none'
      }
      this.$router.push('/search/' + this.startdate + '/' + this.enddate + '/' + this.country)
    }
  }
}
</script>

<style scoped>
</style>
