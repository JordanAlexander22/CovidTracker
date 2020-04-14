import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css';

import {fetchCountries} from '../../api';

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState([])


    useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchApi();
    }, [setFetchedCountries]);

    console.log(fetchedCountries)



    return (
        <FormControl className= {styles.formControl}>
            <NativeSelect>
                <option value= "global">Global</option>
                {fetchedCountries.map((country, i) => <option key= {i} value= {country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}



export default CountryPicker;