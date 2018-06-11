module.exports = ({body, title = 'whoami'}) => `
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="">
        <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

        <title>${title}</title>
        
        <noscript>
            <link rel="stylesheet" href="css/app.css">
        </noscript>
    </head>

    <body>
        <div id="root">${body}</div>
        
        <script>
            var css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = 'css/app.css';
            css.type = 'text/css';
            document.head.appendChild(css);
        </script>
        
        <script src="js/app.js" async defer></script>
    </body>
</html>
`;
