import React from 'react'
 
const TestWithMockBook1 = ({data, displayUnorderedList}) => {
  return (
    <div>
        {displayUnorderedList ?
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.id}
                        {item.bookname},
                        {item.bookprice},
                        {item.bookprice > 999 ? 'Expensive' : 'Cheaper'}
 
                    </li>
                ))}
            </ul>
        :
            <ol>
                {data.map(item => (
                    <li key={item.id}>
                        Book Name: {item.bookname}
                    </li>
                ))}
            </ol>
        }
    </div>
  )
}
 
export default TestWithMockBook1;