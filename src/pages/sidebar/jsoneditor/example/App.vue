<template>
  <div class="example-json">
    <div class="example-demo">vue-json-editor demo</div>
    <vue-json-editor v-model="json" 
      :show-btns="true" 
      :mode="'code'" 
      lang="zh"
      @json-change="onJsonChange" 
      @json-save="onJsonSave" 
      @has-error="onError">   
    </vue-json-editor>
    <button type="button" @click="resetJson">reset</button>
  </div>
</template>

<script>
import vueJsonEditor from '../vue-json-editor.vue'
export default {
  data () {
    return {
      json: [
        {"name": "Dirk", "age": 1234},
        {"name": "Jason"}
      ]
    }
  },

  components: {
    vueJsonEditor
  },

  methods: {
    onJsonChange (value) {
      console.log('value:', value);
    },

    onJsonSave (value) {
      console.log('value:', value);
    },

    onError (value) {
      console.log('value:', value);
    },

    resetJson () {
      this.json = [
        {"name": "Dirk", "age": 1234},
        {"name": "Jason"}
      ]
    }
  }
}
</script>
