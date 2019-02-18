<template>
  <div id="app">
    <i-Menu></i-Menu>
    <Dropdown @on-click="DropdownClick">
      <a href="javascript:void(0)">
        {{currentLanguage}}
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem v-for="(item,index) in language" :key="index" :name="index">{{item}}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "app",
  components: {
    iMenu: {
      render: h => {
        // return <div>menu</div>;
      }
    }
  },
  data() {
    return {
      language: {
        "zh-CN": "中文",
        "en-US": "English"
      }
    };
  },
  methods: {
    DropdownClick(key) {
      Vue.config.lang = key;
    }
  },
  computed: {
    currentLanguage() {
      return this.language[Vue.config.lang];
    }
  }
};
</script>

<style>
.fl {
  float: left;
}
</style>
