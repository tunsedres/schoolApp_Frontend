<template>
<b-form @submit="onSubmitStudentForm">
  <input-form :item="student" :field="'name'" label="Adı"></input-form>
  <input-form :item="student" :field="'surname'" label="Soyadı"></input-form>
  <input-form :item="student" :field="'student_number'" label="Öğrnci No"></input-form>
  <b-button type="submit" variant="primary">Ekle</b-button>
</b-form>
</template>

<script>
import InputForm from '@/components/common/InputForm'
export default {
  props: ['student', 'bus'],
  components:{
    InputForm
  },
  methods : {
    onSubmitStudentForm(evt) {
      evt.preventDefault()
      this.bus.$emit('addStudent')
    }
  }
}
</script>
