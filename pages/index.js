import Navbar from './navbar.js';
/*import About from './about';
import Contact from './contact';
import Projects from './projects';*/

const Home = () => (
    <div>
        <style global jsx>{`
            body {
                font-family: 'Roboto', sans-serif;
                margin: 0;
                padding: 0;
                background: white;
            }
            *{
                text-align: center;
                text-color: black;
            }
        `}</style>
        <style jsx>{`
            ul {
                padding: 0;
                list-style: none;
            }
            h1 {
                font-size:25px;
                margin-bottom: 0;
                font-weight: 700;
            }   

            nav a {
                -webkit-transition: all 0.5s ease-out;
                -moz-transition: all 0.5s ease-out;
                -o-transition: all 0.5s ease-out;
                -ms-transition: all 0.5s ease-out;
                transition: all 0.5s ease-out;
            }
            nav {
                width: 250px;
                height:150px;
            }
            nav a {
                display: inline-block;
                text-decoration: none;
                color: #000;
                padding:10px 15px;
            }
            nav  a:hover {
                color: #23527c;
            }
            img {
                width: 350px;
                height:350px;
            }
            h1{

            }

        `}
        </style>
    
        <Navbar/>
        <h1>Welcome to SIPHOSETHU GAJANA's resume</h1>
        <br/>
        <img src='./static/Profile.jpg' alt='profileImage'/> 
    
    </div>
) 
export default Home;