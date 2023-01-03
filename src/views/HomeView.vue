<template>
    <div class="home">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            active-text-color="#409EFF"
            router
        >
            <template v-for="item in leftList" :key="item.index">
                <el-menu-item :index="item.index">{{ item.title }}</el-menu-item>
            </template>
            <div class="flex-grow" style="pointer-events: none;" />
            <template v-for="item in rightList" :key="item.index">
                <el-menu-item :index="item.index">{{ item.title }}</el-menu-item>
            </template>
        </el-menu>

        <!-- 路由过渡动效 -->
        <router-view v-slot="{ Component }">
        <!-- <transition name="move" mode="out-in"> -->
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        <!-- </transition> -->
        </router-view>
    </div>
</template>

<script lang="ts" setup>

const leftList: { index: string; title: string; }[] = [
  {
    index: '/main',
    title: 'LOGO'
  },
  {
    index: '/square',
    title: '广场'
  },
  {
    index: '/blog',
    title: '博客'
  }
]
const rightList: { index: string; title: string; }[] = [
  {
    index: '/resi',
    title: '居所'
  }
]
const activeIndex: string = leftList[0].title
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
