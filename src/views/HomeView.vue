<script setup>
import { ref, computed, onMounted } from 'vue';


function slideToBanner(direction) {
  const bannerContainer = document.getElementById('bannerContainer');
  const scrollOffset = direction === 'left' ? -bannerContainer.offsetWidth : bannerContainer.offsetWidth;
  bannerContainer.scrollTo({
    left: bannerContainer.scrollLeft + scrollOffset,
    behavior: 'smooth',
  });
}


const currentBannerIndex = ref(0);

onMounted(() => {
  const bannerContainer = document.getElementById('bannerContainer');

  if (bannerContainer) {
    bannerContainer.addEventListener('scroll', () => {
      currentBannerIndex.value = Math.round(bannerContainer.scrollLeft / bannerContainer.offsetWidth);
    });
  }
});

const isBanner1Visible = computed(() => currentBannerIndex.value === 0);


</script>



<template>
  <div>
    <div id="bannerContainer" class="flex overflow-x-scroll snap-x snap-mandatory">
          <img class="snap-start" src="../assets/img/banner1.png" alt="Banière 1">
          <img class="snap-start" src="../assets/img/banner2.png" alt="Banière 2">
    </div>
    
    <div class="flex items-center justify-between mx-14 -mt-[16%]">
      <div>
        <button id="slideLeft" class="px-3 pt-1 pb-2 bg-noir11 rounded-full text-blanc outline-none" @click="slideToBanner('left')">&lt</button>
      </div>
      <div>
        <button id="slideRight" class="px-3 pt-1 pb-2 bg-noir11 rounded-full text-blanc outline-none" @click="slideToBanner('right')">></button>
      </div>
    </div>
  </div>

  
   
  <div v-if="isBanner1Visible" class="px-[10%] -mt-[7%] transition-opacity duration-300 ease-in-out">
    <p class="text-sm font-bold uppercase font-nunito text-blanc">
      Réduction de bienvenue : -40%
    </p>
    <h2 class="my-9 text-5xl font-medium capitalize font-josefin text-blanc">
      Personnalisez <br>Votre première paire !
    </h2>
    <p>
      <RouterLink to="/configurateur" class="py-2 px-6 bg-blanc text-noir11 font-nunito font-bold text-sm uppercase rounded-3xl">
        Personnaliser
      </RouterLink>
    </p>
  </div>

  <div v-if="!isBanner1Visible" class="px-[10%] -mt-[7%] transition-opacity duration-300 ease-in-out">
    <p class="text-sm font-bold uppercase font-nunito text-blanc">
      nouveau matériau disponible
    </p>
    <h2 class="my-9 text-5xl font-medium capitalize font-josefin text-blanc">
      Découvrez les <br>montures en bois !
    </h2>
    <p>
      <RouterLink to="/configurateur" class="py-2 px-6 bg-blanc text-noir11 font-nunito font-bold text-sm uppercase rounded-3xl">
        Découvrir
      </RouterLink>
    </p>
  </div>



  <div class="h-[101px]"></div>

</template>




<style>

#bannerContainer::-webkit-scrollbar {
  width: 0;
  height: 0; /* Remove the scrollbar width */
}

</style>