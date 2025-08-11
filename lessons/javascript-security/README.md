## javascript-security

### What is JavaScript Security?

- JavaScript Security is the Practice of Protecting JavaScript Code and Applications from Vulnerabilities and Attacks

### JavaScript Security Best Practices and things to keep in mind

- Use Strict Mode
  - Use `"use strict";` at the beginning of your JavaScript files to enforce strict parsing and error handling.
- Validate Input
  - Always validate and sanitize user input to prevent injection attacks.
- Avoid Eval
  - Avoid using `eval()` as it can execute arbitrary code and lead to security vulnerabilities.
- Use HTTPS
  - Always serve your JavaScript files over HTTPS to prevent

## authentication and data integrity issues.

- Content Security Policy (CSP)
  - Implement a Content Security Policy to restrict the sources from which scripts can be loaded.
- Keep Dependencies Updated
  - Regularly update your JavaScript libraries and frameworks to patch known vulnerabilities.
- Use Secure Coding Practices
  - Follow secure coding practices, such as avoiding global variables and using closures to encapsulate variables
- Error Handling
  - Implement proper error handling to avoid exposing sensitive information in error messages.
- Use HTTPS
  - Always serve your JavaScript files over HTTPS to prevent authentication and data integrity issues.
- Avoid Inline Scripts
  - Avoid using inline scripts in your HTML to reduce the risk of cross-site scripting (XSS) attacks.
- Use Subresource Integrity (SRI)
  - Use Subresource Integrity to ensure that external scripts have not been tampered with.
- Monitor and Audit

## json web tokens

- Regularly monitor and audit your JSON Web Tokens (JWTs) for security vulnerabilities.

```js
const jwt = require("jsonwebtoken");
const TOKEN_SECRET = "your-256_secret_key";
const token = jwt.sign({ userId: 123 }, TOKEN_SECRET, { expiresIn: "1h" });

// send back to client and store it securely
/** FROM CLIENT SIDE **/
fetch("https://api.example.com/data", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

/** FROM SERVER SIDE **/
app.get("/data", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send("Unauthorized");
    }
    res.send({ data: "Secure Data", userId: decoded.userId });
  });
});
```

- Use Secure Cookies
  - Use secure cookies with the `HttpOnly` and `Secure` flags to protect session data.
- Implement Rate Limiting
  - Implement rate limiting to prevent brute force attacks and abuse of your JavaScript APIs.

## dotenv

- Use the `dotenv` package to manage environment variables securely in your JavaScript applications.
- store sensitive information like API keys and database credentials in a `.env` file.

```bash
npm install dotenv -D

```
