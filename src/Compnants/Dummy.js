import React, { useState } from 'react';
import SearchComponent from './Search';
import Navbar from './Navbar';


const DummyDataComponent = () => {
  const dummyData = [
    {
      title: 'Sample Title 1',
      description: 'This is a sample description for the dummy data component 1.',
      author: 'John Doe',
      topic: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et metus quis tortor gravida facilisis. In hac habitasse platea dictumst.',
      likes: "25",
      comment: "40",
      Date: "10/05/2019",
    },
    {
      title: 'Sample Title 2',
      description: 'This is a sample description for the dummy data component 2.',
      author: 'Jane Smith',
      topic: 'jjkk ut gravida velit, ut cursus turpis. Ut luctus nunc et diam feugiat ultricies. Vestibulum eu mi vitae risus mattis facilisis.',
      likes: "15",
      comment: "30",
      Date: "10/05/2020",
    },

    {
        title: 'Sample Title 3',
        description: 'This is a sample description for the dummy data component 2.',
        author: 'Kunj',
        topic: 'jdjjdk ut gravida velit, ut cursus turpis. Ut luctus nunc et diam feugiat ultricies. Vestibulum eu mi vitae risus mattis facilisis.',
        likes: "20",
        comment: "35",
        Date: "9/05/2022",
      },

      {
        title: 'Sample Title 4',
        description: 'This is a sample description for the dummy data component 2.',
        author: 'kavya',
        topic: 'Pkdkdkllllus ut gravida velit, ut cursus turpis. Ut luctus nunc et diam feugiat ultricies. Vestibulum eu mi vitae risus mattis facilisis.',
        likes: "28",
        comment: "48",
        Date: "10/06/2021",
      },

      {
        title: 'Sample Title 5',
        description: 'This is a sample description for the dummy data component 2.',
        author: 'siri',
        topic: 'gdhdjdjj ut gravida velit, ut cursus turpis. Ut luctus nunc et diam feugiat ultricies. Vestibulum eu mi vitae risus mattis facilisis.',
        likes: "25",
        comment: "40",
        Date: "06/05/2023",
      },
    // Add more data items here...
    // {
    //   title: 'Sample Title 3',
    //   description: '...',
    //   author: '...',
    //   topic: '...',
    // },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

  return (
    <>
    <div>
      {/* Search input in the parent component */}
      {/* <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search posts, authors, or topics"
      /> */}

       {/* <Navbar onSearchSubmit={handleSearch} /> */}

      {/* Render the SearchComponent and pass searchQuery and dummyData */}
      {/* <SearchComponent data={dummyData} searchQuery={searchQuery} /> */}
    </div>
    <div className='items'>
      {dummyData.map((dataItem, index) => (
        <div key={index} className='itembox'>
          <h2>Title: {dataItem.title}</h2>
          <p>{dataItem.description}</p>
          <p>Author: {dataItem.author}</p>
          <p>topic : {dataItem.topic}</p>
          <p>Likes: {dataItem.likes}</p>
          <p>Comment : {dataItem.comment}</p>
          <p>Date : {dataItem.Date}</p>
          <hr />
        </div>
      ))}
    </div>
    </>
  );
};

export default DummyDataComponent;
