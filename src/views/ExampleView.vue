<script setup>
import {ref, onMounted} from 'vue';
import {ElMessage} from 'element-plus';
import MainLogo from "@/components/icons/MainLogo.vue"


</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="3">
            <main-logo size="30"></main-logo>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="12">
            <el-container
                style="
                width:100%;
                height: 16vh;
                margin: 2vh 0.6vw 2vh 0.6vw;
                padding: 2vh 0.6vw 2vh 0.6vw;
                background-color: rgba(0,153,102,.05);
                border-radius: 5px;
                flex-direction: column;
"

            >
              <el-row style="width: 100%">
                <el-col :span="2">
                  <el-icon size="25" style="margin: 1vh 0 0 1vw ;color: rgba(15,119,86,0.6)"   >
                    <PictureFilled />
                  </el-icon>
                </el-col>
                <el-col :span="13" style="margin: 1vh 0 0 1vw">
                  <el-container style="flex-direction: column" >
                    <el-row style="font-weight: bold;font-size: 1.0vw">
                      识别视频
                    </el-row>
                    <el-row style="font-weight: lighter;font-size: 1.0vw;margin-top: 1vh">
                      观察上传的两个视频
                    </el-row>
                    <el-row style="font-weight: lighter;font-size: 1.0vw;margin-top: 1vh">
                      可以发现被重识别的行人
                    </el-row>
                  </el-container>
                </el-col>
              </el-row>

            </el-container>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-upload
                :disabled="true"
                drag
                name="image"
                style="margin: 2vh 1vw 2vh 0.5vw;border-color: black"
            >
              <div style="width: 100%;height: 40vh;
              display: flex;align-items: center;justify-content: center;
              flex-direction: column;">

              </div>

            </el-upload>
          </el-col>

          <el-col :span="12" >
            <el-upload
                drag
                @click="null"
                :auto-upload="false"
                :disabled="true"
                style="margin: 2vh 1vw 2vh 1vw;

"

            >
              <div style="width: 100%;height: 40vh;
              display: flex;align-items: center;justify-content: center;
              flex-direction: column;">

              </div>
            </el-upload>
          </el-col>

        </el-row>

      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  margin: 0 0 0 0;
  width: 100vw;
  display: flex;
}

.flagFont {
  font-weight: bolder;
  font-size: 1.6vw;
  color: #55c048;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: YouYuan;
}

.title2 {
  font-size: 20px;
  color: #1f1f1f;
  letter-spacing: 0;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}

.description2 {
  font-size: 14px;
  color: #858585;
  letter-spacing: 0;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
}

.backgrondTopImg {
  position: fixed;
  top: 0vh;
  height: 99.5vh;
  width: 100vw;
  z-index: -1;
}
.common-layout{
  height: 100vh;
  background-color: rgb(248, 248, 248)
}
</style>