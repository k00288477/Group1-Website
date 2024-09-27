<script setup>
</script>

<template>
	<nav class="bg-white text-black py-5 px-10">
		<div class="container mx-auto flex justify-between items-center">
			<div class="flex items-center">
        <router-link to="/">
				<img
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce89347dc726bac6403d8e5835146d62e4beab483f0994aecfa1dae2f06448c0?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
					alt="Logo"
					class="w-[70px] h-[70px] mr-5" />
        </router-link>
        <router-link to="/">
				<span class="text-lg font-semibold">Jenny Hughs</span>
        </router-link>
			</div>


			<div class="flex space-x-4">
				<router-link
					to="/"
					class="text-black hover:text-blue-500"
					active-class="text-accentBlue"
					>Home</router-link
				>
				<router-link
					to="/about"
					class="text-black hover:text-blue-500"
					active-class="text-accentBlue"
					>About</router-link
				>
				<router-link
					to="/portofolio"
					class="text-black hover:text-blue-500"
					active-class="text-accentBlue"
					>Portofolio</router-link
				>
				<router-link
					to="/contact"
					class="text-black hover:text-blue-500"
					active-class="text-accentBlue"
					>Contact</router-link
				>
			</div>
		</div>
	</nav>
</template>
