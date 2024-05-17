import React from 'react';

const PageSelect = ({ noOfPages, setNumberofPages }) => {
    // Initial wordcount and price values
    let initialWordcount = 300;
    let initialPrice = 1;

    const handleChange = (event) => {
        setNumberofPages(parseInt(event.target.value));
      };

    // Generate pageData array dynamically
    const pageData = Array.from({ length: 200 }, (_, index) => {
        // Calculate wordcount and price for each iteration
        const wordcount = initialWordcount + index * 300;
        const price = initialPrice + index;

        return { wordcount, price, value: index + 1 };
    });

    return (
        <div>
            <h3 style={{ fontSize: '15px', marginBottom: '0.25rem', fontFamily: 'jost' }}>
                Number of Pages
            </h3>
            <select name="Number_of_Pages" id="noOfPages" className="order-select" value={noOfPages}
                onChange={handleChange}>
                {/* Loop through the pageData array and generate options dynamically */}
                {pageData.map((page, index) => (
                    <option
                        key={index}
                        data-wordcount={page.wordcount}
                        data-price={page.price}
                        value={page.value}
                        selected={page.value === 1 ? 'selected' : ''}
                    >
                        {page.value} Page / {page.wordcount} Words
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PageSelect;
