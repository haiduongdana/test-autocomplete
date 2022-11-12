import style from './app.module.css';
import { useState} from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';
import { v4 as uuidv4 } from 'uuid'

import BookItem from './components/BookItem';

function App() {
  const [booksSelected, setBooksSelected] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [value, setValue] = useState('');

  const getSuggestionValue = suggestion => {
  return suggestion.name!= null ? suggestion.name: ""
  };
  const onChange = async (event, { newValue, method }) => {
    try {
      setValue(newValue);
      if(method === 'type') {
        const result = await axios.get(`${process.env.REACT_APP_API_DOMAIN}book?q=${newValue}&_limit=10`);
        setSearchBooks([...result.data]);
      }
    } catch (error) {
      searchBooks([])
    }
  };

  const inputProps = {
    placeholder: 'Type a name or author of the book',
    style: {"borderColor": "rgba(255, 122, 122, 1)", 
    "height": "40px", 
    "padding": "0 20px", 
    "width": "300px",
    "outlineColor": "rgb(255, 122, 122)",
    "borderRadius": "30px",
    "fontSize": "16px"},
    value,
    onChange: onChange
  };

  const renderSuggestion = suggestion => (
    <div style={{ padding: '10px', borderRadius: '10px'}}>
      <p style={{color: "red", fontSize: '14px', fontWeight: '600', lineHeight: '20px',paddingLeft:'8px',margin: '0'}}>{suggestion.name}</p>
    </div>
  );
  const onSuggestionsFetchRequested = (value)=>{};
  const onSuggestionsClearRequested = ()=>{};
  const onSuggestionSelected = (event, {suggestion})=>{
    const isContain = booksSelected.some(a=>{
      if(a.name === suggestion.name){
        return true;
      }
      return false;
    })
    if(!isContain){
      setBooksSelected([...booksSelected,suggestion]);
      setValue('')
    }else{
      window.alert("This book is exist.")
      setValue('')

    }
    
  };
  return (
    <div className={style.app}>
      <h1 className={style.title}>Auto Complete App</h1 >
      <div className={style.search_wrapper}>
      <Autosuggest
        suggestions={searchBooks}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected ={onSuggestionSelected}
      />
      </div>
      
      <div className={style.items_wrapper}>
        {booksSelected.map((book, index) =>
          <BookItem key={uuidv4()}
            index={index} 
            author={book.author} 
            name={book.name} 
            series={book.series} 
            onDelete={(() => { })} 
            />
        )}
      </div>

    </div>
  );
}

export default App;
