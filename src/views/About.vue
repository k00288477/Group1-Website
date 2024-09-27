<template>
	<main
		class="flex overflow-hidden flex-col pt-5 bg-white ">
		<section
			class="flex flex-col items-start px-12 w-full max-md:px-5 max-md:max-w-full">
			<h1
				class="self-center mt-18 ml-4 text-4xl text-center text-black max-md:mt-10">
				About Me
			</h1>
			<div
				class="shrink-0 self-center mt-5 max-w-full border-blue-700 border-solid border-[3px] h-[5px] w-[861px]"></div>
			<div
				class="self-end mt-20 w-full max-w-[1287px] max-md:mt-10 max-md:max-w-full">
				<div class="flex gap-5 max-md:flex-col">
					<div class="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/2efd5b94087f76b67163b4437a5f645b15c432338ef7e275bf0c95b6d2873be3?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
							alt="Graphic designer's portfolio image"
							class="object-contain self-stretch my-auto w-full aspect-[1.84] rounded-[50px] max-md:mt-10 max-md:max-w-full" />
					</div>
					<div class="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
						<div class="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
							<h2 class="text-3xl font-bold text-black w-[424px] cinzel-decorative-bold">
								GRAPHIC <br />DESIGNER
							</h2>
							<p
								class="mt-12 text-xl text-black max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
								I'm Jenny Hughes. I am passionate about Graphic Design and
								specialize in digital design and print media. With a keen eye
								for detail and a love for creative problem-solving.
							</p>
							<p
								class="mt-12 text-xl text-black max-md:mt-10 max-md:max-w-full">
								I strive to bring ideas to life through visually compelling and
								effective design solutions. My goal is to craft designs that not
								only look stunning but also communicate clear messages and drive
								engagement.
							</p>
							<div
								class="flex flex-wrap gap-5 justify-between mt-8 max-w-full w-[506px]">
                <router-link to="/contact">
								<button
									class="px-12 py-4 text-2xl font-bold text-center text-white bg-amber-400 rounded-md max-md:px-5 hover:bg-amber-200"
                >
									Hire Me!
								</button>
                </router-link>
								<div class="flex gap-3.5 self-start">
									<a href="https://www.linkedin.com/">
                  <img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fdadf5c97be551341a48ab6f8c726d17e380ac3ffe405e8e1a54f68a22146a8?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
										alt="Social media icon 1"
										class="object-contain shrink-0 w-16 aspect-square" />
                  </a>
                  <a href="https://github.com/">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c57124d157dfb3ad8ce667e9e2b7c3636d5c5ad633aac77ad9e5b33b2d1ff9f?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
										alt="Social media icon 2"
										class="object-contain shrink-0 w-16 aspect-square" /></a>
                  <a href="https://www.figma.com">
									<img
										loading="lazy"
										src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8b7e3170548c4041422144c638188bfee4ae4d3cca2335cb9f324fc3141bf08?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
										alt="Social media icon 3"
										class="object-contain shrink-0 w-16 aspect-square" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="flex gap-3 mt-28 ml-24 max-md:mt-10 max-md:ml-2.5">

        <button
          @click="expandCollapse(1)"
        type="button"
          class="flex justify-between"
        >
            <span class="text-2xl">WORK EXPERIENCE</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d530ca9edbd7a290fd48bff2a28a6334b44a299727965e7fc0aed6f0ca8e00dc?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
            alt=""
            class="object-contain shrink-0 self-start mt-2 w-14 aspect-[2.67]"
            :class="['object-contain', isRotated1 ? 'rotate-180' : '']"/>
        </button>
      </div>

<!--section 1-->
			<div
				class="shrink-0 mt-3 ml-24 max-w-full border-blue-700 border-solid border-[3px] h-[3px] w-[315px] max-md:ml-2.5" id="section1-Content"></div>
			<div  v-if="isExpanded1"
				class="self-end mt-3 mr-9 w-full max-w-[1210px] max-md:mr-2.5 max-md:max-w-full">
				<div class="flex gap-5 max-md:flex-col">
					<div class="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
						<div
							class="mt-6 text-2xl text-black max-md:mt-10 max-md:max-w-full">
							<h3 class="font-bold">Branding Redesign - E-commerce Company</h3>
							<ul>
								<li>
									Led a complete rebranding, including logo design and marketing
									materials, boosting brand recognition by 25%
								</li>
							</ul>
							<h3 class="font-bold mt-4">UI/UX Design - Mobile App</h3>
							<ul>
								<li>
									Created user-centered UI/UX designs for a fitness app,
									improving user retention by 15%.
								</li>
							</ul>
							<h3 class="font-bold mt-4">
								Website Redesign - Non-Profit Organization
							</h3>
							<ul>
								<li>
									Redesigned the website with a focus on user experience,
									resulting in a 40% increase in donations.
								</li>
							</ul>
						</div>
					</div>
					<div class="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd8acd5dc39274377154e640963027346391c99f0719614f1252b3a22fc306a1?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
							alt="Work experience illustration"
							class="object-contain w-full aspect-[2.1] rounded-[30px] max-md:mt-10" />
					</div>
				</div>
			</div>

