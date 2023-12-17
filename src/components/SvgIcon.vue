<template>
    <!-- svg 图标外层容器节点，内部要与 use 标签结合使用 -->
    <svg :style="{width,height}">
        <!-- xlink:href 执行用哪一个图标，属性值格式： #icon-图标名字 -->
        <!-- fill="red"  设置图标颜色-->       
      <use :xlink:href="prefix+name" :fill="color" ></use>
    </svg>
</template>
<script setup lang="ts">
// 接受父组件传递的参数
defineProps({
    prefix:{
        type:String,
        default:'#icon-'
    },
    name:String,
    color:{
        type:String,
        default:'#000'
    },
    width:{
        type:String,
        default:'16px'
    },
    height:{
        type:String,
        default:'16px'
    }
})
</script>
<style  scoped>
</style>
