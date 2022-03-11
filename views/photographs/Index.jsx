const React = require("react");
const DefaultLayout = require("../layout/Default.jsx")

class Index extends React.Component {
    render(){
        const photographs = this.props.photographs;
        return (
            <DefaultLayout title="Index of Photographs">
                <div>
                    <body>
                        <nav>
                            <a href="/photographs/new">Upload a new photograph</a>
                        </nav>
                        <ul>
                            {
                                photographs.map((photograph) => {
                                    return (
                                        <li key={`${photograph._id}`}>
                                        
                                        <a href={`/photographs/${photograph._id}`}><img src={photograph.photograph}></img></a><br/>
                                        {photograph.title} by {photograph.photographer}
                                        <form action={`/photographs/${photograph._id}?_method=Delete`} method="POST">
                                            <input type="submit" value={`Delete ${photograph.title}`} />
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