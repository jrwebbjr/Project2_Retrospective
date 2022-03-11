const React = require("react");
const DefaultLayout = require("../layout/Default.jsx")

class Index extends React.Component {
    render(){
        const video = this.props.videos;
        return (
            <DefaultLayout title="Index of Videos">
                <div>
                    <body>
                        <nav>
                            <a href="/videos/new">Upload a New Video</a>
                        </nav>
                        <ul>
                            {
                                video.map((video) => {
                                    return (
                                        <li key={`${video._id}`}>
                                        
                                        <a href={`/videos/${video._id}`}><img src={video.video}></img></a><br/>//change to video source
                                        {video.title} by {video.director}
                                        <form action={`/videos/${video._id}?_method=Delete`} method="POST">
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