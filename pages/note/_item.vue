<template>
<main id="main"></main>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'

@Component({
  name: 'NoteItem'
})
export default class NoteItem extends Vue {
  async asyncData({ $fireStore, params }: Context) {
    try {
      const response = await $fireStore.collection('test').doc(params.item).get()
      const note = {
        ...response.data(),
        id: response.id,
      }
      console.info(note)
      // const items: {}[] = []
      // response.docs.map((item: any) => {
      //   items.push(item.data())
      // })
      // return {
      //   items
      // }
    } catch(e) {
      console.info(e)
    }
  }
}
</script>

<style scoped>

</style>
