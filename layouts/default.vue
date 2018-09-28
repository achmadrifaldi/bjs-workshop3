<template>
  <div>
    <manga-eden-navbar></manga-eden-navbar>
    <nuxt/>
    <manga-eden-footer></manga-eden-footer>
  </div>
</template>

<script>
import MangaEdenNavbar from '~/components/MangaEdenNavbar.vue'
import MangaEdenFooter from '~/components/MangaEdenFooter.vue'

export default {
  components: {
    MangaEdenNavbar,
    MangaEdenFooter
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}

.bg-info {
  background-color: #0073ea !important;
}
</style>

