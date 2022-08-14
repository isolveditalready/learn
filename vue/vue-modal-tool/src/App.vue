<script setup>
</script>

<template>
  <header>
    <div class="container">
     <button @click="openModal">OPEN MODAL</button>
     <h2>hello world</h2>
     <Modal />
    </div>
  </header>
</template>

<script>
  import Modal from './components/Modal.vue'
  export default {
    components: {
      Modal
    }
  }
</script>

<style>
@import './assets/base.css';


.container {
  width: 70%;
  height: 100vh;
  margin: 20px auto;
  border: 1px solid green;
  padding: 10px;
}

.modal-bg {
  background-color: red;
}

.content {
  color: yellow;
}

</style>
