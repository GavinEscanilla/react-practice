function Hello() {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
}

class AddMe extends React.Component{
   constructor(props){
    super(props)
   this.state ={
    number: 1
   }
   this.add = this.add.bind(this);
}
    add(){
        this.setState(state =>{
            if(state. number % 2 === 0){
                return {number: state.number * 5};
            }else{
                return {number: state.number  * 2};
            }
        })
    }
 render(){
    
    return(
        <div>
            <button onClick={this.add}>check me</button>
            <h1>{this.state.number}</h1>
        </div>
    )
}
 }

// Render the Hello component into the #root div
ReactDOM.render(<AddMe  />, document.getElementById('root'));
