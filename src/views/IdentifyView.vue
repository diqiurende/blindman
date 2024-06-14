<script setup>
import { ref } from 'vue';
import {ElLoading, ElMessage} from 'element-plus';
import axios from 'axios';
import { PictureFilled, PictureRounded } from "@element-plus/icons-vue";
import MainLogo from "@/components/icons/MainLogo.vue";

const fileList = ref([]); // 用于存储文件列表
const uploadedImageUrl = ref(''); // 存储上传成功后的图片URL
const backUpload = "http://localhost:5000/process_videos";

const headers = {
  'Content-Type': 'multipart/form-data'
};

let output=ref("src/assets/video/video_input_20240614_230451new.mp4")
let isupload= ref(false)
let loadingInstance = null; // 存储加载实例
// 图片上传前的处理
const beforeUpload = (rawFile) => {
  const fileType = rawFile.type;
  const isVideo = fileType.includes('video');
  const isLt1GB = rawFile.size / 1024 / 1024 < 1000;

  if (!isVideo) {
    ElMessage.error('只能上传视频文件！');
    return false;
  }
  if (!isLt1GB) {
    ElMessage.error('视频大小不能超过 1000MB!');
    return false;
  }
  return true;
};

// 自定义上传方法
const doUpload = async (file) => {
  isupload=true;
  const loadingInstance = ElLoading.service({
    lock: true,
    text: '正在检测...',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  const formData = new FormData();
  formData.append('video', file);

  try {
    const response = await axios.post(backUpload,formData,{
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      onUploadProgress: (progressEvent) => {
        // 可以根据需要更新进度条
      }
    });
    const outputPath = 'src/assets/video/' + response.data.outputpath;
    output.value = outputPath;

    console.log(output.value)
  } catch (error) {
    ElMessage.error(`视频处理失败: ${error.message}`);

  } finally {
    loadingInstance.close();

  }

};

// 文件状态改变时的处理，包括上传成功和失败
const handleChange = (file, fileList) => {
  if (file.status === 'success') {
    ElMessage.success('文件上传成功');
  } else if (file.status === 'fail') {
    ElMessage.error('文件上传失败');
  } else if (file.raw) {
    doUpload(file.raw);
  }
};
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
                      可以看到辅助盲人的效果
                    </el-row>
                  </el-container>
                </el-col>
              </el-row>

            </el-container>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="9" >
            <el-upload
                :before-upload="beforeUpload"
                :on-change="handleChange"
                :limit="1"
                :auto-upload="false"
                drag
                name="video"
                style="margin: 20px; border: 1px dashed #ccc;"
            >
              <div style="width: 100%;height: 49vh;
              display: flex;align-items: center;justify-content: center;
              flex-direction: column;">
                <el-icon class="el-icon--upload">
                  <PictureRounded />
                </el-icon>
                <div>
                  把文件拖拽至此
                </div>
              </div>

            </el-upload>
            <div v-if="uploadedImageUrl">
              <img :src="uploadedImageUrl" alt="Uploaded Image" style="=width: 10vw;height: 10vh">
            </div>
          </el-col>

          <el-col :span="9"  style="margin-left: 11.4vw">
            <div v-if="!isupload" style="display: flex;justify-content: center;align-items: center;margin-top: 10vw">
              <span class="accent" data-v-6b0c93fd=""> 请上传视频 </span>


            </div>
            <div v-else>
              <video id="video2" playsinline autoplay muted loop controls
                     style="width: 50vw; height: 50vh; margin-top: 10vh; margin-left: 0.1vw;">
                <source :src="output" type="video/mp4">
              </video>
            </div>

          </el-col>




        </el-row>
        <el-divider></el-divider>

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
.tagline{
  font-size: 76px;
  line-height: 1.25;
  font-weight: 900;
  letter-spacing: -1.5px;
  max-width: 960px;
  margin: 0 auto;
}
html:not(.dark) .accent[data-v-6b0c93fd], .dark .tagline[data-v-6b0c93fd] {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3vw;
  font-weight: bold;
}
</style>