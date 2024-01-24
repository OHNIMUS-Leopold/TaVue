<script setup>
  // Import éléments de vue
  import { ref, onMounted } from 'vue';
  // Import éléments de routage
  import { RouterLink, useRouter } from 'vue-router';
  const router = useRouter()

  // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE);

  
  // user connecté ? au départ faux
  let isConnected = ref(false)

  // Element de connexion
  let user = ref('')
  let psw = ref('')

  // User connecté
  let currentUser = ref(null)
  let avatar = ref(null)

// Au montage du composant
onMounted(async() => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = ()=>{
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      `${import.meta.env.VITE_URL_POCKETBASE}/api/files/`  // Adresse serveur et repertoire des fichiers image
      +currentUser.value.collectionId     // Id ou name de la collection concernée
      +"/"
      +currentUser.value.id               // Id de l'utilisateur connecté
      +"/"
      +currentUser.value.avatar           // Nom fichier image pocketbase
      +"?thumb=100x100"                   // Taille par défaut     

//      console.log("image avatar utilisateur", avatar)

  }
}

const connect = async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(user.value, psw.value)
//    console.log("connecté : ",authData)
    refresh()
    /////////////////////////////////
    if (pb.authStore.isValid) {
  // ...
  // Émettre un événement avec l'avatar
  const event = new CustomEvent('user-connected', {
    detail: {
      avatar: avatar.value,
    },
  });
  window.dispatchEvent(event);
  /////////////////////////////////
}    
  }catch(error){
//    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = ()=>{
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value=false
  avatar.value = null

  /////////////////////////////////
  // Émettre un événement de déconnexion
  const event = new CustomEvent('user-disconnected');
  window.dispatchEvent(event);
  /////////////////////////////////

  // Retour à la page d'accueil -> Redirection
  router.push({name:"home"})
}


const githublogin = async()=>{
  await pb.collection("users").authWithOAuth2({ provider: "github" });
  refresh()
}

const register = async()=>{
  currentUser = await pb.collection("users").create({
    email: document.getElementById("email").value,
    password: document.getElementById("psw").value,
    passwordConfirm: document.getElementById("psw").value,
  });
  if (currentUser) {
    document.getElementById("status").innerHTML =
      "Attente de validation de l'email...";
    await pb
      .collection("users")
      .requestVerification(document.getElementById("email").value);
  }
}

const handleAvatarError = () => {
  // Lorsque l'avatar ne peut pas être chargé (erreur 404), affichez l'image par défaut
  avatar.value = null; // Réinitialisez avatar à null
}
</script>


<template>
    <div class="grid grid-cols-8">
        <div class="col-span-3"></div>
        <div class="col-span-2 mt-48 mb-60 border-solid border-[1px] border-grisEB rounded-md py-9">
            
            
            <div>     
              
              
              <div v-if="isConnected" class="text-center"> 
                <div class="contents">     
                  <div v-if="avatar" class="contents">
                    <img :src="avatar" class="rounded-full mx-auto" @error="handleAvatarError" style="max-width:100px;" />
                  </div>
                  <div v-else class="contents">
                    <img src="../assets/img/default.png" alt="Image par défaut" class="rounded-full mx-auto" style="max-width:100px;" />
                  </div>
                </div>
                <ul class="mt-4">
                  <li>{{ currentUser.nom }} {{ currentUser.prenom }}</li>
                  <li>{{ currentUser.email }}</li>
                </ul>
                <button class="text-base font-nunito font-semibold rounded-3xl text-blanc bg-noir11 py-[10px] px-[22px] mt-9" type="button" @click="deconnect">
                  Se déconnecter
                </button>
              </div>




              <form v-else class="flex flex-col" >
                  <h1 class="font-josefin font-medium text-xl text-gris66 text-center mb-4">
                      Connexion / Inscription
                  </h1>
                  <input class="outline-none text-sm font-nunito text-gris66 bg-blancF5 py-[10px] px-4 mx-8 mb-5" id="email" type="email" placeholder="Adresse Mail" v-model="user">
                  <input class="outline-none text-sm font-nunito text-gris66 bg-blancF5 py-[10px] px-4 mx-8" id="psw" placeholder="Mot de passe" v-model="psw">
                  <button>
                    <RouterLink to="#" class="flex text-sm font-nunito text-noir11 mt-2 mb-8 mx-8">
                      Mot de passe oublié ?
                    </RouterLink>
                  </button>
                  <div class="flex justify-center items-center space-x-5">
                    <button class="text-base font-nunito font-semibold rounded-3xl text-noir11 bg-gris66 bg-opacity-30 py-[10px] px-[22px]"
                        type="button" @click.prevent="connect">
                        Se connecter
                    </button>
                    <button class="text-base font-nunito font-semibold rounded-3xl text-blanc bg-noir11 py-[10px] px-[22px]" 
                        type="button" @click.prevent="register">
                      S'inscrire
                    </button>
                  </div>
                  <div class="mx-auto mt-3">
                    <button class="text-base font-nunito font-semibold rounded-3xl text-noir11 py-[10px] px-[22px] border-solid border-2 border-noir11"
                        type="button" @click.prevent="githublogin">
                        Connexion GitHub
                    </button>
                  </div>
                  <div class="mt-3">
                    <p id="status" class="text-center text-red-500 font-nunito text-sm font-bold"></p>
                  </div>
              </form>



          </div>
        </div>
        <div class="col-span-3"></div>
    </div>
</template>