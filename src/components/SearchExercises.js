import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Button, TextField } from '@mui/material';

// ===== DATA =====
import { exerciseOptions, fetchData } from '../utils/fetchData';

// ===== COMPONENTS =====
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchBodyPartData = async () => {
            const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions )
            setBodyParts(['all', ...bodyPartData])
        }
        fetchBodyPartData();
    }, [])

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            // console.log(exercisesData);
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search) 
            );
            
            setSearch('');
            setExercises(searchedExercises);
        }
    }

    return (
        <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
            <Typography fontWeight="700" mb="50px" textAlign="center" sx={{ fontSize: { lg: '44px', xs: '30px' } }}>Find The Exercise You Want</Typography>
            <Box position="relative" mb="72px">
                <TextField height="76px" value={search} placeholder="search exercise" type="text"
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '6px' }, width: { lg: '800px', xs: '350px' }, backgroundColor: '#ffff', borderRadius: '40px' }}
                />
                <Button className="search-btn"
                    onClick={handleSearch}
                    sx={{ color: '#ffff', bgcolor: '#ff2625', textTransform: 'none', width: { lg: '175px', xs: '80px' }, fontSize: { lg: '20px', xs: '14px' }, height: '56px', position: 'absolute', right: '0' }}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position:'relative', width:'100%', p:'20px' }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExercises;