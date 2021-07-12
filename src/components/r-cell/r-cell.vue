<template>
  <u-cell-group :title="title">
    <view
      v-for="(item, index) in list"
      :key="index"
      v-on:drop.native="drop($event, index)"
      v-on:dragover.native="dropover($event, index)"
      v-on:dragleave.native="dragleave($event, index)"
      v-on:dragstart.native="drag('swap', index)"
      draggable="true"
    >
      <u-cell-item
        :icon="item.icon"
        :title="item.title"
        :value="item.value"
        :arrow="item.arrow"
        @click="item.press"
        v-if="item.type === 'common_cell'"
      >
      </u-cell-item>
      <u-cell-item
        :icon="item.icon"
        :title="item.title"
        :arrow="item.arrow"
        v-if="item.type === 'radio'"
        @click="item.press"
      >
        <u-radio-group v-model="item.value">
          <u-radio
            v-for="(u_item, index2) in item.conf"
            :key="index2"
            :name="u_item.name"
            :disabled="u_item.disabled"
          >
            {{ u_item.name }}
          </u-radio>
        </u-radio-group>
      </u-cell-item>
      <u-cell-item
        :icon="item.icon"
        :title="item.title"
        :arrow="item.arrow"
        @click="item.press"
        v-if="item.type === 'tags'"
      >
        <u-tag
          v-for="(i, index3) in item.list"
          :key="index3"
          :text="i.text"
          :mode="i.mode"
        />
      </u-cell-item>
    </view>
  </u-cell-group>
</template>

<script>
export default {
  name: "r-cell",
  data() {
    return {
      bcshow: false,
    };
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    drop(ev, index) {
      if (item.operation == "swap") {
        
        let obj = this.list[index];
        this.list[index] = this.list[item.index];
        this.list[item.index] = obj;
        this.list.push()
        
      } else if (item.operation == 'add') {
        if (item.contain != "r-cell") {
          return;
          
        }
        if (item.type == "common_cell") {
          let obj = {
            type: item.type,
            title: "新增",
            value: "数值",
            arrow: true,
            arrow_direction: "down",
            press: () => {},
          };
          //this.list.push(obj);
          this.list.splice(index, 0, obj);
        } else if (item.type == "radio") {
          let obj = {
            type: "radio",
            title: "单选（是，否）",
            value: "是",
            arrow: false,
            arrow_direction: "up",
            conf: [
              {
                name: "是",
                disabled: false,
              },
              {
                name: "否",
                disabled: true,
              },
              {
                name: "不是",
                disabled: true,
              },
              {
                name: "第4个",
                disabled: true,
              },
            ],
            press: () => {},
          };
          this.list.splice(index, 0, obj);
        } else if (item.type == "tags") {
          let obj = {
            type: "tags",
            title: "标签",
            list: [
              {
                text: "plain",
                mode: "plain",
              },
              {
                text: "dark",
                mode: "dark",
              },
              {
                text: "light",
                mode: "light",
              },
            ],
            press: () => {},
          };
          this.list.splice(index, 0, obj);
          
        }
        
      console.log(this.list);
      }

      ev.target.classList.remove("drapover");

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
  },
};
</script>

<style lang="scss">
.drapover {
  border-top-style: dotted;
}
</style>