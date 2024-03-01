import { Center, Box, Text, Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COLORS } from '../../colors/colors'
import { getAllSolutions } from '../../services/solution'
import SearchSelect from './search-select'

const SearchSelectSolutions = ({ term, onChange }) => {
    const [solutions, setSolutions] = useState([])
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        getSolutions();
    }, [term]);

    useEffect(() => {
        onChange(selected)
    }, [selected]);

    const getSolutions = () => {
        getAllSolutions(term).then((res) => {
            setSolutions(res.data.solutions);
        }
        ).catch((error) => {
            console.log(error);
        }
        );
    };

    const solutionsKey = () => {
        return solutions.map((solution) => {
            return {
                value: solution._id, label: solution.name
            }
        })
    }

    return (
        <SearchSelect options={solutionsKey()} value={selected} onChange={(value) => setSelected(value)} searchable />
    )
}
export default SearchSelectSolutions
