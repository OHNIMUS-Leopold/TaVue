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

  <div class="grid grid-cols-7 mt-40">
    <div></div>
    <div class="col-span-5 grid grid-cols-2 gap-8">
      <div>
        <img src="../assets/img/fond01.png" alt="Réduction 1">
        <div class="-mt-[36%] ml-12 mr-48">
          <p class="text-noir11 font-bold text-sm font-josefin uppercase">
            jusqu'au 8 novembre
          </p>
          <h3 class="text-noir11 font-medium text-3xl font-josefin mt-4 mb-6">
            25% de Réduction sur  les Paires Métal
          </h3>
          <p>
            <RouterLink to="#" class="text-noir11 font-bold text-sm font-nunito bg-blanc rounded-3xl py-3 px-5">
              Commander Maintenant
            </RouterLink>
          </p>
        </div>
      </div>
      <div>
        <img src="../assets/img/fond02.png" alt="Réduction 2">
        <div class="-mt-[36%] ml-12 mr-48">
          <p class="text-noir11 font-bold text-sm font-josefin uppercase">
            Pendant 2 semaines
          </p>
          <h3 class="text-noir11 font-medium text-3xl font-josefin mt-4 mb-6">
            -5% sur Toutes les Paires Solaires
          </h3>
          <p>
            <RouterLink to="#" class="text-noir11 font-bold text-sm font-nunito bg-blanc rounded-3xl py-3 px-5">
              Commander Maintenant
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
    <div></div>
  </div>

  <div class="grid grid-cols-7 mt-40">
    <div></div>
    <div class="col-span-5 grid grid-cols-6">
      <div>
        <img src="../assets/img/shop/brand-08.png" alt="Magasin 1" class="max-w-[120px] mx-auto">
      </div>
      <div>
        <img src="../assets/img/shop/brand-03.png" alt="Magasin 2" class="max-w-[120px] mx-auto">
      </div>
      <div>
        <img src="../assets/img/shop/brand-04.png" alt="Magasin 3" class="max-w-[120px] mx-auto">
      </div>
      <div>
        <img src="../assets/img/shop/brand-05.png" alt="Magasin 4" class="max-w-[120px] mx-auto">
      </div>
      <div>
        <img src="../assets/img/shop/brand-07.png" alt="Magasin 5" class="max-w-[120px] mx-auto">
      </div>
      <div>
        <img src="../assets/img/shop/brand-08.png" alt="Magasin 1" class="max-w-[120px] mx-auto">
      </div>
    </div>
    <div></div>
  </div>

  <div class="grid grid-cols-7 py-16 border-solid border-b-0 border-x-0 border-noir border-opacity-10 border-[1px] mt-32">
    <div></div>
    <div class="col-span-5 grid grid-cols-4">
      <div class="grid grid-cols-5">
        <div class="col-span-4 text-center">
          <img class="mx-auto" src="../assets/img/brand/camion-icon.png" alt="Livraison">
          <h4 class="font-nunito font-bold text-noir11 text-base mb-1">Livraison rapide gratuite</h4>
          <p class="font-nunito text-gris66 text-sm">Livraison gratuite au-dessus de 100€</p>
        </div>
        <div class="h-34 border-solid border-y-0 border-l-0 border-noir opacity-10 border-[1px]"></div>
      </div>
      <div class="grid grid-cols-5">
        <div class="ml-12 col-span-4 text-center">
          <img class="mx-auto" src="../assets/img/brand/casque-icon.png" alt="Support">
          <h4 class="font-nunito font-bold text-noir11 text-base mb-1">Support en ligne</h4>
          <p class="font-nunito text-gris66 text-sm">24h/24, 7j/7</p>
        </div>
        <div class="h-34 border-solid border-y-0 border-l-0 border-noir opacity-10 border-[1px]"></div>
      </div>
      <div class="grid grid-cols-5">
        <div class="ml-12 col-span-4 text-center">
          <img class="mx-auto" src="../assets/img/brand/cadeau-icon.png" alt="Réductions">
          <h4 class="font-nunito font-bold text-noir11 text-base mb-1">Réductions</h4>
          <p class="font-nunito text-gris66 text-sm">Des réductions sur vos articles préférés</p>
        </div>
        <div class="h-34 border-solid border-y-0 border-l-0 border-noir opacity-10 border-[1px]"></div>
      </div>
      <div class="grid grid-cols-5">
        <div class="ml-12 col-span-4 text-center">
          <img class="mx-auto" src="../assets/img/brand/portfeuille-icon.png" alt="Paiement flexible">
          <h4 class="font-nunito font-bold text-noir11 text-base mb-1">Paiement flexible</h4>
          <p class="font-nunito text-gris66 text-sm">Paiement en plusieurs fois par carte</p>
        </div>
        <div class="h-34 border-solid border-y-0 border-l-0 border-noir opacity-10 border-[1px]"></div>
      </div>
    </div>
    <div></div>
  </div>

</template>




<style>

#bannerContainer::-webkit-scrollbar {
  width: 0;
  height: 0; /* Remove the scrollbar width */
}

</style>