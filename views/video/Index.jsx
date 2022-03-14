const React = require("react");
const DefaultLayout = require("../layout/Default.jsx")


class Index extends React.Component {
    render(){
        const videos = this.props.videos;
        return (
            <DefaultLayout>
                    <body>
                        <ul className="d-flex justify-content-evenly"> 
                            {
                                videos.map((video) => {
                                    return (
                                        <li className="d-flex align-items-center flex-column" key={`${video._id}`}>
                                            <a href={`/video/${video._id}`}>
                                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.video}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
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
            </DefaultLayout>
        )
    }
}

module.exports = Index;
