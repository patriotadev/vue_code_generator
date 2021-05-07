<template>
    <div class="main-menu">
      <div v-if="success">
        <h3>Nama : {{nama}}</h3>
        <h3>Email : {{email}}</h3>
        <h3>Alamat : {{alamat}}</h3>
        <h1>{{code}}</h1>
        <small style="color: red">Halaman akan direload dalam 10 Detik!</small>
      </div>

      <div v-else>
        <div id="nama">
            <label for="">Nama</label>
            <input type="text" v-model="nama">
        </div>
        <div id="email">
            <label for="">Email</label>
            <input type="text" v-model="email">
        </div>
        <div id="alamat">
            <label for="">Alamat</label>
            <input type="text" v-model="alamat">
        </div>
        <div id="generate-btn">
            <button @click="generate()">Generate</button>
        </div>
      </div>
    </div>

</template>

<script>
//import ShowCode from './ShowCode.vue';

export default {
    data : function() {
    return {
      nama : '',
      email : '',
      alamat : '',
      code : '',
      success: false
    }
  },
  methods: {
    generate : function() {
      this.code = btoa(Math.random());
      this.success = true

      setInterval(() => {
        window.location.reload()
      }, 10000);
    }
  },
  components: {
 // 'show' : ShowCode,
  }
}
</script>

<style>
    
</style>