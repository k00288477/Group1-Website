<script setup>

</script>

<template>
  <nav class="bg-gray-500 text-white py-5 px-10">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <img src="#" alt="Logo" class="w-10 h-10 mr-2" />
        <span class="text-lg font-semibold">Person Name</span>
      </div>
      <div class="flex space-x-4">
        <router-link to="/" class="text-white hover:text-gray-300">Home</router-link>
        <router-link to="/about" class="text-white hover:text-gray-300">About</router-link>
        <router-link to="/portofolio" class="text-white hover:text-gray-300">Portofolio</router-link>
        <router-link to="/contact" class="text-white hover:text-gray-300">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

