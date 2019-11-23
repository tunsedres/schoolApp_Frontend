<template>
  <div>
    <b-jumbotron lead="">
      <b-row>
        <b-col cols="6" class="profile-box">
          <b-card header="Profil bilgilerinizi güncelleyin">
            <b-form @submit="onSubmitProfileUpdateForm" class="pb-xl-5">
                <b-form-group
                  id="input-group-1"
                  label="Ad:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="user.name"
                    requiredComponent reference
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Email:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="user.email"
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Güncelle</b-button>
          </b-form>
          </b-card>
        </b-col>
        <b-col cols="6">
          <b-card header="Çocuğunuzun bilgilerini girin">
            <add-student-form :student="student" :bus="bus"></add-student-form>
          </b-card>
        </b-col>

        <b-col cols="12">
          <div class="students">
            <b-card class="mt-3" header="Öğrenci Bilgileri" v-for="student in user.students">
              <pre class="m-0">
                <strong>Ad soyad: </strong>{{ student.name +' '+ student.surname }}
                <strong>Öğrenci No: </strong>{{ student.student_number }}
                <strong>Kod numarası: </strong>{{ student.code }}
              </pre>
            </b-card>
          </div>

        </b-col>
      </b-row>
    </b-jumbotron>

  </div>
</template>

<script>
import AddStudentForm from '@/components/Student/AddStudent'
import Vue from 'vue'

export default {
  components:{
    AddStudentForm
  },
    data() {
      return {
        bus: new Vue(),
        user: {},
        studentExists: 0,
        student: {
          name: '',
          surname: '',
          student_number: ''
        },
      }
    },
    created() {
      this.bus.$on('addStudent', this.addStudent)
    },
    mounted() {
      axios.get('/api/profile').then(response => {
        this.user = response.data.data
        this.studentExists = this.user.students.length ? 1 : 0
      })
    },
    methods: {
      studentList(){
         axios.get('/api/profile').then(response => {
          this.user = response.data.data
          this.studentExists = this.user.students.length ? 1 : 0
        })
      },
      addStudent() {
        this.$store.dispatch('addStudent', this.student ).then(() => {
          this.student.name = ''
          this.student.surname = ''
          this.student.student_number = ''
          this.$toast.success('Çocuk başarıyla eklendi')
          this.studentList
        })
      },
      onSubmitProfileUpdateForm(evt) {
        evt.preventDefault();
        let payload = { 'name': this.user.name, 'email': this.user.email }
        axios.patch('/api/profile', payload).then(response => {
          this.$toast.success('Bilgileriniz güncellendi')
        })
      }
    }
}
</script>

<style scoped>
.img-thumbnail{
  width : 200px;
  height: 200px;
}
.pb-xl-5 {
  padding-bottom: 85px!important
}
</style>
