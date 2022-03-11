const React = require("react");

class DefaultLayout extends React.Component {
    render(){
        return(
            <html lang="en">
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
                <body>
                    <header>
                        <nav className="p-3 navbar navbar-expand-lg navbar-light bg-light border">
                                <a className="navbar-brand" href="#">
                                    <img src="https://i.imgur.com/ojISYdI.jpg"/>   
                                </a>
                                <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a class="nav-link active" href="/photographs">Photographs</a></li>
                                    <li className="nav-item"><a class="nav-link active" href="/videos">Video</a></li>
                                    <li className="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Upload
                                        </a>
                                        <li class="nav-item dropdown">
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="/photographs/new">Upload Photograph</a></li>
                                            <li><a class="dropdown-item" href="/videos/new">Upload Video</a></li>
                                        </ul>
                                        </li>
                                    </li>
                                </ul>
                                </div>
                        </nav>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer>

                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;