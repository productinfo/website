<template>
    <div class="about">
        <h1>About Awesome Conferences</h1>
        <p>Awesome Conferences is a free, 👫👭👬 collaborative and 🤲 open source project about the best <em>(developer|designer|markerter|devop)</em> conferences around the world 🌍.</p>
        <h2>How to partecipate</h2>
        <p>Partecipation is pretty easy, you can:</p>
        <ul>
            <li>- Submit a <router-link to="/submit">new conference</router-link></li>
            <li>- Propose a PR on github <a href="https://github.com/aweconf/website" target="_blank">web</a> repository</li>
            <li>- Propose a PR on github <a href="https://github.com/aweconf/awesome-conferences-ios" target="_blank">ios</a> mobile repository</li>
            <li>- Propose a PR on github <a href="https://github.com/aweconf/awesome-conferences-android" target="_blank">android</a> mobile repository</li>
        </ul>
        <div class="developer">
            <h2>About the developer</h2>
            <p>It has been developed using <a href="https://vuejs.org" target="_blank">Vue.js</a>, <a href="https://swift.org" target="_blank">Swift</a> and <a href="https://kotlinlang.org" target="_blank">Kotlin</a> by <a href="https://matteocrippa.it" target="_blank">Matteo Crippa</a>.</p>
        </div>
    </div>
</template>

<style scoped>
    .about {
        margin-top: 20px;
    }
    .developer {
        margin-top: 20px;
    }
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
