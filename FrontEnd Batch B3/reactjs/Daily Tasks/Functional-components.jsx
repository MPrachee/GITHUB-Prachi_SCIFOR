<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Example</title>

    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
</head>
<body>
<div id="root"></div>
    <script type="text/babel">
    function Content() {
        return (
            <div>
                <h1>Welcome to React.js</h1>
                <p>We are going to learn react here!</p>
            </div>
        );
    }

    ReactDOM.render(<Content />, document.getElementById('root'));
    </script>
</body>
</html>