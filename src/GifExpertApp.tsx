import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"
import { Container } from "@mui/material"

export const GifExpertApp = () => {

    const [history, setHistory] = useState<string[]>([])
    

    const addNewSearch = (newSearch: string) => {
        if( history.includes(newSearch) ) return;
        setHistory( [ newSearch, ...history ]);
    }

    return (
        <>
            <Container sx={{ textAlign: 'center'}}>
                <h1> GifExpertApp </h1>
            </Container>

            {/* <AddCategory historyState={[history, setHistory]}/> */}
            <AddCategory onNewSearch ={ addNewSearch } />
            
            {
                history.map( search => (
                    <GifGrid key={search} search={search}/>
                ))
            }
        </>
    )
}
