<template>
    <a :href="`https://twitter.com/${account}`" target="_blank" class="ml-2">
        <v-avatar
                :size="avatarSize"
                class="grey lighten-4"
        >
            <img :src="`https://avatars.io/twitter/${account}`" :alt="account" :title="account">
        </v-avatar>
    </a>
</template>

<script>
export default {
  props: {
    'account': String
  },
  data () {
    return {
      avatarSize: 56
    }
  }
}
</script>
