<template>
  <div class="singlechoice">
    <RadioGroup v-model="answer" vertical>
        <Radio label="apple">
            <Icon type="social-apple"></Icon>
            <span>Apple</span>
        </Radio>
        <Radio label="android">
            <Icon type="social-android"></Icon>
            <span>Android</span>
        </Radio>
        <Radio label="windows">
            <Icon type="social-windows"></Icon>
            <span>Windows</span>
        </Radio>
    </RadioGroup>
  </div>
</template>
<script>
export default {
  name: "singlechoice",
  data(){
    return {
      answer:''
    }
  }
};
</script>

