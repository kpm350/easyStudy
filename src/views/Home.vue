<template>
  <div class="container" :style="containerStyle">
    <Divider>
      <h1>EasyStudy</h1>
       {{$t('home-subtitle')}} 
      <!-- Less time, more knowledge -->
    </Divider>
    <home-exercise></home-exercise>
    <Divider>
      {{time}}
    </Divider>
  </div>
</template>

<script>
import homeExercise from "@/components/exercise";
export default {
  name: "home",
  components: {
    homeExercise
  },
  data() {
    return {
      switch1: false,
      containerStyle: {
        background: "#fff"
      },
      time:''
    };
  },
  methods: {
  },
  mounted(){
    this.timer=setInterval(() => {
      this.time=new Date().toLocaleString();
    }, 60);
  }
};
</script>
<style>
.demo-drawer-footer{
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        border-top: 1px solid #e8e8e8;
        padding: 10px 16px;
        text-align: right;
        background: #fff;
    }</style>
