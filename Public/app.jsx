//Deviding up single component into multiple atomic components which are nested, these nested components will later be wired.

//Atomic child components
var ReactGreeterMessageComponent = React.createClass({
  render: function(){
    var name = this.props.name;
    var description = this.props.description;

    return(
      <div id="reactGreeterMessageComponent">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    );
  }
});

var ReactGreeterFormComponent = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var updates = {
      title : this.refs.name.value,
      description : this.refs.description.value
    };

    if(updates.title.length || updates.description.length > 0){
      this.refs.name.value = '';
      this.refs.description.value = '';
      this.props.onNewData(updates);
    }else{
      console.log('Please try not to leave your feilds empty.')
    }
  },
  render: function(){
    return(
      <form name="simpleNameForm" onSubmit={this.onFormSubmit}>
        <div>
          <input placeholder="Insert name here !" type="text" ref="name"/>
        </div>
        <div>
          <textarea placeholder="Insert description about you !" type="text" ref="description"/>
        </div>
        <div>
          <button>Set Name</button>
        </div>
      </form>
    );
  }
});

//Parent component which will have the above atomic components nested within
var ReactGreeterComponent = React.createClass({
  //getDefaultProps allows our component to render default values when the props return empty.
  getDefaultProps: function(){
    return{
      name : 'React',
      message : 'This is a default message from the react component props.'
    };
  },
  getInitialState: function(){

    //initialize the state object so that it can be mutated by initial data.
    //this can either be from refs (user interaction) or setting data variables.
    return {
      name: this.props.name,
      description: this.props.description
    };
  },
  handleNewData: function(updates){
    this.setState({
      name: updates.title,
      description : updates.description
    });
  },
  render : function(){
    // we are telling our component what props we need to look for.
    var name = this.state.name,
        message = this.state.description;

    // this is where we return the jsx code that defines the dom elements in our component.
    // binding variables to our static content is done through {} syntax
    return(
      <div>
        <ReactGreeterMessageComponent name={name} description={mess
            age}/>
        <ReactGreeterFormComponent onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var userDefaultName = '*Add name',
    userDefaultDescription = '*Add description';

// we use RecatDOM.render() takes in two arguments, *the component we want to render and *which area we need to render.

ReactDOM.render(
  <ReactGreeterComponent name={userDefaultName} description={userDefaultDescription}/>,
  document.getElementById('app')
);
