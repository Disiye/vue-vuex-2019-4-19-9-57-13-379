<template>
    <section class="main">
      <a-input id="toggle-all" class="toggle-all" type="checkbox"/>
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li :class="{completed:item.complete}" v-for="item in todoList" :key="item.id">
          <div class="view">
            <a-input class="toggle" type="checkbox" :checked='item.complete' @change="changeState({id:item.id})"/>
            <label>{{item.text}}</label>
            <a-button class="destroy" @click="deleteListAsync({id:item.id})"></a-button>
          </div>
          <a-input class="edit" value="Create a TodoMVC template"/>
        </li>
      </ul>
    </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['todoList']),
  methods: {
    changeState(id){
      this.$store.dispatch('changeStateAsync', id)
    },
    deleteListAsync(id) {
      this.$store.dispatch('deleteListAsync', id); 
    }
  }
}
</script>

<style>

</style>
