<template>
  <div>
    <LayoutHeader />
    <Menu />
    <nuxt />
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout-header/layout-header'
import Menu from '@/components/menu/menu'

export default {
  components: { LayoutHeader, Menu },
  data() {
    return {
      title: 'Synhro',
    }
  },
  methods: {}
}
</script>
