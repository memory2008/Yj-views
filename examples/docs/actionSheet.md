

### 基本用法
---



::: demo
```html
基础用法
通过v-model控制显示和隐藏 ActionSheet通过actions数组来定义展示的选项，数组的每一项是一个对象，对象属性见文档下方表格
 <div class="demon-block">
  <yj-button @click.native="handlerActionSheet" type="primary">弹出菜单</yj-button>
  <action-sheet v-model="show"></action-sheet>
</div>
<script>
export default {
   data(){
     return{
       show:false
     }
  },
  methods:{
    handlerActionSheet(){
      this.show = true
    }
  }
}
</script>

```
:::


### prop
| 参数      | 说明                                 | 类型      | 可选值       | 默认值   |
|---------- |------------------------------------ |---------- |------------- |-------- |
|type      |	类型，可选值为 primary info warning danger |	String   |	—           | default |
### Event
| 事件名称      | 说明       | 回调参数   |
|------------- |----------- |---------  |
|onclick         |点击按钮时触发| —  |
