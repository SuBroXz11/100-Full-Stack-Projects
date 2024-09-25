import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const DynamicSearch = () => {
    const [datas, setDatas] = useState([]);
    const [records, setRecords] = useState(datas);
    const inputRef = useRef()

    useEffect((e) => {
        inputRef.current.focus();
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setDatas(res.data)
                setRecords(res.data)
            })
            .catch(err => console.log(err));
    }, []);

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase(); // Convert the search input to lowercase
        setRecords(datas.filter(f => f.name.toLowerCase().includes(searchTerm)));
    };

    return (
        <div className="container p-5">
            <div className="bg-white shadow border rounded">
                <h2 className="text-center mb-4">User Information</h2>
                <input type="text" className='form-control my-4' onChange={handleSearch} placeholder='Search Names Here for Dynamic Result' ref={inputRef} />
                <table className="table table-striped table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DynamicSearch;
