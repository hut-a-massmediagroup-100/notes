import firebase from 'firebase'

declare module '@nuxt/vue-app' {
  interface Context {
    readonly $fireStore: firebase.firestore.Firestore
    readonly $fireStoreObj: typeof firebase.firestore
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface Context {
    readonly $fireStore: firebase.firestore.Firestore
    readonly $fireStoreObj: typeof firebase.firestore
  }
}
