function Header(){
    console.log("header component");
    let result = localStorage.getItem("names");
    console.log(result);
    return (<div>
        <h1>{result}</h1>
         <h1>Header component</h1>
    </div>)
}
export default Header;