{/* Components composition (children props) */ }
export default function TabButton({ children, onSelect, isSelected }) {

    // menambahkan function eventListener
    // function handleClick() {
    //     console.log("Hello World!");
    // }

    return (
        <li>
            {/* menambahkan properti addEventListener (onClick) */}
            {/* dynamic styling => button active */}
            <button className={isSelected ? 'active' : undefined } onClick={onSelect}>{children}</button>
        </li>
    );
}