<template>
  <div id="app">
      <b-container>
        <b-jumbotron header="School XXX" lead="School XXX Sayfasına Hoş Geldiniz">
          <p>Daha fazla bilgi almak için linki tıklayınız</p>
          <b-btn variant="primary" href="/">Detay</b-btn>
        </b-jumbotron>

        <b-alert variant="success" :show="showAlert">Hello {{ name }}</b-alert>
      </b-container>
    </div>
</template>

<script>
export default {
  data: () => ({})
}
</script>
