<script setup lang="ts">
</script>

<template>
    <main>
        <section class="bg-[#f1f1f1]">
      <div class="container flex flex-col lg:flex-row items-center py-20 gap-10">
        <div class="flex-1 order-2 lg:order-1 text-center lg:text-left">
          <h1 class="text-4xl lg:text-6xl font-extrabold mb-6 text-balance">
            Master the Kitchen with Ease: Unleash Your Inner Chef Today!
          </h1>
          <p class="text-xl lg:text-2xl mb-8 text-balance">
            Discover recipes helping you to find the easiest way to cook.
          </p>
          <UButton to="#recipes" label="Browse Recipes" />
        </div>
        <div class="flex-1 order-1 lg:order-2">
          <NuxtImg
            sizes="xs:100vw sm:667px"
            src="/brownies_tradicional.jpeg"
            format="webp"
            densities="x1"
            alt=""
          />
        </div>
      </div>
    </section>
    
    </main>
</template>

