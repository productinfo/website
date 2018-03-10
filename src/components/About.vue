<template>
    <div class="mt-4">
        <v-container grid-list-xl text-xs-left>
            <v-layout row wrap>
                <v-flex xs10 offset-xs1>
                    <h1>About Awesome Conferences</h1>
                    <p class="mt-3">Awesome Conferences is a 🐳 free, 👫👭👬 collaborative and 🤲 open source project
                        about the best
                        <em>(developer|designer|markerter|devop)</em> conferences around the 🌍world.</p>
                    <p>The main purpose is to create a 🚓 trustworthy place where you can easily find out an interesting
                        conference, meetup next to you, or even far away, filtering items by 🏷 topic, 🏳 country or 🏙
                        city.</p>
                    <p>Conferences are a great place to 🤓 share knowledge, 🤯 learn new stuff and ☃️ meet new
                        people.</p>
                    <p>If you think this too, follow this project, I will do the best and with your precious help, we
                        can only improve this.</p>
                    <h2 class="mt-3">Mobile Applications</h2>
                    <p>Feel free to download our official application to keep track of the 🔥 conferences:</p>
                    <p>
                        <a href="https://itunes.apple.com/us/app/awesome-mobile-conferences/id1289255473?mt=8">
                            <img src="../assets/download-on-the-app-store.png"/>
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=conference.mobile.awesome.boostco.de.amc">
                            <img src="../assets/google-play-badge.png"/>
                        </a>
                    </p>
                    <p>Or add our <a href="tg://resolve?domain=aweconf_bot" target="_blank">Telegram Bot 🤖</a></p>

                    <h2 class="mt-3">How to participate</h2>
                    <p>Participation is pretty easy, you can:</p>
                    <ul class="mt-3">
                        <li>- Submit a
                            <router-link to="/submit">new conference</router-link>
                        </li>
                        <li>- Propose a PR on github <a href="https://github.com/aweconf/website"
                                                        target="_blank">web</a> repository
                        </li>
                        <li>- Propose a PR on github <a href="https://github.com/aweconf/ios"
                                                        target="_blank">ios</a> mobile repository
                        </li>
                        <li>- Propose a PR on github <a href="https://github.com/aweconf/android"
                                                        target="_blank">android</a> mobile repository
                        </li>
                        <li>- Propose a PR on github <a href="https://github.com/aweconf/telegrambot"
                                                        target="_blank">telegram</a> bot repository
                        </li>
                    </ul>
                    <div class="mt-4">
                        <h2>About the developer</h2>
                        <p>It has been developed using <a href="https://vuejs.org" target="_blank">Vue.js</a>, <a
                                href="http://expressjs.com" target="_blank">Expressjs</a>, <a href="https://swift.org"
                                                                                              target="_blank">Swift</a>,
                            and <a href="https://kotlinlang.org" target="_blank">Kotlin</a> by <a
                                    href="https://matteocrippa.it" target="_blank">Matteo Crippa</a>.</p>
                    </div>

                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'About'
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 0 10px;
    }

    a {
        color: #5719B8;
        text-decoration: none;
    }
</style>
