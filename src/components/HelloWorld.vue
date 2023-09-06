<script setup type="module">
import { ref, reactive } from 'vue'
// import CommonTable from '../package/CommonTable.vue';
defineProps({
  msg: String,
})

const count = ref(0)
let column = reactive([
  {
    prop:'name',
    label: '姓名'
  },
  {
    prop:'age',
    label: '年龄'
  }
])
  let tableData = reactive([
    {
      name:'小明',
      age: 18
    },
    {
      name:'小红',
      age: 20
    }
  ])
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <CommonTable ref="commonTable" :column="column" :tableData="tableData" />
  
  <!-- <common-table ref="commonTable" :column="column" :tableData="tableData"></common-table> -->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