<!--      button2-->
      <button
          @click="expandCollapse(2)"
          type="button"
          class="flex justify-between items-center w-full max-w-28 ml-24 mt-3"
      >
        <span class="text-2xl">EDUCATION</span>
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d530ca9edbd7a290fd48bff2a28a6334b44a299727965e7fc0aed6f0ca8e00dc?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
            alt=""
            class="object-contain shrink-0 self-start mt-2 w-14 aspect-[2.67]"
            :class="['object-contain', isRotated2 ? 'rotate-180' : '']"/>
      </button>


      <!--section 2-->
      <div
          class="shrink-0 mt-3 ml-24 max-w-full border-blue-700 border-solid border-[3px] h-[3px] w-[315px] max-md:ml-2.5" id="section1-Content"></div>
      <div  v-if="isExpanded2"
            class="self-end mt-3 mr-9 w-full max-w-[1210px] max-md:mr-2.5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <div
                class="mt-6 text-2xl text-black max-md:mt-10 max-md:max-w-full">
              <h3 class="font-bold">Branding Redesign - E-commerce Company</h3>
              <ul>
                <li>
                  Led a complete rebranding, including logo design and marketing
                  materials, boosting brand recognition by 25%
                </li>
              </ul>
              <h3 class="font-bold mt-4">UI/UX Design - Mobile App</h3>
              <ul>
                <li>
                  Created user-centered UI/UX designs for a fitness app,
                  improving user retention by 15%.
                </li>
              </ul>
              <h3 class="font-bold mt-4">
                Website Redesign - Non-Profit Organization
              </h3>
              <ul>
                <li>
                  Redesigned the website with a focus on user experience,
                  resulting in a 40% increase in donations.
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd8acd5dc39274377154e640963027346391c99f0719614f1252b3a22fc306a1?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
                alt="Work experience illustration"
                class="object-contain w-full aspect-[2.1] rounded-[30px] max-md:mt-10" />
          </div>
        </div>
      </div>

<!--      button3-->
      <button
          @click="expandCollapse(3)"
          type="button"
          class="flex justify-between ml-24 mt-3"
      >
        <span class="text-2xl">WORK EXPERIENCE</span>
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d530ca9edbd7a290fd48bff2a28a6334b44a299727965e7fc0aed6f0ca8e00dc?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
            alt=""
            class="object-contain shrink-0 self-start mt-2 w-14 aspect-[2.67]"
            :class="['object-contain', isRotated3 ? 'rotate-180' : '']"/>
      </button>


      <!--section 3-->
      <div
          class="shrink-0 mt-3 ml-24 max-w-full border-blue-700 border-solid border-[3px] h-[3px] w-[315px] max-md:ml-2.5" id="section1-Content"></div>
      <div  v-if="isExpanded3"
            class="self-end mt-3 mr-9 w-full max-w-[1210px] max-md:mr-2.5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
            <div
                class="mt-6 text-2xl text-black max-md:mt-10 max-md:max-w-full">
              <h3 class="font-bold">Branding Redesign - E-commerce Company</h3>
              <ul>
                <li>
                  Led a complete rebranding, including logo design and marketing
                  materials, boosting brand recognition by 25%
                </li>
              </ul>
              <h3 class="font-bold mt-4">UI/UX Design - Mobile App</h3>
              <ul>
                <li>
                  Created user-centered UI/UX designs for a fitness app,
                  improving user retention by 15%.
                </li>
              </ul>
              <h3 class="font-bold mt-4">
                Website Redesign - Non-Profit Organization
              </h3>
              <ul>
                <li>
                  Redesigned the website with a focus on user experience,
                  resulting in a 40% increase in donations.
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd8acd5dc39274377154e640963027346391c99f0719614f1252b3a22fc306a1?placeholderIfAbsent=true&apiKey=66f6f26cd02343ab858f9a105dd7107f"
                alt="Work experience illustration"
                class="object-contain w-full aspect-[2.1] rounded-[30px] max-md:mt-10" />
          </div>
        </div>
      </div>


		</section>
	</main>
</template>
<script setup>
import { ref } from 'vue';

// Create a reactive state for each button's expansion
const isExpanded1 = ref(false);
const isExpanded2 = ref(false);
const isExpanded3 = ref(false);
const isRotated1 = ref(false);
const isRotated2 = ref(false);
const isRotated3 = ref(false);

function expandCollapse(index) {
  if (index === 1) {
    isExpanded1.value = !isExpanded1.value;
    isRotated1.value = !isRotated1.value;
  } else if (index === 2) {
    isExpanded2.value = !isExpanded2.value;
    isRotated2.value = !isRotated2.value;
  } else if (index === 3) {
    isExpanded3.value = !isExpanded3.value;
    isRotated3.value = !isRotated3.value;
  }
}
</script>
