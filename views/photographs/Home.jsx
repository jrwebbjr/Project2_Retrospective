const React = require("react");
const DefaultLayout = require("../layout/Default.jsx")

class Home extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title> Retrospective </title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="https://use.typekit.net/nte1kef.css"></link>
                    <link rel="stylesheet" href="/public/styles.css" />
                    <script src="/app.js" defer></script>
                </head>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col"></div>
                        <div className="col align-self-center">
                            <a className="" href="/photographs"><img src="https://i.imgur.com/AN5s8rF.jpg"></img></a>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </html>
        )
    }
}

module.exports = Home;