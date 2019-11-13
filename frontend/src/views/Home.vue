<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col cols="6">
          <h1>An <strong>easy</strong> and <strong>simple</strong> solution <br />
          to send SMS in your apps.</h1>
          <p class="home-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quod
            cupiditate ut saepe exercitationem. Harum ullam, pariatur quas nemo
            adipisci cumque! Nisi, repellat excepturi voluptatibus deleniti veritatis
            rerum officia praesentium?
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  padding: 100px 0 200px 0;
  min-height: 80vh;
  background: linear-gradient(to right, #2062cd, #4aa5f7);
  color: #FFFFFF;
  overflow: hidden;
  &:after {
    content: '';
    bottom: -100px;
    left: -500px;
    position: absolute;
    background: #FFF;
    width: 200%;
    transform: rotate(-5deg);
    height: 200px;
  }
  h1 {
    font-weight: 700;
    strong {
      font-weight: 900;
    }
  }
  &-description {
    font-size: 1.2em;
    padding-top: 50px;
  }
}
</style>
