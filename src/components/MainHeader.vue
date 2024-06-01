<script setup>

import MainLogo from "@/components/icons/MainLogo.vue";
import {useRouter} from "vue-router";

const router =useRouter();
function  toInquiry(){
  router.push({
    path:'/inquiry'
  })
}
</script>

<template>
  <div>
    <el-container>
      <el-row style="height: 8vh;background: white">
        <el-col :span="6">
          <main-logo></main-logo>
        </el-col>
        <el-col :span="5">&nbsp;
        </el-col>
        <el-col :span="2">
          <p class="menuFont2" @click="toInquiry">问诊</p>
        </el-col>
        <el-col :span="2">
          <p class="menuFont2"> 关于我们</p>
        </el-col>
        <el-col :span="2">
          <p class="menuFont2"> ESG</p>
        </el-col>
        <el-col :span="2">
          <p class="menuFont2"> 投资者关系</p>
        </el-col>
        <el-col :span="2">
          <p class="menuFont2"> 联系我们</p>
        </el-col>

      </el-row>
    </el-container>
  </div>

</template>

<style scoped>
.menuFont2 {
  font-size: 1.3vw;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>