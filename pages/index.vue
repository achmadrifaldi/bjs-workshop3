<template>
  <section class="container mt-4">
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <b-card-group columns>
        <b-card v-for="manga in gallery"
                :key="manga.a"
                :title="manga.t">
          <nuxt-link :to="'/manga/' + manga.i ">
            <img v-lazy="cover(manga.im)" class="card-img-top"/>
          </nuxt-link>

          <p class="card-text">
          </p>
          <div slot="footer">
              <small class="text-muted">Last updated {{ manga.ld | moment('D MMM YYYY') }}</small>
          </div>
        </b-card>
      </b-card-group>
    </div>
  </section>
</template>

<script>
import MangeEdenEndpoint from '@/services/api/MangeEdenEndpoint';

let count = 0;

export default {
  async asyncData() {
    const mangaList = (await MangeEdenEndpoint.getMangaList()).data;
    let gallery = mangaList.manga

    return { 
      mangaList,
      gallery
    }
  },
  data() {
    return {
      page: 2,
      busy: false
    }
  },
  watch: {
    busy(val) {
      if(val)
        this.fetchSomething()
    }
  },
  methods: {
    cover(path) {
      return '//cdn.mangaeden.com/mangasimg/98x/' + path
    },

    loadMore: function() {
      this.busy = true
    },

    async fetchSomething() {
      const newMangaList = (await MangeEdenEndpoint.getMangaList(this.page)).data;
      this.gallery.push(newMangaList.manga)
      this.page = newMangaList.page + 1
      this.busy = false
    }
  }
}
</script>