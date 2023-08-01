import Header from "./components/Header/Header.jsx";
import Sections from "./components/Sections/Sections";
import Footer from "./components/Footer/Footer";
import Find from "./components/Find/Find";
import React from 'react';
import Details from "./components/Details/Details";
import Login from "./components/Login/Login";


function App() {
    const images = [
        {
            original: '/assets/image/details/01.png',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
  return (
    <div className="wrapper">
        <Header/>
        {/*<Sections/>*/}
        {/*<Find/>*/}
        <Details/>
        {/*<Login/>*/}
        <Footer/>
    </div>
  );
}

export default App;

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3); //  ["a", "b", "c", "d", "e", "f"]


const isTrue = true == [];
const isFalse = true == ![];
console.log(isTrue + isFalse);

