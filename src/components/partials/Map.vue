<template>
    <v-card-text>
        <template>
            <gmap-map
                    :center="{ lat: conference.geo.lat ? conference.geo.lat : 0, lng: conference.geo.lng ? conference.geo.lng : 0}"
                    :zoom="zoom"
                    class="map"
            >
                <google-cluster>
                    <gmap-marker
                            :position="{ lat: conference.geo.lat ? conference.geo.lat : 0, lng: conference.geo.lng ? conference.geo.lng : 0}"
                            icon="https://maps.google.com/mapfiles/ms/icons/purple-dot.png"
                            :clickable="true"
                            :draggable="false"
                            @click="$router.push({ path: '/conference/' + conference.slug })"
                    ></gmap-marker>
                </google-cluster>
            </gmap-map>
        </template>
    </v-card-text>
</template>

<script>
export default {
  props: {
    conference: Object,
    zoom: {
      type: Number,
      default: 18
    }
  }
}
</script>

<style scoped>
    .map {
        width: 100%;
        height: 300px;
    }
</style>
