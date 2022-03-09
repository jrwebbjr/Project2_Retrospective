const React = require("react");
const Photograph = require("../../models/photograph");
const DefaultLayout = require("../layout/Default.jsx")

class Index extends React.Component {
    render(){
        const { photograph } = this.props;
        return (
            <DefaultLayout>
                <div>
                    <nav>
                        <a href="/photographs/new">Upload a new photograph</a>
                    </nav>
                    {/*<ul>
                        {
                            Photograph.map((photograph) => {
                                return (
                                    <li key={`photograph._id`}>
                                        <a href={`/photographs/${photograph._id}`}>{photograph.title}</a> by {photograph.photographer}
                                    <form action={`/photographs/${photograph._id}?_method=Delete`} method="POST">
                                        <input type="submit" value={`Delete ${photograph.title}`} />
                                    </form>    
                                    </li>
                                )
                            })
                        }
                    </ul>*/}
                </div>    
            </DefaultLayout>
        )
    }
}

module.exports = Index;