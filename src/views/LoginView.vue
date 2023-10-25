<script setup>
  // Import éléments de vue
  import { ref, onMounted } from 'vue';
  // Import éléments de routage
  import { useRouter } from 'vue-router';
  const router = useRouter()

  // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");

  
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
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
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
</script>


<template>
    <div class="grid grid-cols-8">
        <div class="col-span-3"></div>
        <div class="col-span-2 mt-48 mb-60 border-solid border-[1px] border-grisEB rounded-md">
            <h1 class="font-josefin font-medium text-xl text-gris66 text-center">
                Connexion / Inscription
            </h1>
        </div>
        <div class="col-span-3"></div>
    </div>

    <div class="">              
        <span v-if="isConnected"> 
        <img :src="avatar" class="" style="max-width:60px;" />
        <p class="">
            {{ currentUser.nom }}
        </p>
        <button class="" type="button" @click="deconnect">
            sign out
            </button>
        </span>

        <form v-else class="" >
            <input class="" placeholder="Login" v-model="user">
            <input class="" placeholder="Password" v-model="psw">
            <button class="" 
                type="button" @click.prevent="connect">
                connexion
            </button>
        </form>
    </div>
</template>