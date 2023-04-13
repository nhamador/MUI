import * as React from 'react';
import {Component} from 'react';
import './App.css';
import CardList from './CardList';
import { Helmet, HelmetProvider } from "react-helmet-async";


class App extends Component {
  render(){
    return(
      <HelmetProvider>
        <Helmet>
          <title>Nathan Amador</title>
          <meta
            name="description"
            content="Artist works by Nathan across different mediums such as Acrylic Painting, Pen and Ink, and Digital Illustration"
          />;
        </Helmet>
          <div class="main">
          <title>NATHAN AMADOR</title>
          <div class="titleText"><h1>NATHAN AMADOR</h1></div>
          <div class ="cardContainer"><CardList/></div>
          <div class = "artistStatement">
          <h3>ABOUT</h3>
            <table>
            <td>
                <img src = "./photos/headshot.jpg" alt="headshot"></img>
                </td>
              <tr>
                
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
      </HelmetProvider>
    );

  }
}

export default App;
