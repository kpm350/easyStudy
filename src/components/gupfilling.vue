<template>
  <div class="gupfilling">
    <h3>题目：</h3>
    <Row>
      <div class="title">{{current.title}}</div>
      <h3>请输入回答：</h3>
      <Col span="12">
        <!-- <input type="text" v-model="userInput" @keyup="userInputAction"> -->
        <i-input
          v-model="userInput"
          @keydown.native="userInputAction"
          @keydown.enter.native="userEnter"
        ></i-input>
      </Col>
      <Col span="12">
        <ul>
          <li v-for="(item,index) in log" :key="index">{{item}}</li>
        </ul>
      </Col>
    </Row>
    <h3>答案</h3>
    {{current.key}}
    <p>回答是否正确：{{verify}}</p>
  </div>
</template>
<script>
// import createNamespacedHelpers from 'vuex'
// const {mapState, mapAction} = createNamespacedHelpers();
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "gupFilling",
  data() {
    return {
      userInput: "",
      verify: false,
      start: "",
      end: ""
    };
  },
  computed: {
    ...mapState(["title", "index", "log"]),
    ...mapGetters(["current"])
  },
  watch: {
    userInput: function(v) {
      this.verify = v == this.current.key ? !!this.userEnter() : false;
    }
  },
  methods: {
    ...mapActions(["pushLog"]),
    userInputAction(e) {
      // console.log(e);
    },
    userEnter(e) {
      this.userInput = "";
      console.log("userEnter");
      this.end = Date.now();
      this.pushLog({
        verify: this.verify,
        id: this.current.id,
        time: (this.end - this.start) / 1000
      });
    }
  },
  mounted() {
    this.start = Date.now();
  }
};
</script>

