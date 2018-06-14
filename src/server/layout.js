module.exports = ({body, title = 'whoami'}) => `
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="author" content="">
        <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>${title}</title>
        
        <meta name="description" content="James Craig – Lead Developer @ Finer Vision">
    </head>
    
    <body>
        <div id="root">${body}</div>
        
        <noscript id="deferred-styles">
            <link rel="stylesheet" href="css/app.css">
        </noscript>
        
        <script src="js/app.js" async defer></script>
        
        <script>
          var loadDeferredStyles = function() {
            var addStylesNode = document.getElementById("deferred-styles");
            var replacement = document.createElement("div");
            replacement.innerHTML = addStylesNode.textContent;
            document.body.appendChild(replacement)
            addStylesNode.parentElement.removeChild(addStylesNode);
          };
          var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
          if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
          else window.addEventListener('load', loadDeferredStyles);
        </script>
    </body>
</html>
`;
