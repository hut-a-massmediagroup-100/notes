<template>
<li class="card">
  <n-link :to="localePath({ name: 'note-item', params: { item: data.id } })">{{ data.name }}</n-link>
</li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { NoteType } from '@/domains/notes/types/note'

@Component({
  name: 'CardItem'
})
export default class CardItem extends Vue {
  @Prop({ type: Object, required: true })
  readonly data!: NoteType
}
</script>

<style scoped>

</style>
