<template>
    <div class="main">
        <div>I'm {{userdata[0]}}</div>
    </div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { ref } from 'vue'

const userdata: {
    userID: number;
    userName: string;
    userPassword: string;
    userSex: string;
    userPhone: string;
    userEmail: string;
    userAvator: string;
    userIsadmin: string;
    createTime: Date;
    updateTime: Date;
}[] = ref([])
axios.get('/api/user').then((res: any) => {
  userdata.value = res.data.data
  console.log(JSON.parse(JSON.stringify(userdata.value))[0])
})
</script>
