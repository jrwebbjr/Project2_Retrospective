const React = require("react");
const DefaultLayout = require("../layout/Default");

class Show extends React.Component {
    render(){
        const photograph = this.props.photograph;
        console.log("*********hfhfhfhfhfh***********")
        return (
            <DefaultLayout>
                <div>
                    <body>
                        <article className="d-flex d-inline-flex p-2 bd-highlight">
                            <div className="d-flex align-items-center align-content-between flex-wrap flex-column">
                                <a href={`/photographs/${photograph._id}`}></a><br/>
                                <img src={photograph.photograph}></img>
                                <h2>{photograph.title}</h2>
                                <h2>By Photographer: {photograph.photographer}</h2>
                                <a href={`/photographs/${photograph._id}/Edit`}><button>Edit</button></a>
                                <form action={`/photographs/${photograph._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete" />
                                </form>
                                <a href="/Photographs/"><button>Back to Index</button></a>
                            </div>
                        </article>
                    </body>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show;

// const React = require("react");
// const DefaultLayout = require("../layout/Default");

// class Show extends React.Component {
//     render(){
//         const video = this.props.video;
//         return (
//             <DefaultLayout>
//                 <div>
//                     <body>
//                         <article>
//                             <a href={`/video/${video._id}`}>
//                                 <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
//                                 </iframe>
//                             </a><br/>
//                             <h2>
//                             {video.title} Directed by:{video.director} 
//                             </h2>
//                             <a href={`/video/${ video._id }/Edit`}><button>Edit</button></a>
//                             <form action={`/video/${ video._id }?_method=DELETE`} method="POST">
//                                 <input type="submit" value="Delete" />
//                             </form>
//                             <a href="/video"><button>Back to Index</button></a>
//                         </article>
//                     </body>
//                 </div>
//             </DefaultLayout>
//         )
//     }
// }

// module.exports = Show;