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
    </Row>
    <p>{{userInput}}</p>
    <h3>答案</h3>
    <p>{{verify}}</p>
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
      this.verify = v == this.current.key ? true : false;
    }
  },
  methods: {
    ...mapActions(["next"]),
    userInputAction(e) {
      console.log(e);
    },
    userEnter(e) {
      this.end = Date.now();
      this.next({
        verify: this.verify,
        id: this.current.id,
        time: (this.end - this.start) / 100
      });
    }
  },
  mounted() {
    this.start = Date.now();
  }
};
</script>

