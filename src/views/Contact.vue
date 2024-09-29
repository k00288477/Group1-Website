<template>
	<main
		class="flex overflow-hidden flex-col items-center px-2 bg-white">
		<h1
			class="self-center mt-18 ml-4 text-4xl text-center text-black max-md:mt-10">
			Contact Me
		</h1>
		<div
        class="shrink-0 self-center mt-5 max-w-full border-blue-700 border-solid border-[3px] h-[5px] w-[861px]"></div>

		<p class="mt-12 text-2xl text-center text-black">
			CREATIVE | VISUAL | DESIGNER
		</p>
		<section class="mt-20 w-full max-w-[1350px] max-md:mt-5 max-md:max-w-full">
			<div class="flex gap-5 max-md:flex-col">
				<div class="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/536b5c8877ce06b774096968bc7dae00fe10216a511ccb9716bf3c127b543a3a?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
						alt="Designer's profile"
						class="object-contain w-full aspect-[1.23] rounded-[50px] max-md:mt-5 max-md:max-w-full" />
				</div>
				<div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
					<div
						class="flex flex-col mt-3.5 w-full max-md:mt-5 max-md:max-w-full">
						<form
							class="flex flex-col items-start pr-20 pl-2 text-2xl text-black max-md:pr-5 max-md:max-w-full"
							@submit.prevent="submitForm">
							<label for="fullName" class="text-xl">FULL NAME:</label>
							<input
								type="text"
								id="fullName"
								name="fullName"
								class="mt-2 w-[603px] max-md:mt-5 max-md:w-full border-b border-black"
								aria-label="Enter your full name"
								v-model="formData.fullName" />

							<label
								for="email"
								class="mt-5 text-xl"
								>EMAIL:</label
							>
								<input
								type="email"
								id="email"
								name="email"
								class="mt-2 w-[603px] max-md:mt-5 max-md:w-full border-b border-black"
								aria-label="Enter your email address"
								v-model="formData.email" />

							<label
								for="message"
								class="mt-5 text-xl"
								>MESSAGE:</label
							>
								<textarea
								id="message"
								name="message"
								class="mt-2 w-[604px] max-md:mt-5 max-md:w-full border-b border-black"
								aria-label="Enter your message"
								v-model="formData.message"></textarea>
                <span
                    class="mt-12 mb-0"
                    id="formErrorMsg"
                    style="color: red"></span>
							<div class="flex flex-row gap-10 mt-2 max-md:mt-5">
								<button
									type="submit"
									class="p-4 m-4 mt-0 max-w-full text-3xl text-center text-white bg-amber-400 rounded-md w-[350px] max-md:px-5 hover:bg-amber-200">
									CONTACT ME
								</button>
								<div class="flex flex-auto gap-4 my-auto">
                  <a
                      href="#"
                      aria-label="Social media link 1">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fdadf5c97be551341a48ab6f8c726d17e380ac3ffe405e8e1a54f68a22146a8?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
                        alt=""
                        class="object-contain shrink-0 w-16 aspect-square" />
                  </a>
                  <a
                      href="#"
                      aria-label="Social media link 2">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c57124d157dfb3ad8ce667e9e2b7c3636d5c5ad633aac77ad9e5b33b2d1ff9f?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
                        alt=""
                        class="object-contain shrink-0 w-16 aspect-square" />
                  </a>
                  <a
                      href="#"
                      aria-label="Social media link 3">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8b7e3170548c4041422144c638188bfee4ae4d3cca2335cb9f324fc3141bf08?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
                        alt=""
                        class="object-contain shrink-0 w-16 aspect-square" />
                  </a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  fullName: '',
  email: '',
  message: ''
});

const submitForm = () => {
  if (formData.value.fullName && formData.value.email && formData.value.message) {
    document.getElementById('formErrorMsg').style.color = 'green';
    document.getElementById('formErrorMsg').innerHTML = 'Thank You, Your query has been submitted';
    // clear all fields
    formData.value.fullName = '';
    formData.value.email = '';
    formData.value.message = '';
  } else {
    document.getElementById('formErrorMsg').innerHTML = '* Please fill all fields';
  }
};
</script>