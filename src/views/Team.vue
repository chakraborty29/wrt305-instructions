<template>
  <div class="rowt1">
    <h2 class="title">Raul Chakraborty</h2>
  </div>
  <div class="rowt2">
    <div class="colt1"></div>
    <div class="colt2">
      <div class="coltt">
        <p><img class="usabilityimg" src="@/assets/raul.png" /></p>
      </div>
      <p class="subtitle">
        I am Raul Chakraborty and I am in the class of 2023 at Syracuse University and studying toward a B.S. in
        Information Management and Technology concentrating in Web Design Management and Data Analytics with a minor in
        Computer Science. I picked up many skills in IT including programming languages such as Python, DevOps tools
        like Kubernetes and Docker and work as a Junior Web Developer for the University. While pursuing my passions, I
        joined the nations premier multicultural fraternity, Sigma Beta Rho to spread my culture to my fellow brothers
        and through this campus. I am looking to make a breakthrough in software development space as I am searching for
        internships to advanced my coding skills and looking to take on leadership roles.
      </p>
    </div>
    <div class="colt3"></div>
  </div>
  <hr />
  <div class="rowt1">
    <h2 class="title">Pendle Smith</h2>
  </div>
  <div class="rowt2">
    <div class="colt1"></div>
    <div class="colt2">
      <div class="coltt">
        <p><img class="usabilityimg" src="@/assets/IMG_3147.jpg" /></p>
      </div>
      <p class="subtitle">
        My name is Pendle Smith, I am a junior at Syracuse University and I am currently pursuing a bachelors in
        exercise science at Falk School of Sport & Human Dynamics. I work part-time as a personal trainer so in a way I
        get paid to tell people instructions. In addition to my personal training certification, I am also certified as
        a corrective exercise specialist. I am interested in the health sciences, and I am open to new opportunities.
      </p>
    </div>
    <div class="colt3"></div>
  </div>
  <hr />
</template>

<script>
export default {
  name: 'UsabilityReport',
};
</script>

<style lang="scss">
.rowt1 {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
.rowt2 {
  display: flex;
  justify-content: center;
}
.rowt2 .coltt {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2em;
}
.coltt p {
  text-align: center;
}
.colt1,
.colt3 {
  display: flex;
  flex-basis: 85%;
}
.usabilityimg {
  width: 20em;
  border-radius: 25px;
}
</style>
