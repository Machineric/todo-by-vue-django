<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg eric-navbar">
      <router-link class="navbar-brand mr-auto mr-sm-0" to="/">
        <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
        오늘의일
      </router-link>
      <div class="w-sm-100 d-md-block" id="navbarNav">
        <ul class="eric-navbar__items">
          <li class="">
            <router-link class="nav-link" to="today">오늘 <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="">
            <router-link class="nav-link" to="tomorrow">내일</router-link>
          </li>
          <li class="">
            <router-link class="nav-link" to="someday">언젠가</router-link>
          </li>
        </ul>
      </div>
      <div class="search__section">
        <TodoSearchBar/>
      </div>
      <div class="eric-navbar__right w-lg-100 w-sm-10 d-inline-block ml-auto">
        <i class="far fa-bell"></i>
        <button class="eric-button">로그인하기</button>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import TodoSearchBar from '@/components/todos/TodoSearchBar.vue'

export default {
  components: {
    TodoSearchBar,
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Nanum Myeongjo', serif;
  color: #6273b5 !important;
}

::selection {
  background: #ff9899;
  color: #6273b5 !important;
}

.eric-navbar {
  background: white;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15);
}

.eric-navbar__right {
  margin-right: 30px;
  height: 100%;
}

.eric-searchBar {
  outline: none;
  border: none;
  padding: 8px 8px 8px 40px;
  box-shadow: 0 2px 0 0 #6273b5;
}

.search__section {
  margin: 0 auto;
}

.eric-navbar__items {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 24px;
  list-style-type: none;
}

.eric-button {
  display: inline-block;
  border: none;
  background: none;
  height: 100%;
  margin-left: 30px;
}

.eric-button:focus {
  outline: none;
}
</style>
