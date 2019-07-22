<template>
  <div class="todomvc">
    <section class="todoapp">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </section>
    <footer style="text-align:center;margin-top:120px;font:italic 700 16px">
      By <a href="https://github.com/Disiye" target="_blank">emilo@oocl.com</a>
    </footer>
  </div>
</template>

<script>
import Header from "@/components/header"
import Main from "@/components/main"
import Footer from "@/components/footer"
export default {
  name: 'todoHtml',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>

</style>
