const React = require("react");
const Photograph = require("../../models/photograph");
const DefaultLayout = require("./Default")

class Index extends React.Component {
    render(){
        const photograph = this.props.photograph
        return (
            <Default title="Photographs Index Page">
                <div>
                    <nav>
                        <a href="/photographs/new">Upload a new photograph</a>
                    </nav>
                    <ul>
                        {
                            Photograph.map((photograph) => {
                                return (
                                    <li key={`photograph._id`}>
                                        <a href={`/photograph/${photograph._id}`}>{photograph.title}</a> by {photograph.photographer}
                                    <form action={`/photograph/${photograph._id}?_method=Delete`} method="POST">
                                        <input type="submit" value={`Delete ${photograph.title}`} />
                                    </form>    
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>    
            </Default>
        )
    }
}

module.exports = Index;