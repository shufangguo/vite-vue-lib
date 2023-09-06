import CommonTable from './package/CommonTable.vue'; // 引入封装好的组件
export { CommonTable } //实现按需引入*

const components = [CommonTable];  // 将来如果有其它组件,都可以写到这个数组里
const install = (App, options)=> {
  // console.log(App)
  components.forEach((component) => {
    // console.log(App,component)
    App.component(component.name,component);
  });
};
export default { install } // 批量的引入*
