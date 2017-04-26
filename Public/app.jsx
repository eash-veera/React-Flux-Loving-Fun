var ReactGreeterComponent = React.createClass({
  //getDefaultProps allows our component to render default values when the props return empty.
  getDefaultProps: function(){
    return{
      name : 'React',
      message : 'This is a default message from the react component props.'
    };
  },
  onNameSubmit: function(e){
    //to prevent default behavior of the browser from refreshing on form submit
    e.preventDefault();

    var formName = this.refs.name.value;

    alert(formName);
  },
  render : function(){
    // we are telling our component what props we need to look for.
    var name = this.props.name,
        message = this.props.message;

    // this is where we return the jsx code that defines the dom elements in our component.
    // binding variables to our static content is done through {} syntax
    return(
      <div id="reactGreeterComponent">
        <h1>Hello {name} !</h1>
        <p>{message}</p>

        <form name="simpleNameForm" onSubmit={this.onNameSubmit}>
          <input placeholder="Insert name here !" type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var userName = 'Eshwaran Veerabahu',
    userMessage = 'Hi guys Im '+userName+', I love to learn react.';

// we use RecatDOM.render() takes in two arguments, *the component we want to render and *which area we need to render.

ReactDOM.render(
  <ReactGreeterComponent name={userName} message={userMessage}/>,
  document.getElementById('app')
);
