<template>
  <section class="container mt-4">
    <ol class="breadcrumb">
      <li role="presentation" class="breadcrumb-item">
        <nuxt-link to="/">Manga List</nuxt-link>
      </li>
      <li role="presentation" class="breadcrumb-item">
        <nuxt-link :to="'/manga/'+params.slug">{{ mangaInfo.title }}</nuxt-link>
      </li>
      <li role="presentation" class="breadcrumb-item active">
        <span aria-current="location">{{ this.$route.query.chapter }}</span>
      </li>
    </ol>

    <div class="text-center"
        v-for="chapter in mangaChapter.images"
        :key="chapter[0]">
      <img v-lazy="cover(chapter[1])" alt="Manga Cover" :width="800" />
    </div>

    <ol class="breadcrumb">
      <li role="presentation" class="breadcrumb-item">
        <nuxt-link to="/">Manga List</nuxt-link>
      </li>
      <li role="presentation" class="breadcrumb-item">
        <nuxt-link :to="'/manga/'+params.slug">{{ mangaInfo.title }}</nuxt-link>
      </li>
      <li role="presentation" class="breadcrumb-item active">
        <span aria-current="location">{{ this.$route.query.chapter }}</span>
      </li>
    </ol>
  </section>
</template>

<script>
import MangeEdenEndpoint from '@/services/api/MangeEdenEndpoint';

export default {
  components: {
    ChapterBreadcrumb
  },
  async asyncData({ app, params, query }) {
    const mangaInfo = (await MangeEdenEndpoint.getMangaInfo(params.slug)).data;
    const mangaChapter = (await MangeEdenEndpoint.getChapter(params.id)).data;

    return { 
      mangaInfo,
      mangaChapter, 
      params 
    }
  },
  methods: {
    cover(path) {
      return '//cdn.mangaeden.com/mangasimg/' + path
    }
  }
}
</script>