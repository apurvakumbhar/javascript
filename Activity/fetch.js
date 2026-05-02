// ==========================
// 1. Fetch Users and Display Names
// ==========================
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log("Users Data:", data);

    let userList = document.getElementById("userList");

    data.forEach(user => {
      let li = document.createElement("li");
      li.innerText = user.name;
      userList.appendChild(li);
    });
  })
  .catch(error => {
    console.log("Error fetching users:", error);
  });


// ==========================
// 2. Fetch Posts (Only First 5)
// ==========================
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    console.log("All Posts:", data);

    let postList = document.getElementById("postList");

    let firstFive = data.slice(0, 5);

    firstFive.forEach(post => {
      let li = document.createElement("li");
      li.innerText = post.title;
      postList.appendChild(li);
    });
  })
  .catch(error => {
    console.log("Error fetching posts:", error);
  });


// ==========================
// 3. Fake Promise (Resolve after 3 sec)
// ==========================
let fakeResolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ Promise Resolved after 3 seconds");
  }, 3000);
});

fakeResolvePromise.then(result => {
  console.log(result);
});


// ==========================
// 4. Fake Promise (Reject after 3 sec)
// ==========================
let fakeRejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("❌ Promise Rejected after 3 seconds");
  }, 3000);
});

fakeRejectPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });