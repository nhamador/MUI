import * as React from 'react';
import {Component} from 'react';
import './App.css';
import CardList from './CardList';

class App extends Component {
  render(){
    return(
      <div class="main">
        <h1>NATHAN AMADOR</h1>
        <div class ="cardContainer"><CardList/></div>
        <div class = "artistStatement">
        <h3>ABOUT</h3>
          <table>
            <tr>
              <td>
               <img src = "./photos/headshot.jpg" alt="headshot"></img>
              </td>
              <td>
               <p>My studio work uses illustration and painting to explore abstraction of figures and symbols.
                I am primarily concerned with what happens to an icon or symbol once it becomes distorted
                and changed either by painting and sanding layers or by obfuscating the image. </p>
              </td>
            </tr>
          </table>
          
          
        </div>
        <footer>
         <a href= "https://www.instagram.com/areuador/" id = "instagram">Instagram</a>
        </footer>
      </div>
    );

  }
}

export default App;
