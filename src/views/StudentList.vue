<template>
  <div>
    <b-table striped hover :items="items" :fields="fields" caption-top>
      <template v-slot:table-caption>Öğrenci listesi</template>
      <template v-slot:cell(index)="data">
        {{ data.index + 1 }}
      </template>

      <template v-slot:cell(name)="data">
        <router-link :to="`/admin/ogrenci-listesi/${data.item.id}`">{{ data.item.name }}</router-link>
      </template>

      <template v-slot:cell(parents)="data">
        {{ data.item.parent ? data.item.parent.name : '' }}
      </template>
    </b-table>
  </div>
</template>

<script>

import moment from 'moment'

export default {
    data() {
      return {
        fields: [
          { key: 'index', label: 'No' },
          { key: 'name', label: 'Adı' },
          { key: 'surname', label: 'Soyadı' },
          { key: 'code', label: 'Kod' },
          { key: 'created_at', label: 'Tarih', formatter: 'formatTime' },
          { key: 'parents', label: 'Veli Bilgisi' }
        ],
        items: []
      }
    },
    mounted() {
      axios.get('/api/admin/students').then(response => {
        this.items = response.data
      })
    },
    methods: {
      formatTime(dateTime) {
          return moment(dateTime).fromNow()
      },
      parentExist(item, type) {
        if(!item) return
        if(item.parent) return true
        else return false
      }
    }
}
</script>
