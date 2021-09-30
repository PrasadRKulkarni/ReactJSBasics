import React, { useState,useEffect } from 'react';

const CallAPICovid = () => {   
    const [data, setData] = useState([]);

    //Call API
    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    //UseEffect to call the API just once, used empty array to 
    //call just once on page load.
    useEffect( () => {
        getCovidData();
     }, []);


    return(
        <>
            <h1>India Covid-19 Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>State</th>
                        <th>Confirmed</th>
                        <th>Recovered</th>
                        <th>Death</th>
                        <th>Active</th>
                        <th>Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {                        
                        data.map((currElement, index) => {
                            return (
                                <tr>
                                    <td>{currElement.state} </td>
                                    <td>{currElement.confirmed} </td>                                    
                                    <td>{currElement.recovered} </td>                                    
                                    <td>{currElement.deaths} </td>
                                    <td>{currElement.active} </td>
                                    <td>{currElement.lastupdatedatetime} </td>
                                </tr>

                            );
                        })

                    }
                </tbody>
            </table>
        </>
    );
};

export default CallAPICovid;



