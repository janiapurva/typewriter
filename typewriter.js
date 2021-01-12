const sentence = "hello there from lighthouse labs";

const typeWriter = function(para) {
  let final;
  let counter = 0;
  for (const char of para) {
  
    final =  setTimeout(() => {
      process.stdout.write(char);
    },counter += 50);

  }
  return final;
};

typeWriter(sentence);