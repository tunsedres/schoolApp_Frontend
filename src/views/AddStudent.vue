<template>
  <div>
    <b-row>

      <b-col md="6" offset-md="3">
        <b-form @submit="onSubmit" @reset="onReset">

          <b-form-group id="input-group-2" label="Ad:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="student.name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Soyad:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="student.surname"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Okul Numarası" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="student.student_number"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Ekle</b-button>

        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import InputForm from '@/components/common/InputForm'
export default {

  data(){
    return{
      student: {
        name: '',
        surname: '',
        student_number: ''
      },
      students: []
    }
  },
  methods: {
      onSubmit(evt) {
        evt.preventDefault()
        this.$store.dispatch('addStudentByAdmin', this.student ).then(() => {
          this.student.name = ''
          this.student.surname = ''
          this.student.student_number = ''
          this.$toast.success('Çocuk başarıyla eklendi')
          this.studentList
          this.$router.push({name: "studentList"})
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.student.surname = '',
        this.student.student_number = ''
        this.student.name = ''
      },
      studentList() {
        this.students = this.$store.state.students
      }
  }
}
</script>
