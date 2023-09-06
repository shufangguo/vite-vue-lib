<template>
    <section>
      <div class="common-table">
        <h1 class="overview">
          大标题
        </h1>
        <el-table :data="tableData" stripe style="width: 100%" @selection-change="commonSelect">
          <!-- <el-table-column type="selection" width="55" v-hasPermi="['anno:image:transmission']" v-if="deveops === true">
          </el-table-column> -->
          <template v-for="column in column">
            <el-table-column :width="column.width ? column.width : 'auto'" :prop="column.prop" :label="column.label">
              <template #default="scope">
                <slot v-if="column.imageId" :name="column.prop" :row="scope.row">
                </slot>
                <template v-else-if="column.prop === 'imagePreview'">
                  <div class="overview">
                    Overview
                    <!-- <common-errimg :srcImg="scope.row.thumbUrl"/> -->
                  </div>
                </template>
                <!-- <template v-else-if="column.label === '操作'" v-hasPermi="['anno:image:deletedevops'] && deletedevops">
                  <el-button v-for="(item, index) in buttons" :key="index" :type="item.type"
                    @click="$emit('commonDel', scope.row)" @keyup.prevent @keydown.enter.prevent>
                    {{ item.text }}
                  </el-button>
                </template>
                <template v-else-if="column.label === '操作'" v-hasPermi="['anno:image:updatemark'] && updatemark">
                  <el-button v-for="(item, index) in buttons" :key="index" :type="item.type"
                    @click="$emit('commonDel', scope.row)" @keyup.prevent @keydown.enter.prevent>
                    {{ item.text }}
                  </el-button>
                </template> -->
              </template>
            </el-table-column>
          </template>
        </el-table>
      </div>
    </section>
  </template>

  <!-- <script>
    export default {
      name: 'CommonTable',
    }
  </script> -->

  <script setup>
  defineOptions({
    name: 'CommonTable'
  })
  const emit = defineEmits()
  const prop = defineProps({
    // name: 'CommonTable',
    tableData: {
      type: Array
    },
    column: {
      type: Array
    },
    buttons: {
      type: Array
    },
    deveops: {
      type: Boolean
    },
    deletedevops: {
      type: String
    },
    updatemark: {
      type: String
    }
  })
  // 表格多选
  const commonSelect = (row) => {
    emit("commonRows", row)
  }
  </script>
  <style lang="scss" scoped>
  @import "../style.scss";
  .overview {
    display: inline-block;
    color: $color;
    border: 3px solid #000;
    @include border-radius(12px);
  }
  
  .overview img {
    max-width: 100px;
    height: auto;
    max-height: 60px;
  }
  </style>
