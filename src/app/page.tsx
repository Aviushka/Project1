"use client";

import Image from "next/image";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoteList from "./NoteList";
import Pagination from './pagination';
import styles from './styles.module.css';

export default function Home() {
  const [note, setNote] = useState([])
  const [activePage, setActivePage] = useState(1)
  const [LastPage, setLastPage] = useState(1)
  const [midPage, setMidPage] = useState(3);


  useEffect(() => {
    const promise = axios.get("http://localhost:3001/notes", {
      params: {
        _page: activePage,
        _per_page: 10
      }
    });
    promise.then(response => { 
      setNote(response.data)
      setLastPage(Math.ceil(parseInt(response.headers['x-total-count'], 10)/10))
    }).catch(error => { console.log("Encountered an error:" + error)});
},[activePage])

useEffect(() => {
  updateMidPage();
}, [activePage, LastPage]);

function updateMidPage() {
  if (activePage <= 3) {
    setMidPage(3);
  } else if (activePage >= LastPage-2) {
    setMidPage(LastPage - 2);
  } else {
    setMidPage(activePage);
  }
}

function gotoNextPage() {
  if (activePage<LastPage){
    setActivePage(activePage+1)
  }
}

function gotoPrevPage() {
  setActivePage(activePage-1)
}

function gotoFirstPage() {
  setActivePage(1)
}

function gotoLastPage() {
  setActivePage(LastPage);
}

return (
  <>
    <NoteList notes={note} />
      <div>    
      {[...Array(5)].map((_, i) => {
          const pageNumber = midPage - 2 + i;
          if (pageNumber > 0 && pageNumber <= LastPage) {
            return (
              <button
                key={pageNumber}
                name={`page-${pageNumber}`}
                onClick={() => setActivePage(pageNumber)}
                className={pageNumber === activePage ? styles.active : ''}
              >
                {pageNumber}
              </button>
            );
          }
          return null;
        })}
      </div>
    
<Pagination
        gotoFirstPage={gotoFirstPage}
        gotoNextPage={gotoNextPage}
        gotoPrevPage={gotoPrevPage}
        gotoLastPage={gotoLastPage}
      />
  </>

);
}
