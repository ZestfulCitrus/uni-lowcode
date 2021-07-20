<template>
  <view>
    <u-form :model="form" :ref="form_ref" :rules="rules">
      <u-form-item
        label-width="auto"
        :label="item.label"
        v-for="(item, index) in list"
        :key="index"
        :prop="item.name"
      >
        <!--输入框-->
        <u-input
          v-if="item.type === 'common_input'"
          v-model="form[item.name]"
          :placeholder="item.placeholder"
        />
        <u-input
          v-if="item.type === 'password_input'"
          v-model="form[item.name]"
          :placeholder="item.placeholder"
          :password-icon="item.passwordIcon"
          type="password"
        />
        <u-input
          v-if="item.type === 'range_calendar'"
          v-model="form[item.name]"
          :placeholder="item.placeholder"
          :disabled="true"
          @click="open_range_Calendar(item.name)"
        />
        <u-input
          v-if="item.type === 'single_calendar'"
          v-model="form[item.name]"
          :placeholder="item.placeholder"
          :disabled="true"
          @click="open_date_Calendar(item.name)"
        />
        <u-input
          v-if="item.type === 'time_picker'"
          v-model="form[item.name]"
          :placeholder="item.placeholder"
          :disabled="true"
          @click="open_time_picker(item.name)"
        />
        <u-input
          v-if="item.type === 'single_select'"
          v-model="form[item.name]"
          :placeholder="item.placeholder"
          :disabled="true"
          @click="open_select(item.name)"
        />
        <u-input
          v-if="item.type === 'single_select_child'"
          v-model="form[item.name]"
          :placeholder="item.placeholder"
          :disabled="true"
          @click="open_select_child(item.name)"
        />
        <u-input
          v-if="item.type === 'location'"
          v-model="form[item.name]"
          :placeholder="item.placeholder"
          :disabled="true"
          @click="location_select(item.name)"
        />
        <!--按钮事件-->
        <u-button
          v-if="item.type === 'single_button'"
          @click="btn_click(item.name)"
          >{{ btn_name[item.name] }}</u-button
        >
        <!--评分-->
        <u-rate
          v-if="item.type === 'common_rate'"
          :count="item.count"
          v-model="form[item.name]"
        ></u-rate>
        <u-radio-group v-if="item.type === 'radio'" v-model="form[item.name]">
          <u-radio
            v-for="(i, j) in item.list"
            :key="j"
            :name="i.name"
            :disabled="item.disabled"
          >
            {{ i.name }}
          </u-radio>
        </u-radio-group>
        <u-switch
          v-if="item.type === 'switch'"
          v-model="form[item.name]"
        ></u-switch>
        <u-slider
          class="r_slider"
          v-if="item.type === 'slider'"
          v-model="form[item.name]"
          :min="item.min"
          :max="item.max"
        ></u-slider>
        <u-number-box
          v-if="item.type === 'number-box'"
          v-model="form[item.name]"
        ></u-number-box>
      </u-form-item>
    </u-form>
    <u-button @click="button_click">{{ button_title }}</u-button>
    <!--跨度日历-->
    <u-calendar
      v-model="range_calendar"
      mode="range"
      max-date="2100-01-01"
      @change="range_change"
    >
      <view slot="tooltip">
        <view class="title">请选择开始和结束时间</view>
      </view>
    </u-calendar>
    <!--单天日历-->
    <u-calendar
      v-model="date_calendar"
      mode="date"
      max-date="2100-01-01"
      @change="date_change"
    >
      <view slot="tooltip">
        <view class="title">请选择时间</view>
      </view>
    </u-calendar>
    <!--日历选择器-->
    <u-picker
      mode="time"
      v-model="time_picker_show"
      :params="time_picker_params"
      @confirm="time_picker_change"
    ></u-picker>
    <u-select
      v-model="select_show"
      mode="single-column"
      :list="select_list"
      @confirm="select_change"
    ></u-select>
    <u-toast ref="Form_Toast" />
  </view>
</template>

<script>
/**
 * {
 * type:1,
 * label:'',
 * name:'',
 * value:'',
 * rule:[]
 * }
 */
export default {
  name: "r-form",
  props: {
    list: {
      type: Array,
      required: true,
    },
    form_ref: {
      type: String,
      required: true,
    },
    button_title: {
      type: String,
      require: false,
      default: "提交",
    },
  },
  created() {
    this.list.forEach((e) => {
      this.$set(this.form, e.name, e.value);
      this.rules[e.name] = e.rules;
      switch (e.type) {
        case "single_select":
          this.select_lists[e.name] = e.select_list;
          break;
        case "single_select_child":
          this.select_parentName[e.name] = e.parentName;
          this.select_url[e.name] = e.url;
          this.select_funcs[e.name] = e.request_func;
          break;
        case "single_button":
          this.click_funcs[e.name] = e.click_func;
          this.btn_name[e.name] = e.btn_name;
          break;
        case "common_rate":
          break;
      }
    });
  },
  methods: {
    button_click() {
      this.$refs[this.form_ref].validate((valid) => {
        if (valid) {
          this.$emit("get_form_data", this.form);
        } else {
          console.log("验证失败");
        }
      });
    },
    open_range_Calendar(name) {
      this.calendar_temp = name;
      this.range_calendar = true;
    },
    open_date_Calendar(name) {
      this.calendar_temp = name;
      this.date_calendar = true;
    },
    range_change(e) {
      this.form[this.calendar_temp] = e.startDate + "-" + e.endDate;
    },
    date_change(e) {
      this.form[this.calendar_temp] = e.result;
    },
    time_picker_change(e) {
      this.form[this.time_picker_temp] =
        e.year +
        "-" +
        e.month +
        "-" +
        e.day +
        " " +
        e.hour +
        ":" +
        e.minute +
        ":" +
        e.second;
    },
    open_time_picker(name) {
      this.time_picker_temp = name;
      this.time_picker_show = true;
    },
    open_select(name) {
      this.select_temp = name;
      this.select_list = this.select_lists[name];
      //console.log(this.select_list)
      this.select_show = true;
    },
    open_select_child(name) {
      this.select_temp = name;
      if (this.form[this.select_parentName[name]] === "")
        this.$refs.Form_Toast.show({ title: "请先选择上一级" });
      else
        this.select_funcs[name](
          this,
          this.form[this.select_parentName[name]],
          (list) => {
            this.select_list = list;
            this.select_show = true;
          }
        );
    },
    select_change(e) {
      this.form[this.select_temp] = e[0].label;
      this.obj_temp[this.select_temp] = e[0].value;
    },
    btn_click(name) {
      this.click_funcs[name](this);
    },
    location_select(name) {
      let context = this;
      uni.chooseLocation({
        success: function (res) {
          context.form[name]=res.name + res.address;
        },
      });
    },
  },
  watch: {
    form: {
      handler(newName, oldName) {
        this.$emit("update:form", this.form);
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.$refs[this.form_ref].setRules(this.rules);
  },
  data() {
    return {
      obj_temp: {},
      form: {},
      rules: {},
      range_calendar: false,
      date_calendar: false,
      calendar_temp: "",
      time_picker_params: {
        year: true,
        month: true,
        day: true,
        hour: true,
        minute: true,
        second: true,
      },
      time_picker_show: false,
      time_picker_temp: "",
      select_show: false,
      select_temp: "",
      select_list: [],
      select_lists: {},
      select_parentName: {},
      select_url: {},
      select_funcs: {},
      click_funcs: {},
      btn_name: {},
      click_obj: {},
    };
  },
};
</script>

<style>
.title {
  color: rgb(121, 121, 121);
  text-align: center;
  padding: 20rpx 0 0 0;
}
.r_slider {
  padding: 30rpx;
  width: 300rpx;
}
</style>