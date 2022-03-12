const React = require("react");
const DefaultLayout = require("../layout/Default.jsx")

class Index extends React.Component {
    render(){
        const videos = this.props.videos;
        return (
            <DefaultLayout title="Index of Video">
                <div>
                    <body>
                        <nav>
                            <a href="/video/new">Upload New Video</a>
                        </nav>
                        <ul>
                            {
                                videos && videos.map((video) => {
                                    return (
                                        <li key={`${video._id}`}>
                                            <a href={`/video/${video._id}`}>
                                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                                </iframe>
                                            </a><br/>
                                            <a href={`/video/${video._id}`}> {video.title} by {video.director}</a>
                                            <form action={`/video/${video._id}?_method=Delete`} method="POST">
                                            <input type="submit" value={`Delete ${video.title}`} />
                                            </form>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </body>
                </div>    
            </DefaultLayout>
        )
    }
}

module.exports = Index;
