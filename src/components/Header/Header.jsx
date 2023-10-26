// create simple dinamyc value
import imgReact from '../../assets/react-core-concepts.png'
import HeaderCSS from './HeaderCSS.css'

const randomDescriptions = ['Fundamental', 'Crucial', 'Core'];
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    // atau bisa juga dengan cara ini 
    const description = randomDescriptions[getRandomInt(2)];

    return (
        <header>
            <img src={imgReact} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>

            {/* <p>
          {randomDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p> */}

        </header>
    )
}