import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
// import ElementPlus from 'element-plus'
import { ElButton, ElTable, ElTableColumn } from 'element-plus';

import CommonTable from '../dist/common-table.es.js';
import '../dist/style.css'

const app = createApp(App)
// console.log(app)
app.use(ElButton)
app.use(ElTable)
app.use(ElTableColumn)
app.use(CommonTable)
app.mount('#app')
// console.log(app)


