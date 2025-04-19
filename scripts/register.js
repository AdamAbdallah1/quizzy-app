document.getElementById("register-button").addEventListener("click", () => {
    const user = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    };
  
    console.log(user);
  });
  