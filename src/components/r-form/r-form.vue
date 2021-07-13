<template>
  <view>
    <u-form :model="form" :ref="form_ref" :rules="rules">
      <u-form-item
        label-width="auto"
        :label="item.label"
        v-for="(item, index) in list"
        :key="index"
        :prop="item.name"
        draggable="true"
        v-on:drop.native="drop($event, index)"
        v-on:dragover.native="dropover($event, index)"
        v-on:dragleave.native="dragleave($event, index)"
        v-on:dragstart.native="drag('swapForm', index)"
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
          context.form[name] = res.name + res.address;
        },
      });
    },
    dropover(ev, index) {
      ev.preventDefault();
      ev.stopPropagation();
      ev.target.classList.add("drapover");
      //v-on:dragover.native.prevent
    },
    dragleave(ev, index) {
      ev.target.classList.remove("drapover");
      ev.stopPropagation();
    },
    drag(operation, index) {
      item.operation = operation;
      item.index = index;
    },
    drop(ev, index) {
      if (item.operation == "swapForm") {
        let obj = this.list[index];
        this.list[index] = this.list[item.index];
        this.list[item.index] = obj;
        this.list.push();
      } else if (item.operation == "add") {
        if (item.contain != "r-form") {
          return;
        }
        if (item.type == "location") {
          let obj = {
            type: "location",
            label: "位置选择",
            name: "my-location" + this.$u.guid(),
            value: "",
          };
          //this.list.push(obj);
          this.list.splice(index, 0, obj);
        } else if (item.type == "number-box") {
          let obj = {
            type: "number-box",
            label: "数字",
            name: "my-number-box" + this.$u.guid(),
            value: 25,
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "slider") {
          let obj = {
            type: "slider",
            label: "滑块：",
            max: "100",
            min: "0",
            step: "20",
            name: "my-slider" + this.$u.guid(),
            value: 0,
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "common_input") {
          let obj = {
            type: "common_input",
            label: "普通输入框",
            name: "number" + this.$u.guid(),
            value: "",
            placeholder: "请输入普通输入框",
            rules: [
              {
                required: true,
                message: "请输普通输入框",
                // 可以单个或者同时写两个触发验证方式
                trigger: "blur,change",
              },
              {
                min: 5,
                message: "普通输入框不能少于5个字",
                trigger: "change,blur",
              },
            ],
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "time_picker") {
          let obj = {
            type: "time_picker",
            label: "时间选择器",
            name: "createTime" + this.$u.guid(),
            placeholder: "单击开始时间选择器",
            value: "",
            rules: [
              {
                required: true,
                message: "请输入时间",
                // 可以单个或者同时写两个触发验证方式
                trigger: "blur,change",
              },
            ],
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "single_select") {
          let obj = {
            type: "single_select",
            label: "单个选择框（母框）",
            name: "type" + this.$u.guid(),
            select_list: [
              {
                value: "0",
                label: "第一个对象",
              },
              {
                value: "1",
                label: "第二个对象",
              },
            ],
            placeholder: "单击选择设备类型",
            value: "",
            rules: [
              {
                required: true,
                message: "请选择设备类型",
                // 可以单个或者同时写两个触发验证方式
                trigger: "blur,change",
              },
            ],
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "single_select_child") {
          let obj = {
            type: "single_select_child",
            label: "单个选择框（子框）",
            name: "equipmentNum_name" + this.$u.guid(),
            parentName: "type",
            // context:子组件上下文
            // obj:母选择器值
            //单击时触发：callback :回调函数携带返回一个obj对象
            request_func: (context, obj, callback) => {
              let list = [];
              console.log(obj);
              setTimeout(() => {
                for (let i in [1, 2, 3, 4, 5]) {
                  let obj2 = {
                    label: obj + "的子对象",
                    value: obj + "的子对象",
                  };
                  list.push(obj2);
                }
                callback(list);
              }, 500);
            },
            select_list: [],
            placeholder: "单击选择设备",
            value: "",
            rules: [
              {
                required: true,
                message: "请选择设备",
                // 可以单个或者同时写两个触发验证方式
                trigger: "blur,change",
              },
            ],
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "single_button") {
          let obj = {
            type: "single_button",
            label: "简单的按钮",
            name: "select_component" + this.$u.guid(),
            click_func: (context) => {
              context.$refs.Form_Toast.show({
                title: "这是单击事件",
              });
            },
            btn_name: "单击简单的按钮",
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "password_input") {
          let obj = {
            type: "password_input",
            label: "密码",
            name: "password_input" + this.$u.guid(),
            value: "",
            placeholder: "请输入密码",
            rules: [
              {
                required: true,
                message: "请输入密码",
                // 可以单个或者同时写两个触发验证方式
                trigger: "blur,change",
              },
              {
                min: 5,
                message: "密码不能少于5个字",
                trigger: "change,blur",
              },
            ],
            passwordIcon: true, //是否显示查看密码
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "range_calendar") {
          let obj = {
            type: "range_calendar",
            label: "范围性的日历",
            name: "rangeCalendar" + this.$u.guid(),
            value: "",
            placeholder: "请输入日历起始与截止时间",
            rules: [
              {
                required: true,
                message: "请输入日历起始与截止时间",
                // 可以单个或者同时写两个触发验证方式
                trigger: "blur,change",
              },
            ],
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "single_calendar") {
          let obj = {
            type: "single_calendar",
            label: "单选日历",
            name: "singleCalendar" + this.$u.guid(),
            value: "",
            placeholder: "请输入日历",
            rules: [
              {
                required: true,
                message: "请输入时间",
                // 可以单个或者同时写两个触发验证方式
                trigger: "blur,change",
              },
            ],
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "common_rate") {
          let obj = {
            type: "common_rate",
            label: "评分",
            name: "common_rate" + this.$u.guid(),
            count: 12,
            value: 6,
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "radio") {
          let obj = {
            type: "radio",
            label: "单选框",
            name: "my-radio" + this.$u.guid(),
            value: "apple",
            list: [
              {
                name: "apple",
                disabled: true,
              },
              {
                name: "banner",
                disabled: false,
              },
              {
                name: "orange",
                disabled: false,
              },
              {
                name: "watermelon",
                disabled: false,
              },
              {
                name: "peach",
                disabled: false,
              },
              {
                name: "admin",
                disabled: false,
              },
            ],
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "switch") {
          let obj = {
            type: "switch",
            label: "开关",
            name: "my-switch" + this.$u.guid(),
            value: true,
          };
          this.list.splice(index, 0, obj);
        }
      }

      ev.target.classList.remove("drapover");
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
    list: {
      handler(newN, o) {
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
.drapover {
  border-top-style: dotted;
}
</style>