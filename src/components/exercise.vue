<template>
  <div class="exercise">
    <Tabs v-model="tebsValue" :closable="false" :animated="false">
      <!-- <TabPane v-for="(item,index) in tabsList" :key="index" :label="$t(item.label)" :name="item.name"> -->
      <TabPane v-for="(item,index) in tabsList" :key="index" :label="item.label" :name="item.name">
        <div class="box">
          <component :is="item.name"></component>
          <!-- <ButtonGroup size="small" >
                 <Button size="small" type="primary">
                        <Icon type="ios-arrow-back" />
                           {{$t('Backward')}}
                  </Button>
                 <Button size="small" type="primary">
                             {{$t('Forward')}}
                      <Icon type="ios-arrow-forward" />
                 </Button>
          </ButtonGroup>-->
          <Page
            :total="100"
            style="position:absolute;bottom:5px"
            :prev-text="$t('Backward')"
            :next-text="$t('Forward')"
          />
        </div>
      </TabPane>
    </Tabs>
    <Button @click="value3 = true">
      <Icon type="md-settings" size="17"/>
      <!-- topic managment -->
    </Button>
    <Button>
      <Icon type="md-pie" size="17"/>
      <!-- graphic statistics -->
    </Button>
    <Drawer
      :title="$t('CreateTopic')"
      v-model="value3"
      width="350"
      :mask-closable="true"
      :styles="styles"
    >
      <Form :model="formData">
        <Row :gutter="32">
          <Col span="24">
            <FormItem label="题目" label-position="top">
              <Input v-model="formData.name" placeholder="please enter user name"/>
            </FormItem>
          </Col>
          <!-- <Col span="12">
            <FormItem label="Url" label-position="top">
              <Input v-model="formData.url" placeholder="please enter url">
                <span slot="prepend">http://</span>
                <span slot="append">.com</span>
              </Input>
            </FormItem>
          </Col>-->
        </Row>
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="Owner" label-position="top">
              <Select v-model="formData.owner" placeholder="please select an owner">
                <Option value="jobs">Steven Paul Jobs</Option>
                <Option value="ive">Sir Jonathan Paul Ive</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="题目类型" label-position="top">
              <Select v-model="formData.type" placeholder="please choose the type">
                <Option value="private">单选</Option>
                <Option value="public">多选</Option>
                <Option value="gulpfiling">填空</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="12">
            <FormItem label="Approver" label-position="top">
              <Select v-model="formData.approver" placeholder="please choose the approver">
                <Option value="jobs">Steven Paul Jobs</Option>
                <Option value="ive">Sir Jonathan Paul Ive</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <FormItem label="Description" label-position="top">
          <Input
            type="textarea"
            v-model="formData.desc"
            :rows="4"
            placeholder="please enter the description"
          />
        </FormItem>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="value3 = false">Cancel</Button>
        <Button type="primary" @click="value3 = false">Submit</Button>
      </div>
    </Drawer>
  </div>
</template>
<script>
import singleChoice from "./singlechoice";
import multipleChoice from "./multiplechoice";
import gupFilling from "./gupfilling";
export default {
  name: "exercise",
  components: {
    singleChoice,
    multipleChoice,
    gupFilling
  },
  data() {
    return {
      tebsValue: "gupFilling",
      tabsList: [
        {
          label: h => {
            return (
              <div>
                <span>{this.$t("singleChoice")}</span>
                <Badge count={2} type="success" />
              </div>
            );
          },
          name: "singleChoice"
        },
        {
          label: h => {
            return h("div", [
              h("span", this.$t("multipleChoice")),
              h("Badge", {
                props: {
                  count: 30
                }
              })
            ]);
          },
          name: "multipleChoice"
        },
        {
          label: h => {
            return h("div", [
              h("span", this.$t("gupFilling")),
              h("Badge", {
                props: {
                  count: 99999,
                  "overflow-count": 99999
                }
              })
            ]);
          },
          name: "gupFilling"
        }
      ],
      value3: false,
      styles: {
        height: "calc(100% - 55px)",
        overflow: "auto",
        paddingBottom: "53px",
        position: "static"
      },
      formData: {
        name: "",
        url: "",
        owner: "",
        type: "",
        approver: "",
        date: "",
        desc: ""
      }
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.exercise {
  width: 800px;
  box-sizing: border-box;
  padding: 30px;
  margin: 0 auto;
}
.exercise .box {
  --boxheight: 200px;
  /* width: 80%; */
  height: var(--boxheight);
  box-shadow: inset 0 0px 10px 0px #c1c1c1;
  background: #fff;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  transform: translateY(-16px);
}
</style>


