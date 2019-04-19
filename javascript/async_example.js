const http = require("http");

var getPost = async postId => {
  return new Promise((resolve, reject) => {
    http.get(
      { host: "jsonplaceholder.typicode.com", path: `/posts/${postId}` },
      function(response) {
        var body = "";
        response.on("data", function(d) {
          body += d;
        });
        response.on("end", function() {
          var parsed = JSON.parse(body);
          resolve(parsed);
        });
      }
    );
  });
};

let run = async () => {
  let arr = [1, 2, 3, 4];
  return await Promise.all(
    arr.map(async element => {
      return await getPost(element);
    })
  );
};

const foo = async () => {
  let results = await run();
  console.log(results);
}
foo();