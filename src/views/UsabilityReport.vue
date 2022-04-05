<template>
  <div class="rowu1">
    <h2 class="title">Usability Report</h2>
  </div>
  <div class="rowu2">
    <div class="colu1"></div>
    <div class="colu2">
      <p class="subtitle">
        User testing was the key to find weaknesses in our instructions. By observing how users used our instructions
        and by timing how long it took users to recreate the object, we were able to make important changes to our
        instructions to make it easier to follow and deliver a final product.
      </p>
    </div>
    <div class="colu3"></div>
  </div>
  <div class="rowu1">
    <h2 class="title">Usability Test #1</h2>
  </div>
  <div class="rowu2">
    <div class="colu1"></div>
    <div class="colu2">
      <p class="subtitle">
        Subject: Suhail Kumar <br />
        Suhail was given just a basic set of instructions, only the picture of the final product was given. The pieces
        were identifiable with colors and their dimensions, but from this round of testing we realized that we needed to
        work on better color coding our pieces. Suhail took about 6mintures and 34 seconds to complete the set and most
        of his was spent identifying the pieces. His main feedback was that we should include pictures of all the pieces
        to help him identify. He also had to keep referencing the instructions to see what pieces to use.
      </p>
      <div class="coluu">
        <p><img class="usabilityimg" src="@/assets/IMG_3041.jpg" /></p>
      </div>
    </div>
    <div class="colu3"></div>
  </div>
  <div class="rowu1">
    <h2 class="title">Usability Test #2</h2>
  </div>
  <div class="rowu2">
    <div class="colu1"></div>
    <div class="colu2">
      <p class="subtitle">
        Subject: Ulysses Sanchez <br />
        Ulysses was given the same instructions but this time with pictures of each of the pieces so he could identify
        what he was looking for. With the pictures he was able to complete it 4 minutes and 7 seconds, which was much
        faster than the previous round. His feedbacks were to add a picture for each of the step so the user can make
        sure they did it right instead of constantly referencing the instructions text to make sure it was right and to
        be more descriptive of where the pieces were going to be placed.
      </p>
      <div class="coluu">
        <p><img class="usabilityimg" src="@/assets/IMG_3042.jpg" /></p>
      </div>
    </div>
    <div class="colu3"></div>
  </div>
  <div class="rowu1">
    <h2 class="title">Usability Test #3</h2>
  </div>
  <div class="rowu2">
    <div class="colu1"></div>
    <div class="colu2">
      <p class="subtitle">
        Subject: Eric Palacios <br />
        After making the changes we conducted one more final test, and Eric was able to complete the set in 1 minutes 54
        seconds. Eric stated that the pictures to identify each piece and the pictures in each step really helped and
        that he did not really need to look at the text instructions as much. Just one glance at the text and the
        picture was all he needed and had no difficulty in following the steps.
      </p>
      <div class="coluu">
        <p><img class="usabilityimg" src="@/assets/IMG_3043.jpg" /></p>
      </div>
    </div>
    <div class="colu3"></div>
  </div>
  <div class="rowu1">
    <h2 class="title">Summary</h2>
  </div>
  <div class="rowu2">
    <div class="colu1"></div>
    <div class="colu2">
      <p class="subtitle">
        To us the instructions were very clear as we knew exactly what we were building as we built the set multiple
        times so our first set of instructions were very vague. <br />
        <br />
        Our first tested struggled as he did not have practice like us, he only had our vague instructions and only one
        picture to work with. This increased the difficulty of building the set. With his feedback we were able to
        improve our instructions and saw an improvement in the time spent working on the set. <br />
        <br />
        Our second test subject did much better compared to the first and he was able to provide us with good feedback.
        Both subjects requested that we add more pictures to our instructions to better identify the pieces and the
        steps. <br />
        <br />
        After fixing up the instructions based on the feed back our third subject passed with flying colors as he
        completely beat our expectations as how fast he completed the set. This shows that feedback works and when we
        listened and fixed the suggestions the subjects did better and better. <br />
        <br />
        Overall, the addition of user testing helped us create better instructions and helped us understand the user
        side of a product versus the business side. Just because you are creating a product does not mean you fully
        understand it, the person who will be using the product will.
      </p>
    </div>
    <div class="colu3"></div>
  </div>
  <hr />
</template>

<script>
export default {
  name: 'UsabilityReport',
};
</script>

<style lang="scss">
.rowu1 {
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
.rowu2 {
  display: flex;
  justify-content: center;
}
.rowu2 .coluu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2em;
}
.coluu p {
  text-align: center;
}
.colu1,
.colu3 {
  display: flex;
  flex-basis: 85%;
}
.usabilityimg {
  width: 20em;
  border-radius: 25px;
}
</style>
