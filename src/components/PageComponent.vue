<template>
  <div :class="`flex justify-center items-center min-h-screen p-8 ${bgColor}`">
    <div class="container max-w-screen-md">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: ''
    }
  }
}
</script>