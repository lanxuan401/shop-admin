<template>
  <h1>HelloWorld</h1>
  <Foo msg="hello" />
  <abc />
</template>
<script lang="tsx" setup>
import Foo from './foo'
const abc = <h1>abc</h1>
</script>
