<template>
  <el-dropdown :show-timeout="100" trigger="click">
    <el-button plain>
      {{ status ?  'Status: Active' : 'Status: Inactive' }}
      <i class="el-icon-caret-bottom el-icon--right" />
    </el-button>
    <el-dropdown-menu slot="dropdown" class="no-padding">
      <el-dropdown-item>
        <el-radio-group v-model="status" style="padding: 10px;">
          <el-radio :label="true">
            Active
          </el-radio>
          <el-radio :label="false">
            Inactive
          </el-radio>
        </el-radio-group>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    value: {
      default: 0
    }
  },
  computed: {
    status: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
