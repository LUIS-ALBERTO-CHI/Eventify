<template>
  <div id="map" style="height: 180px"></div>
  <Dialog
    modal
    header="Detalles del Evento"
    :closable="true"
    :close-on-escape="true"
    v-model:visible="visible"
  >
    <h2 class="text-md font-semibold">{{ selectedEvent.name }}</h2>
    <div class="flex flex-row gap-2">
      <Chip icon="pi pi-user " :label="selectedEvent.guest" />
      <Chip icon="pi pi-clock" :label="selectedEvent.dateTime" />
    </div>

    <template #footer>
      <Button
        @click="
          () => {
            toggleVisible()
          }
        "
        class="p-button-text"
        label="Cancel"
      />
      <Button
        @click="
          () => {
            toggleVisible()
          }
        "
        class="p-button-text"
        label="Save"
      />
    </template>
  </Dialog>
  <main class="main-content">
    <section class="events">
      <h2 class="p-text-center pt-2 pb-4 font-bold text-3xl">Próximos Eventos</h2>
      <div class="grid gap-2">
        <EventCard
          :onAccept="
            (data) => {
              console.log(data)
              this.selectedEvent = data
              toggleVisible()
            }
          "
          class=""
          v-for="event in events"
          :eventData="event"
          :key="event.id"
          style="width: 300px"
        />
      </div>
    </section>
  </main>
</template>

<script>
//import Card from 'primevue/card'
import EventCard from '@/components/EventCard.vue'
import Dialog from 'primevue/dialog'
import Chip from 'primevue/chip'

export default {
  components: {
    EventCard,
    Dialog,
    Chip
  },
  data() {
    return {
      visible: false,
      events: [],
      selectedEvent: null
    }
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible
    }
  },
  mounted() {
    fetch('/events.json')
      .then((response) => response.json())
      .then((data) => {
        this.events = data
      })
  }
}
</script>
