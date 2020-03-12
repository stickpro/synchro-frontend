<template>
  <div class="container-fluid">
    <div class="html__title normal-title" v-if="html.title">{{ html.title }}</div>
    <div class="row">
      <section class="html__item" v-if="html.text">
        <div class="html__info"  v-html="html.text">

        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
    name: "htmlBlock",
    props: ["html"],
}
</script>