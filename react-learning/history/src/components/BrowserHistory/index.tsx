import './index.css'
import { FaSearch, FaHistory } from "react-icons/fa";

import HistoryItem from '../HistoryItem'
import React, { useState } from 'react';



const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]


const index = () => {

    const [historyList, setHistoryList] = useState(initialHistoryList)
    const [searchInput, setSearchInput] = useState("")

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value)
    }

    
    const deleteHistoryItem = (id: number) => {
      const updatedHistory = historyList.filter((eachItem) => eachItem.id !== id)
      setHistoryList(updatedHistory)
    }
    
   const searchHistory = historyList.filter((eachItem) => eachItem.title.toLowerCase().includes(searchInput.toLowerCase()))
   
    return (
    <div className="min-h-screen bg-slate-50">
      <nav className='bg-blue-500 flex flex-row justify-between p-2'>
        <div className='flex flex-row items-center'>
            <FaHistory className='text-amber-50'/>
            <h3 className='mx-2 text-amber-50'>History</h3>
        </div>
        <div className='flex flex-row items-center outline-1 outline-amber-50 rounded'>
            <FaSearch  className='text-amber-50 px-0.5'/>
            <input placeholder='Search...' className='max-w-3xl min-w-3xs mx-2 border-l-2 border-l-amber-50 px-1 py-1.5 placeholder:text-amber-50 focus:outline-0 text-amber-50' value={searchInput} onChange={handleSearchInput}/>
        </div>
      </nav>
      <ul className='border border-gray-100 shadow-xl p-4 mx-4 my-4 flex flex-col justify-center'>
        {searchHistory.length !== 0 ? (
            searchHistory.map((eachItem) => 
                <HistoryItem
                    historyData={eachItem}
                    deleteHandler={deleteHistoryItem}
                />
            )
        ) : (
            <div>
                <p>There is no such history</p>
            </div>
        ) }
      </ul>
    </div>
  )
}

export default index
