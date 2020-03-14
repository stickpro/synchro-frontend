<template>
  <div>
      {{post.attributes.title}}
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.post.attributes.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.attributes.short
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'http://localhost:3000' + this.post.attributes.slug
        }
      ]
    }
  },
  data() {
    return {
      slug: this.$route.params.slug,
      post: {
        attributes: [
          {
            title: 'test',
            short: 'short',
            slug: 'test'
          }
        ]
      }
    }
  },
  computed: {
    post() {
      return this.post
    }
  }
}
</script>
