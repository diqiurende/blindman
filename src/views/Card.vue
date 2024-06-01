<!-- src/components/Card.vue -->
<template>
  <div class="card-wrap"
       @mousemove="handleMouseMove"
       @mouseenter="handleMouseEnter"
       @mouseleave="handleMouseLeave"
       ref="card">
<!--    将<div class="card-wrap">元素注册为card引用-->
    <div class="card" :style="cardStyle">
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <slot name="header"></slot>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  props: ['dataImage'],
  setup(props) {
    const card = ref(null);
    const width = ref(0);
    const height = ref(0);
    const mouseX = ref(0);
    const mouseY = ref(0);
    const mouseLeaveDelay = ref(null);

    const mousePX = computed(() => mouseX.value / width.value);
    const mousePY = computed(() => mouseY.value / height.value);

    const cardStyle = computed(() => {
      const rX = mousePX.value * 6;
      const rY = mousePY.value * -6;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    });

    const cardBgTransform = computed(() => {
      const tX = mousePX.value * -5;
      const tY = mousePY.value * -5;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      };
    });

    const cardBgImage = computed(() => {
      return {
        backgroundImage: `url(${props.dataImage})`
      };
    });

    const handleMouseMove = (e) => {
      mouseX.value = e.pageX - card.value.offsetLeft - width.value / 2;
      mouseY.value = e.pageY - card.value.offsetTop - height.value / 2;
    };

    const handleMouseEnter = () => {
      clearTimeout(mouseLeaveDelay.value);
    };

    const handleMouseLeave = () => {
      mouseLeaveDelay.value = setTimeout(() => {
        mouseX.value = 0;
        mouseY.value = 0;
      }, 1000);
    };

    onMounted(() => {
      width.value = card.value.offsetWidth;
      height.value = card.value.offsetHeight;
    });

    return {
      card,
      cardStyle,
      cardBgTransform,
      cardBgImage,
      handleMouseMove,
      handleMouseEnter,
      handleMouseLeave
    };
  }
};
</script>

<style scoped>

.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
}

.card-wrap:hover .card-info {
  transform: translateY(0);
}

.card-wrap:hover .card-info p {
  opacity: 1;
}

.card-wrap:hover .card-info,
.card-wrap:hover .card-info p {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-wrap:hover .card-info:after {
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  transform: translateY(0);
}

.card-wrap:hover .card-bg {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
}

.card-wrap:hover .card {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, white 0 0 0 1px, rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #0e0e0e 0 0 0 5px, inset white 0 0 0 6px;
}

.card {
  margin-top: 7.9vw;
  position: relative;
  flex: 0 0 240px;
  width: 380px;
  height: 180px;
  background-color: rgba(31, 25, 25, 0);
  overflow: hidden;
  border-radius: 10px;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-bg {
  opacity: 1;
  position: absolute;
  top: -20px;
  left: -16px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}

.card-info {
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.card-info p {
  opacity: 0;
  text-shadow: black 0 2px 3px;
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.card-info * {
  position: relative;
  z-index: 1;
}

.card-info:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  /* background-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%); */
  /* background-blend-mode: overlay; */
  opacity: 0;
  transform: translateY(100%);
  transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
}
</style>

