<template>
  <main class="events">
    <h1>Events for good</h1>
    <EventCard  v-for="event in events" :key="event.id" :eventAtEventCard="event"/>
  </main>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data() {
    return {
       events:null 
    }
  },
  created() {
      EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
<style scoped>
  .events {
    display: flex;
    margin-top: 1em;
    flex-direction: column;
    align-items: center;
    
  }
</style>