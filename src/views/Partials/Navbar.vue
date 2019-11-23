<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Okul</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/">Anasayfa</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right v-if="isUserLogin">
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em v-text="userCheck().name"></em>
          </template>
          <b-dropdown-item href="/profilim">Profilim</b-dropdown-item>
          <b-dropdown-item v-if="isAdmin()" href="/admin/ogrenci-ekle">Öğrenci Ekle</b-dropdown-item>
          <b-dropdown-item v-if="isAdmin()" href="/admin/ogrenci-listesi">Öğrenci Listesi</b-dropdown-item>
          <b-dropdown-item href="javascript:;" @click="logout()">Çıkış</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="/kayit-ol" v-show="!isUserLogin">Kaydol</b-nav-item>
        <b-nav-item href="/giris" v-show="!isUserLogin">Giriş</b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
      ...mapState([
        'isUserLogin'
      ])
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/giris')
        })
      },
      isAdmin: function () {
          let user = this.$store.state.currentUser
          if(user && user.roles && user.roles.length && user.roles[0].name.indexOf('admin') === 0)
          return true
          return false;
      },
      userCheck: function () {
          return this.$store.state.currentUser
      },
    }
}
</script>
