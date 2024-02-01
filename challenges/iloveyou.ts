/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
*/
function howMuchILoveYou(petals: number): string {
  const options = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
  const n = petals % 6
  if (petals <= 6) {
    return options[petals - 1]
  } if (n === 0) {
    return options[5]
  }
  return options[n - 1]
  // console.log(options[n], n)

  //! Another approach
  //* return ['not at all','I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'][petals % 6]
}

howMuchILoveYou(7) //, "I love you", "Number of petals can be higher than 6");
howMuchILoveYou(3) //, "a lot");
howMuchILoveYou(6) //, "not at all");
howMuchILoveYou(24) // not at all
howMuchILoveYou(10) // passionately
howMuchILoveYou(7) // I love you
howMuchILoveYou(36) // not al all


















