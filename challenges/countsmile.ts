/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/

function countSmileys(arr: string[]) {
  const rvalid = /[:;][-~]?[)D]/
  return arr.filter(face => rvalid.test(face)).length
}

countSmileys([]) //, 0);
countSmileys([':D', ':~)', ';~D', ':)']) // , 4);
countSmileys([':)', ':(', ':D', ':O', ':;']) //, 2);
countSmileys([';]', ':[', ';*', ':$', ';-D']) //, 1)
countSmileys([';)', ':~(', ';o>', ':>', ';)', ':)', ';(]'])
countSmileys([':~)', ':o(', ';o>', ';>', ':~>', ';D', ':) '])



