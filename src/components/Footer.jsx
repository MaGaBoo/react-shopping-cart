import './Footer.css'

export function Footer({ filters }) {
    // const { filters } = useFilters()

    return (
        <footer className='footer'>
            {/* {JSON.stringify(filters, null, 2)} 
    la línea de arriba para ver el estado de los filtros en modo development, p.e.*/}
            <h4>Learning React</h4>
            <h5>Shopping Cart using useContext & useReducer</h5>
        </footer>
    )
}