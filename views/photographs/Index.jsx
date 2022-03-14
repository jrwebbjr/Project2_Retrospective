const React = require("react");
const DefaultLayout = require("../layout/Default.jsx")

class Index extends React.Component {
    render(){
        const photographs = this.props.photographs;
        return (
            <DefaultLayout title="Index of Photographs">
                <div>
                    <body>
                        <ul className="d-flex justify-content-evenly">
                            {
                                photographs.map((photograph) => {
                                    return (
                                        <li className="d-flex align-items-center d-flex align-content-between flex-wrap flex-column d-inline-flex p-2" key={`${photograph._id}`}>
                                        
                                        <a href={`/photographs/${photograph._id}`}><img src={photograph.photograph}></img></a><br/><br/>
                                        {photograph.title} by {photograph.photographer}
                                        <form action={`/photographs/${photograph._id}?_method=Delete`} method="POST">
                                            <input type="submit" value="Delete Photograph" />
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

