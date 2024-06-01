<script setup>
import {useRouter} from "vue-router";

const router =useRouter();
function toHome(){
  router.push({
    path:'/'
  })
}
defineProps({
  size:{
    type:String,
    default:'25'
  }

})
</script>

<template>
  <p class="flagFont" @click="toHome">
    <el-icon :size="size" style="color:#eac922;">
      <Help/>
    </el-icon>
    行人重识别
  </p>
</template>

<style scoped>
.flagFont{
  font-weight: bolder;
  font-size: 1.6vw;
  color: #228def;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: YouYuan;
  cursor: pointer;
}
</style>