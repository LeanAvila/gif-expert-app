import { Container, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";

interface props {
    onNewSearch : (newValue: string) => void;
    // historyState : [
    //     history: string[],
    //     setHistory: Dispatch<React.SetStateAction<string[]>>
    // ]
    // setHistory : Dispatch<React.SetStateAction<string[]>>
}

export const AddCategory = ({ onNewSearch }: props) => {

    // const [history, setHistory] = props.historyState;
    const [inputValue, setInputValue] = useState<string>('');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value );
    }
    
    const onSubmitForm = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const inputValueTrimed = inputValue.trim().toLowerCase();

        if( inputValueTrimed.length === 0 ) return;
        // if ( history.includes( inputValueTrimed ) ) return;

        // setHistory( [...history, inputValueTrimed ]);
        // setHistory( history => [inputValueTrimed, ...history]);
        onNewSearch(inputValueTrimed);
        setInputValue('');
    }

    // const handleShow = (formData: FormData) => {
    //     const searchValue = formData.get('search');
    // }

    return (
        <>
            {/* <form action={handleShow}></form> */}
            <Container>
                <form onSubmit={ onSubmitForm }>
                    <TextField 
                        id="outlined-basic"
                        name="search"
                        fullWidth
                        value={inputValue}
                        onChange={onInputChange} 
                        label="Buscar" 
                        variant="outlined" 
                    />
                    {/* <Button type="submit" variant="contained">Buscar</Button> */}

                    {/* <input type="text" name="search" value={inputValue} onChange={onInputChange}/> */}
                </form>
            </Container>
        </>
    )
}