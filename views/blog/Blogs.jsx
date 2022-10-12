const React = require("react");

class Blogs extends React.Component {
  render() {
    const {blogModel} = this.props
    console.log(blogModel)
    return (
      <div>
        <head>
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <h1>Blogs</h1>
        <ul>
          {blogModel.map((blog, idx)=>[
                
          ])}
        </ul>
      </div>
    );
  }
}

module.exports = Blogs;
