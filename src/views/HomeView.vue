<template>
  <div class="home-page">
    <main class="main-content">
      <section class="events">
        <h2 class="p-text-center">Próximos Eventos</h2>
        <div class="event-list">
          <EventCard v-for="event in events" :event="event" :key="event.id" style="width: 300px" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
//import Card from 'primevue/card'
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
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

<style>
.home-page {
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.main-content {
  padding: 20px;
}

.event-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.events {
  margin-bottom: 40px;
}
</style>
