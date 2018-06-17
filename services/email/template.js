module.exports = (body) => 
`<html>
    <body>
        <h1>Emaily survey question!</h1>
        <p>You have a new question from one of our users, please answer.</p>
        <p>${body}</p>
        <a>Yes</a>
        <a>No</a>
    </body>
</html>`