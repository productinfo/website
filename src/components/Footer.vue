<template>
    <v-footer app class="pa-3">
        <v-spacer></v-spacer>
        <div>&copy; {{ year }} AweConf.com - <a href="https://twitter.com/aweconf" target="_blank">@aweconf</a> - <router-link :to="{ path: '/about' }" active-class="noneclass">About</router-link> - <router-link :to="`/submit`" active-class="noneclass">Submit</router-link> - <a href="https://www.iubenda.com/privacy-policy/7904617" target="_blank">Privacy</a> - <a href="https://www.iubenda.com/privacy-policy/7904617/cookie-policy" target="_blank">Cookie</a> Policy</div>
    </v-footer>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear()
  })
}
</script>

<style>
    a {
        color: #673ab7 !important;
        text-decoration: none;
    }
</style>
