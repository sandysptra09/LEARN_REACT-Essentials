export default function Tabs({children, buttons}) {
    return <>
        <menu>
            {/* jsx slots */}
            {buttons}
        </menu>
        {children}
    </>
}