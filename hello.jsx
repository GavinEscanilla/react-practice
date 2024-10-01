function Hello() {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
}
const MyName = (props) =>{
    return(
        <h1>My Name is: {props.name}</h1>
    )
}
MyName.defaultProps ={
    name: 'me'
}
// Render the Hello component into the #root div
ReactDOM.render(<MyName  name="hi"/>, document.getElementById('root'));
