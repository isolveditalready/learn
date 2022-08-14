<template>
  <div class="event-card">
    <span>@ {{ event.time }} on {{ event.date }} </span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  name: "EventCard",
   props: {
     event: Object 
   },
  data() {
    return {
      event: {
        id:2342342,
        category: "animal wer",
        title:"sdfsdfsdf",
        description: "find your bull this",
        location: "ny",
        date: "Jan 28, 2022",
        time: "12:00",
        petsAllowed: true,
        organizer: "kat sdf"
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba( 0,0,0, 0.2);
}
</style>
