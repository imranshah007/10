
import { Stack } from '@mui/material'
import {  Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import * as React from 'react';



const List = ({ data }) => {


    return (
        <>

            <Stack  >

                <Card  className='card'>
                    <CardContent>
                        <Typography variant="h6" style={{textAlign:"center"}}>
                            {data.Title}
                            <hr />
                        </Typography>
                    </CardContent>
                    <CardActionArea  >
                        <CardMedia  component="img"  image={data.Poster !== "N/A" ? data.Poster : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"} />
                        <CardContent>
                        <Typography variant="h6" style={{textAlign:"center"}}>
                            {data.Year}
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
            </Stack>

        </>

    )
}

export default List;




