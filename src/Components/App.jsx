import React from "react";
// import Heading from "./Heading";
// import List from "./List";
// import * as calculator from "./calculator";
import Header from "./KeeperHeader"
import Footer from "./KeeperFooter"
import Note from "./KeeperNote"
function App(){
    return(
        <div>
            <Header />
            <Note />
            <Footer />

        </div>

        // <ul>
        //     <li>{calculator.Add(1,2)}</li>
        //     <li>{calculator.Sub(2,3)}</li>
        //     <li>{calculator.Product(7,2)}</li>
        //     <li>{calculator.Divide(5,2)}</li>
        // </ul>



        // <div>
        //     <h1><Hello></Hello></h1>
        //     <Heading />
        //     <List />
        // </div>
    )
}
export default App;