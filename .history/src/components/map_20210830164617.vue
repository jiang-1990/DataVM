<!--市选择器-->
<template>
  <div class="citySelect">
    <el-select
      v-model="displayValue"
      :clearable="clearable"
      placeholder="请选择"
      @change="selectChange"
      style="width: 100%"
    >
      <el-option
        v-for="item in options"
        :key="item[defaultProps.key]"
        :label="item[defaultProps.label]"
        :value="item[defaultProps.value]"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { queryCity } from "@/api/common/common";

export default {
  name: "citySelect",
  props: {
    value: {
      type: String,
    },
    pid: {
      type: String,
      default() {
        return false;
      },
    },
    clearable: {
      type: Boolean,
      default() {
        return false;
      },
    },
    defaultProps: {
      type: Object,
      default() {
        return {
          label: "cityName",
          value: "cityId",
          key: "key",
        };
      },
    },
  },
  data() {
    return {
      options: [],
      displayValue: this.value,
    };
  },
  mounted() {
    this.getCityData();
  },
  methods: {
    getCityData() {
      let params = {
        provinceId: this.pid || '',
      };
      queryCity(params).then((res) => {
        if (res.data) {
          this.options = res.data;
        }
      });
    },
    selectChange(val) {
      let item = this.options.filter((a) => a.dqCd === val)[0];
      this.$emit("input", val);
      this.$emit("select-change", item);
    },
  },
  watch:{
    value(val){
      this.displayValue = val
    },
    pid(val){
      if(val){
        // this.pid = val;
        this.getCityData();
      }

    }
  }
};
</script>
