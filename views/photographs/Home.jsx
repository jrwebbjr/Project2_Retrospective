const React = require("react");
const DefaultLayout = require("../layout/Default.jsx")

class Home extends React.Component {
    render(){
        return (
                <div>
                    <a href="/photographs"><img src="https://i.imgur.com/AN5s8rF.jpg"></img></a>
                </div>    
        )
    }
}

module.exports = Home;