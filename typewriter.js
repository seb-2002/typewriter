const sentence = "hello there from lighthouse labs";
let clTimer = sentence.length * 50;
let timer = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50;
}
setTimeout(() => {
  process.stdout.write("\n");
}, clTimer);


