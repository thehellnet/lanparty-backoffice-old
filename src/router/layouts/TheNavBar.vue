<template>
  <nav class="flex items-center justify-between flex-wrap bg-primary p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-3xl tracking-tight">[hnt]</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        @click="toggleMenu"
      >
        <font-awesome-icon icon="bars"></font-awesome-icon>
      </button>
    </div>
    <div
      class="w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto lg:visible"
      :class="{'hidden': !showMenu}"
    >
      <router-link
        v-for="(nav, index) in navLinks"
        :key="nav.title"
        :to="nav.href"
        class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
        :class="{ 'mr-4': navLinks.length !== index }"
      >
        {{ nav.title }}
      </router-link>
      <a
        href="/login"
        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-primary hover:bg-white mt-4 lg:mt-0"
        >Login</a
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheNavBar",
  data() {
    return {
      navLinks: [
        { title: "Edit", href: "/edit" },
        { title: "About", href: "/about" }
      ],
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>
</style>
