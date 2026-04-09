import { useState } from "react";

export default function Search(){
    const [search, setSearch ] = useState("");
    const items = ['Bob', 'Alice', 'Ange', 'Gaella', 'Peace', 'James'];

    const filteredNames = items.filter(name=>name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className="mx-43">
            <input type="text"
            placeholder="search..."
            value={search}
            className="border-2 border-blue-950"
            onChange={(e)=> setSearch(e.target.value)}
            />
            {filteredNames.map((item, index) => {
                return (<li>{item}</li>)
            } )}
        </div>
    )
}