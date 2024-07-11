
import { createContext, useState } from "react";

const QuotesContext = createContext();

export const QuotesContextProvider = ({ children }) => {

    const [quotes, setQuotes] = useState([]);
    const [loader, setloader] = useState(true);
    const [category, setCategory] = useState("happiness");
    const Key = String(import.meta.env.VITE_QUOTES_API_KEY);

    const getQuotes = () => {
        setloader(true);
        fetch(` https://api.api-ninjas.com/v1/quotes?category=${category}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': Key
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setQuotes(data);
                setloader(false);

            })
            .catch((e) => {
                console.log('Error', e);
                setloader(false);

            })

    }

    return (
        <QuotesContext.Provider
            value={{ quotes, setQuotes, getQuotes, loader, setloader,category,setCategory }}>
            {children}
        </QuotesContext.Provider>
    )
}


export default QuotesContext;