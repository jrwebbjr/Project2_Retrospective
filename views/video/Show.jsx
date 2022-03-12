const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
    render(){
        const video = this.props.video;
        return (
            <DefaultLayout>
                <div>
                    <body>
                        <article>
                            <a href={`/video/${video._id}`}>
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                            </a><br/>
                            <h2>
                            {video.title} Directed by:{video.director} 
                            </h2>
                            <a href={`/video/${ video._id }/Edit`}><button>Edit</button></a>
                            <form action={`/video/${ video._id }?_method=DELETE`} method="POST">
                                <input type="submit" value="Delete" />
                            </form>
                            <a href="/video"><button>Back to Index</button></a>
                        </article>
                    </body>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show;