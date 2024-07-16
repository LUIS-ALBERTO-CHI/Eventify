<template>
  <Card>
    <template #title>
      <h3>{{ eventData.name }}</h3>
    </template>
    <template #subtitle>
      <p>{{ dateTime }}</p>
    </template>
    <template #content>
      <p>{{ eventData.description }}</p>
    </template>
    <template #footer>
      <MyButton
        @click="
          () => {
            onAccept(eventData)
          }
        "
        class="flex flex-row w-full"
        icon="pi pi-ticket"
        label="Asistir"
      />
    </template>
  </Card>
</template>
<script>
import Card from 'primevue/card'
import MyButton from 'primevue/button'

export default {
  components: {
    Card,
    // eslint-disable-next-line vue/no-reserved-component-names
    MyButton
  },
  emits: ['click'],

  computed: {
    dateTime() {
      return new Date(this.eventData.dateTime).toLocaleString()
    }
  },
  props: ['eventData', 'onAccept']
}
</script>
