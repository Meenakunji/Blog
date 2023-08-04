import React from 'react';

const DummyDataComponent = () => {
  const dummyData = [
    {
      title: 'Sample Title 1',
      description: 'This is a sample description for the dummy data component 1.',
      author: 'John Doe',
      additionalDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et metus quis tortor gravida facilisis. In hac habitasse platea dictumst.',
    },
    {
      title: 'Sample Title 2',
      description: 'This is a sample description for the dummy data component 2.',
      author: 'Jane Smith',
      additionalDescription: 'Phasellus ut gravida velit, ut cursus turpis. Ut luctus nunc et diam feugiat ultricies. Vestibulum eu mi vitae risus mattis facilisis.',
    },
    // Add more data items here...
    // {
    //   title: 'Sample Title 3',
    //   description: '...',
    //   author: '...',
    //   additionalDescription: '...',
    // },
  ];

  return (
    <div>
      {dummyData.map((dataItem, index) => (
        <div key={index}>
          <h2>{dataItem.title}</h2>
          <p>{dataItem.description}</p>
          <p>Author: {dataItem.author}</p>
          <p>{dataItem.additionalDescription}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default DummyDataComponent;
