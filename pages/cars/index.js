export default function CarsList({ cars }) {
    return (
        <>
            <h1>Cars List</h1>
            <ul>
            {
                cars.map( car => <><a href={`http://localhost:3000/cars/${car}`}>{car}</a><br/></> )
            }
            </ul>
           
            
        </>
    )
}

export async function getStaticProps() {

    const req = await fetch(`http://localhost:3000/cars.json`);
    const data = await req.json()

    return {
        props: { cars: data },
    }
}