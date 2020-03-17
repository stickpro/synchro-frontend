<template>
  <ul class="breadcrumbs__list breadcrumbs" v-if="breadCrumbs">
    <li class="breadcrumbs__list-item" v-for="item in breadCrumbs">
      <a v-if="!active" :href="item.href">
        <span>{{ item.text }}</span>
      </a>
      <span v-else class="breadcrumbs__list-active">{{ item.text }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'breadcrumb',
  props: ['breadCrumbs']
}
</script>
<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  padding: 27px 0;
  font-size: 14px;
  &__list {
    &-item {
      padding: 0 0 0 12px;
    }
    &-active {
        font-weight: 500;
    }
    &-item + &-item::before {
      display: inline-block;
      padding-right: 0.5rem;
      color: #c2c2c2;
      content: '/';
    }
  }
}
</style>