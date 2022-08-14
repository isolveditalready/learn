VueResult Skip Results Iframe
EDIT ON
<template>
  <div id="app">
    <section class="section">
      <h1 class="title">Vue Select/De-select Demo</h1>
      <p class="content">
        This CodePen manages a set of selects including a top-level select/de-select control
      </p>
      <div class="columns">
        <div class="column">
            <table class="table">
                <thead>
                <tr>
                    <th><input type="checkbox" class="checkbox" :checked="allSelected" @click="selectAll"/></th>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="itm in items" :key="itm.id">
                    <td><input type="checkbox" class="checkbox" v-model="itm.selected"/></td>
                    <td>{{ itm.id }}</td>
                    <td>{{ itm.name }}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div class="column">
          <div class="box">
            <h2 class="subtitle">Current Selections</h2>
            <p class="content">
               {{ currentSelections }}
            </p>
          </div>
        </div>
      </div>
      <p class="content">
        Select any combination of checkboxes.  The top-level checkbox will set or clear all of the items.  Individual item selections can also change the state of the top-level checkbox, depdending on whether their sibilings are all set or not.
      </p>
    </section>
    <footer class="footer">
      <p class="content">
        Was this useful?  If so, please give a like.
      </p>
     </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
       { id: 101, name: "Item #1" },
       { id: 102, name: "Item #2" },
       { id: 103, name: "Item #3" }
      ],
      currentSelections: null
    };
  },
  mounted() {
    // 
    // Pretend "items" comes from an api
    //
    // This forEach() supplements the faux api-provided items with 
    // a flag.  This is easier to work with than managing the
    // selections separately (say using selectedItems[]).
    //
    this.items.forEach( itm => this.$set(itm, "selected", false));
  },
  computed: {
    allSelected() {
      return this.items.every(itm => itm.selected);
    }
  },
  methods: {
    selectAll() {
      let all_s = this.allSelected;
      this.items.forEach( itm => itm.selected = !all_s );
    }
  },
  watch: {
    items: {
      handler() {
        this.currentSelections = this.items
          .filter( itm => itm.selected )
          .map( itm => itm.name )
          .toString();
      },
      deep: true
    }
  }
};
</script>