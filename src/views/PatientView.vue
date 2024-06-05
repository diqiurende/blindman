<script setup>
import {useRouter} from "vue-router";
import MainLogo from "@/components/icons/MainLogo.vue";
import Card from "@/views/Card.vue";
const router= useRouter()
function  toInquiry(){
  router.push({
    path:'/identify'
  })
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header style="position: fixed;top: 0;width: 100vw;z-index: 20;background: white">
        <el-row style="height: 8vh;background: white">
          <el-col :span="6">
            <p class="flagFont" @click="toHome">
              <el-icon :size="size" style="color:#eac922;">
                <Help/>
              </el-icon>
              慧眼说途
            </p>
          </el-col>
          <el-col :span="5">&nbsp;
          </el-col>
          <el-col :span="2">
            <p class="menuFont2" @click="toInquiry">识别</p>
          </el-col>
          <el-col :span="2">
            <p class="menuFont2"> 系统设置</p>
          </el-col>
          <el-col :span="2">
            <p class="menuFont2"> 历史记录</p>
          </el-col>
          <el-col :span="2">
            <p class="menuFont2"> 关于我们</p>
          </el-col>
          <el-col :span="2">
            <p class="menuFont2"> 联系我们</p>
          </el-col>

        </el-row>
      </el-header>
      <div style="height: 85vh;width: 99vw">&nbsp;</div>
      <el-main style="background: white;border-radius: 18px;width: 99vw; overflow-y:hidden; overflow-x:hidden">
        <el-row >
          <el-col :span="10" >
            <el-carousel  arrow="never" height="60vh">
              <el-carousel-item  style="background: whitesmoke;border-radius: 15px" >
                <el-image src="src/assets/盲道.jpg" style="border-radius: 15px;width: 40vw"></el-image>
                <div
                    style="background: whitesmoke;
                    width: 100%;
                    height: 30vh;
"
                >
                  <p class="aliTitle1">AI助力盲人出行，提供新保障，展现社会新风貌&nbsp;</p>
                  <p class="aliDescription" style="height: 10vh">据统计，全球失明人数约有4330万。中国2024年视障者数量超过567万人，占全球失明人口的13%左右，且每年新增盲人数量已经达到45万以上。
                  </p>
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-col>

          <el-col :span="1" style="display: flex;justify-content: center;align-items: center">
            <el-divider direction="vertical" style="height: 100%;" />
          </el-col>

          <el-col :span="6">
            <p class="aliTitle" style="background: transparent">
              中共中央办公厅、国务院办公厅印发《关于加强社会治安防控体系建设的意见》
            </p>
            <p class="aliDescription" >
              本产品还搭载了激光测距雷达,能结合目标检测进行更精准的提示。同时，对于潜在的可能无法检测到的目标，拥有无震动反馈。
              <br /><br /><br /><br />

            </p>
            <!--            <el-image src="src/assets/camera.png" style="border-radius: 15px;margin-top: 12vh"></el-image>-->
            <Card data-image="src/assets/camera.png"> </Card>
          </el-col>
          <el-col :span="1" style="display: flex;justify-content: center;align-items: center">
            <el-divider direction="vertical" style="height: 100%;" />
          </el-col>

          <el-col :span="6">
            <p class="aliTitle" style="background: transparent">
              YOLOv8：盲人辅助的技术突破
            </p>
            <p class="aliDescription" >
              YOLOv8作为YOLO系列的最新版本，对于盲人辅助具有重要意义。其高效的实时检测能力使其在监控视频和智能安防系统等场景中表现出色，能够快速准确地识别行人并进行跟踪。同时，YOLOv8具有精确的目标定位能力，可以提供更高的检测精度和更精确的目标定位，为身份重识别提供了可靠基础。
              <br />

            </p>
            <!--            <el-image fit="cover" src="src/assets/yolo.png" style="border-radius: 15px;margin-top: 14vh;height: 20vh;display: flex;justify-content: center"></el-image>-->
            <Card data-image="src/assets/yolo.png"> </Card>
          </el-col>

        </el-row>
        <el-row>
          <el-col>
            <div style="height: 10vh;width: 100vw;">&nbsp;</div>
          </el-col>
        </el-row>
        <el-row style="background: #228def;">
          <el-col>
            <div style="height: 60vh;width: 100vw;left: 0">
              &nbsp;
              <p class="flagFont" style="color:white; position: absolute; left: 5vw; height: 5vh; font-size: 2.5vw; display: flex; align-items: center;">
                <el-icon size="130" style="color:#eac922;">
                  <Help/>
                </el-icon>
                盲人辅助
              </p>

            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
  <div class="videoContainer">
    <video class="fullscreenVideo" id="bgVid" playsinline="" autoplay="" muted="" loop="">
      <source
          src="../assets/pc_cn.mp4"
          type="video/mp4">
    </video>
  </div>

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
.title {
  font-size: 2.8vw;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menuFont2 {
  font-size: 1.3vw;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.description1 {
  font-size: 1.8vh;
  font-weight: lighter;
  display: flex;
  align-items: center;
  justify-content: center;
}
.aliTitle{
  background: whitesmoke;
  padding-left: 2.6vw;
  padding-right: 2.6vw;
  display: flex;
  justify-content: center;
  font-size: 1vw;


  font-weight: bolder;
}
.aliTitle1{
  background: whitesmoke;
  padding-left: 2.6vw;
  padding-right: 2.6vw;
  display: flex;
  justify-content: center;
  font-size: 2vw;


  font-weight: bolder;
}
.aliDescription{
  padding: 0 1vw 0 1vw;
  font-size: 2vh;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
}
.common-layout {
  margin: 0 0 0 0;
  width: 100vw;
  display: flex;
}

.videoContainer {
  top: 8vh;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -100;

}

.fullscreenVideo {
  width: 100vw;
  overflow: hidden;
}

.underclass {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>