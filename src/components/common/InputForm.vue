<template>
  <div>
      <b-form-group
      id="input-group-1"
      :label="label+':'"
      label-for="input-1"
    >
      <b-form-input
        id="input-1"
        v-model="item[field]"
        requiredComponent reference
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props:['item', 'field','label']
}
</script>
