<template>
  <h1>Events For Good</h1>

  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"/>
  </div>
</template>

<script>
/* eslint-disable */ 
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "HomeView",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
        id:342342,
        category: "animal wer",
        title:"sdfsdfsdf",
        description: "find your bull this",
        location: "ny",
        date: "Jan 28, 2022",
        time: "12:00",
        petsAllowed: true,
        organizer: "kat sdf"
      },
      {
        id:1342342,
        category: "animal wer2",
        title:"sdfsdfsdf",
        description: "find your bull this",
        location: "ny",
        date: "Jan 28, 2022",
        time: "12:00",
        petsAllowed: true,
        organizer: "kat sdf"
      },
      {
        id:9342342,
        category: "animal wer3",
        title:"sdfsdfsdf",
        description: "find your bull this",
        location: "ny",
        date: "Jan 28, 2022",
        time: "12:00",
        petsAllowed: true,
        organizer: "kat sdf"
      },
      {
        id:8342342,
        category: "animal wer4",
        title:"sdfsdfsdf",
        description: "find your bull this",
        location: "ny",
        date: "Jan 28, 2022",
        time: "12:00",
        petsAllowed: true,
        organizer: "kat sdf"
      }
      ]
    }
  }
};
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>