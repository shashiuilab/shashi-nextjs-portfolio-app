import React, { useState, useEffect } from 'react';
import SideNav from '../components/navigation';
import Head from '../components/head';
import PropTypes from 'prop-types';

const layout = ({ children }) => {
    const [linkItems, setLinkItems ] = useState([]);
    useEffect(() => {
        const fetchLinkItems = async () => {
            const res = await fetch('http://localhost:3000/api/navlinks');
            const results = await res.json();
            setLinkItems(results);
        }
        fetchLinkItems();
    }, []);
    return <>
            <Head title="Shashi::Portfolio"/>
            <SideNav linkItems={linkItems}/>
            <div className="container-fluid p-0">
                { children }
            </div>
        </>
}

export default layout;