<template>
  <section class="container mt-4">
    <div>
      <ol class="breadcrumb">
        <li role="presentation" class="breadcrumb-item">
          <nuxt-link to="/">Manga List</nuxt-link>
        </li>
        <li role="presentation" class="breadcrumb-item active">
          <span aria-current="location">{{ mangaInfo.title }}</span>
        </li>
      </ol>
      <b-card>
        <b-media no-body>
          <b-media-aside vertical-align="top">
            <img v-lazy="cover(mangaInfo.image)" height="200" alt="Manga Cover" />
          </b-media-aside>
          <b-media-body class="ml-3">
            <h5 class="mt-0">Read {{ mangaInfo.title }} Manga Online</h5>
            <p>
              {{ mangaInfo.description }}
            </p>

            <div class="group my-2">
              <strong>Alternative Name</strong><br/>
              <span v-for="aka in mangaInfo.aka"
                    :key="aka">
                {{ aka }} <br/>
              </span>
            </div>

            <div class="group my-2">
              <strong>Author</strong><br/>
              {{ mangaInfo.author }}
            </div>

            <div class="group my-2">
              <strong>Released</strong><br/>
              {{ mangaInfo.released }}
            </div>

            <div class="group my-2">
              <strong>Categories</strong><br/>
              <span v-for="category in mangaInfo.categories"
                    :key="category">
                {{ category }}
              </span>
            </div>
          </b-media-body>
        </b-media>
      </b-card>

      <b-card class="mt-4">
        <h3 class="mb-4">Chapter List</h3>
        <div class="table-responsive">
          <table class="table b-table table-striped table-hover">
            <thead>
              <tr>
                <th>Chapter Name</th>
                <th>Date Added</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="chapter in mangaInfo.chapters"
                  :key="chapter[0]">
                <td>
                  <nuxt-link :to="{ path: '/manga/'+ mangaId +'/chapter/' + chapter[3], query: { chapter: chapter[2] } }">
                    {{ mangaInfo.title }} : <strong>{{ chapter[2] }}</strong>
                  </nuxt-link>
                </td>
                <td>{{ chapter[1] | moment('DD MMM YYYY') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </b-card>
    </div>
  </section>
</template>

<script>
import MangeEdenEndpoint from '@/services/api/MangeEdenEndpoint';

export default {
  async asyncData({ params }) {
    const mangaId = params.id
    const mangaInfo = (await MangeEdenEndpoint.getMangaInfo(params.id)).data;
    return { mangaId, mangaInfo }
  },
  methods: {
    cover(path) {
      return 'https://cdn.mangaeden.com/mangasimg/' + path
    }
  }
}
</script>