<template>
  <div class="rowd1">
    <div class="colw1"></div>
    <div class="colw2">
      <p class="subtitle">
        To: Lyndsey Weiner and WRT 307 <br />
        From: Raul Chakraborty and Pendle Smith <br />
        Date: April 4th, 2022 <br />
        <br />
        <br />

        Subject: Design of Instructions Memo
        <br />
        <br />
        <br />
        <br />

        <span class="underline text"><strong>Design Instruction Objectives</strong></span> <br />
        <span class="text">
          We wanted something easy and fun for our audience to build so we set out to look for a set with the minimum
          number of pieces required. A house with a car, the “American Dream” as they say, is what caught our attention
          and we decided to call it a Cozy House with Car. We tested our instructions and made sure they are clear and
          very easy to build and fun!
        </span>
        <br />
        <br />
        <br />
        <br />

        <span class="underline text"><strong>Instruction Elements:</strong></span> <br />
        <span class="text">
          We know how frustrating bad instructions can be. When you order something and you must build it yourself, but
          you can not because the instructions make no sense can make you mad, and it has happened to us multiple times.
          Therefore, we put a lot of emphasis on user testing to make sure our final product is easy and fun. We provide
          not only clear descriptions, but also clear images of each step, clear images of each piece and provide
          details on how many of each piece are available in the set. If you are ever to make a mistake throughout the
          process, we have documentation available for you to trace back.
        </span>
        <br />
        <br />
        <br />
        <br />

        <span class="underline text"><strong>Process of Building</strong></span> <br />
        <span class="text">
          With bad instructions, the process of building can be exhausting, and we have made sure not to do that. With
          multiple user testing and taking feedbacks and tweaking our instructions we have been able to create
          instructions that are easy to follow and that does not take too much of your time. One of our users during the
          testing phase was able to complete the set under 2 minutes, which beat our expectations and really proved to
          us that our instructions are clear cut and easy to follow.
        </span>
      </p>
    </div>
    <div class="colw3"></div>
  </div>
  <hr />
</template>

<script>
export default {
  name: 'Design',
};
</script>

<style lang="scss">
.rowd1 {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
.rowd2 .colwu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2em;
}
.colwu p {
  text-align: center;
}
.colw1,
.colw3 {
  display: flex;
  flex-basis: 25%;
}
.usabilityimg {
  width: 20em;
  border-radius: 25px;
}
.underline {
  text-decoration-line: underline;
}
.text {
  font-size: 0.8em;
}
</style>
