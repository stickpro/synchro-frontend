<template>
  <div>
    <LayoutHeader />
    <Menu />
    <nuxt />
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutHeader from '@/components/layout-header/layout-header'
import LayoutFooter from '@/components/layout-footer/layout-footer'

import Menu from '@/components/menu/menu'

export default {
  components: { LayoutHeader, Menu, LayoutFooter },
  data() {
    return {
      title: 'Synhro',
    }
  },
  methods: {}
}
</script>
