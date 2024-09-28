<template>
	<main
		class="flex overflow-hidden flex-col items-center px-2 bg-white">
		<h1
			class="self-center mt-1 ml-4 text-4xl text-center text-black max-md:mt-5">
			CONTACT ME
		</h1>
		<div
			class="shrink-0 mt-1 ml-7 max-w-full border-blue-700 border-solid border-[3px] h-[5px] w-[1043px]"></div>
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
								class="mt-16 w-[603px] max-md:mt-5 max-md:w-full border-b border-black"
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
								class="mt-16 w-[603px] max-md:mt-5 max-md:w-full border-b border-black"
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
								class="mt-20 w-[604px] max-md:mt-5 max-md:w-full border-b border-black"
								aria-label="Enter your message"
								v-model="formData.message"></textarea>

							<div class="flex flex-wrap gap-10 mt-20 max-md:mt-5">
								<button
									type="submit"
									class="p-4 m-4 max-w-full text-3xl text-center text-white bg-amber-400 rounded-md w-[350px] max-md:px-5 hover:bg-amber-200">
									CONTACT ME
								</button>
								<div class="flex flex-auto gap-4 my-auto">
										<a
											href="#"
											aria-label="Social media link 1">
											<img
												loading="lazy"
												src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9e51661c42e4786ecf1b3dfe78811d0656c41fd83f45c9386fbfa5eae0286c1?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
												alt=""
												class="object-contain shrink-0 aspect-[1.26] w-[50px]" />
										</a>
										<a
											href="#"
											aria-label="Social media link 2">
											<img
												loading="lazy"
												src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e495d489a69828d8a9e5ae776839bb648a1e76d26b422254daab75ebf12a064?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
												alt=""
												class="object-contain shrink-0 aspect-[1.26] w-[50px]" />
										</a>
										<a
											href="#"
											aria-label="Social media link 3">
											<img
												loading="lazy"
												src="https://cdn.builder.io/api/v1/image/assets/TEMP/d04e3acb39b58c3c5489c746d7e38181b546653f77ca88609897df66eb9f2040?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
												alt=""
												class="object-contain shrink-0 aspect-[1.28] w-[50px]" />
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
    alert('Message sent successfully!');
  } else {
    alert('Please fill in all the fields.');
  }
};
</script>