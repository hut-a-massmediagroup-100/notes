<template>
  <main id="main">
    <ul>
      <card-item v-for="(item, index) in items" :key="index" :data="item"/>
    </ul>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import CardItem from '@/domains/notes/components/card.vue'
import { NoteType } from '@/domains/notes/types/note'

@Component({
  components: {
    CardItem
  }
})
export default class Index extends Vue {
  async asyncData({ $fireStore }: Context) {
    try {
      const response = await $fireStore.collection('test').get()
      const items: NoteType[] = []
      response.docs.map((item: any) => {
        items.push({
          ...item.data(),
          id: item.id
        })
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
