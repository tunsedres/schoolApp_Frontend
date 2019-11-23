<template>
  <div>
    <b-row>
        <b-col cols="6" class="profile-box mt-3">
          <b-card header="Öğrenci detay bilgileri">
              <p>Adı: {{ student.name }}</p>
              <p>Soyadı: {{ student.surname }}</p>
              <p>Öğrenci No: {{ student.student_number }}</p>
          </b-card>
        </b-col>
    </b-row>
  </div>
</template>

<script>

import moment from 'moment'

export default {
    data() {
      return {
          student: {}
      }
    },
    mounted() {
      axios.get('/api/admin/students/' + this.$route.params.id).then(response => {
        this.student = response.data.data
      })
    },
}
</script>
