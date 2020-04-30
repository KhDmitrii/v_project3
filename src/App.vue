<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <app-worker
      v-bind:name="name"
      v-bind:surname="surname"
      v-bind:type="type"
      v-on:lvlUp="type = $event + '+'"
    ></app-worker>
  </div>
</template>

<script>
import MyWorker from './components/myworker.vue';
export default {
  name: 'App',
  data() {
    return {
      title: 'Hello Vue',
      name: 'Иван',
      surname: 'Иванов',
      type: 'Уборщик',
    };
  },
  components: {
    appWorker: MyWorker,
  },
};
</script>
