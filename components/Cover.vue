<template>
  <div class="cover" data-image="~/assets/images/parallax.jpg">
    <div class="page-top">
      <div class="container">
        <div class="columns">
          <div class="column is-12">
            <slot name="title"></slot>
          </div>
        </div>
        <div class="columns">
          <div class="column is-12 has-center">
            <nav class="breadcrumb is-center" aria-label="breadcrumbs">
              <slot name="breadcrumb"></slot>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .cover {
    min-height: 270px;
    position: relative;
    background-size: cover;
    background-image: url('~/assets/images/parallax.jpg');
  }
  .breadcrumb {
    float: none;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
    background: none;
    padding: 0px;
    margin-top: 8px;
    margin-bottom: 0px;
    display: block;
    text-align: center;
  }
  .cover:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background-image: linear-gradient(127deg, #384DFF 0%, #24CDFF 91%);
    z-index: 2;
    opacity: 0.85;
  }
  .page-top {
    position: absolute;
    width: 100%;
    bottom: 50px;
    z-index: 3;
  }
  .cover .page-top h1 {
    font-weight: 400;
    font-size: 36px;
    line-height: 46px;
    letter-spacing: 1.4px;
    color: #fff;
    text-align: center;
  }

  .cover .page-top .breadcrumb {
    float: none;
    -webkit-border-radius: 0px;
    -moz-border-radius: 0px;
    border-radius: 0px;
    background: none;
    padding: 0px;
    margin-top: 8px;
    margin-bottom: 0px;
    display: block;
    text-align: center;
  }
  .breadcrumb li {
    font-weight: 400;
    font-size: 14px;
    color: #F7F8FF;
    line-height: 30px;
  }

  .breadcrumb li a {
    font-weight: 400;
    font-size: 14px;
    color: #fff;
  }
</style>
