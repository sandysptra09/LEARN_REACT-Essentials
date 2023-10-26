export default function CoreConcept(props) {
    return (
        <li>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}E</h3>
            <p>{props.description}</p>
        </li>
    );
}

// bisa juga menggunakan destructuring function
// function CoreConcept({title, description, image}) {
//   return (
//     <li>
//       <img src={image} alt={title} />
//       <h3>{title}E</h3>
//       <p>{description}</p>
//     </li>
//   );
// }