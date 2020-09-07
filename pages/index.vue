<template>
  <main id="main">{{ $t('titles.title') }}</main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  async asyncData(ctx: any) {
    try {
      const response = await ctx.$fireStore.collection('test').get()
      const items: {}[] = []
      response.docs.map((item: any) => {
        items.push(item.data())
      })
      return {
        items
      }
    } catch(e) {
      console.info(e)
    }
  }
}
</script>

<style lang="scss"></style>
