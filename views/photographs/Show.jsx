const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
    render(){
        const photograph = this.props.photograph;
        return (
            <DefaultLayout>
                <div>
                    <article>
                        <h2>
                        {photograph.photographer} -
                        {photograph.title} -
                        {photograph.isImageForSale ? 'Yes' : 'Sorry, prints are not for sale at this time.'}
                        </h2>
                        <a href={`/photographs/${ photograph._id }/Edit`}><button>Edit</button></a>
                        <form action={`/photographs/${ photograph._id }?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete" />
                        </form>
                        <a href="/Photographs/"><button>Back to Index</button></a>
                    </article>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show;