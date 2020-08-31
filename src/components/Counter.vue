<template>
  <div class="counter-container">
      <el-row class="img-container">
              <img src="../assets/hamburger.jpeg" width="30%" height="30%">
              <h2>好吃的汉堡点几个呢？</h2>
              <h2>要{{$store.state.count}}个！</h2>
      </el-row>
    <el-row>
      <el-col :span="12">
        <el-card shadow="hover">
          <el-button @click="btnHandler1">+1</el-button>
           <el-button @click="btnHandler3">+3</el-button>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <el-button @click="btnHandlerminus1">-1</el-button>
          <el-button @click="btnHandlerminus3">-3</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
      btnHandler1() {
          this.$store.commit('add')
      },
      btnHandler3() {
          this.$store.dispatch('addAsync')
      },
      btnHandlerminus1() {
          this.$store.commit('minus')
      },
      btnHandlerminus3() {
           this.$store.dispatch('minusAsync')
      }
  }
};
</script>
<style scoped>
.counter-container {
}
.img-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>