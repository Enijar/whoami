module.exports = ({body, title = 'whoami'}) => `
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="">
        <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

        <title>${title}</title>
        <link rel="stylesheet" href="css/app.css">
    </head>

    <body>
        <div id="root">${body}</div>
        <script src="js/app.js"></script>
    </body>
</html>
`;
