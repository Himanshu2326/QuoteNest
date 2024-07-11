
import React, { useContext, useEffect } from 'react';
import QuotesContext from '../Context/QuoteContext';
import { categoryList } from '../components/Category';


function Quote() {
    const { quotes, getQuotes, loader, category, setCategory } = useContext(QuotesContext);

    useEffect(() => {
        getQuotes();
    }, [category]);

    const newQuotes = () => {
        getQuotes();
    };

    const tweetNow = () => {
        let Tweet = `https://twitter.com/intent/tweet?text=${quotes[0].quote}`;
        window.open(Tweet);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    return (
        <div className='mainContainer'>
            {loader ? (
                <div className='loader'>
                    <img src="/Loader.gif" alt="Loader" />
                </div>
            ) : (
                <>
                    <div className="Category">
                        <label htmlFor="categories">Choose Category</label>
                        <div className="options">
                            <select className='categories' name="categories" value={category} onChange={handleCategoryChange}>
                                {categoryList.map((cat, i) => {
                                    return (
                                        <option id={i} key={i} value={cat}>{cat}</option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='QuotesArea'>
                        {/* <h2 className='category' id='category'>{quotes[0].category}</h2> */}
                        <p className='quote' id='Quotes'>{quotes[0].quote}</p>
                        <h1 className='author' id='Author'>{quotes[0].author}</h1>
                    </div>

                    <div className="btnArea">
                        <button className="btn" id="tweet" onClick={tweetNow}>
                            Tweet Now <i className="fa-brands fa-twitter"></i>
                        </button>
                        <button className="btn" id="GetNewQuotes" onClick={newQuotes}>
                            New Quotes
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Quote;
