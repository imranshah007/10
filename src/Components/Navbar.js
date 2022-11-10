import { Stack } from '@mui/material'
import { useState, useEffect } from 'react';
import { req } from '../utils'
import { Typography } from '@mui/material';
import * as React from 'react';
import List from './List';
import Masonry from '@mui/lab/Masonry';



const Navbar = _ => {
    const [list, setList] = useState("");
    const [clicked, setClicked] = useState(false);
    const [trigger, setTrigger] = useState(false);
    const [value, setValue] = useState("");


    useEffect(_ => {
        if (value !== undefined) {
            (async _ => {
                const response = await req.get(`?s=${value}`);
                if (response.data.Response === "True") {
                    setList(response.data.Search)
                    setTrigger(true);
                } else {
                    setTrigger(false);
                }
            })()
         }
    }, [clicked, value])

 const input = e => {
        const input_value = e.target.value;
        setValue(input_value);
    }
    const submit_input = _ => {
        if (value !== "") {
            setClicked(true);
            setTimeout(_ => {
                setClicked(false);

            }, 5000)
        }
    }
    return (
        <>
            {trigger === "false" && clicked === "true" ? console.log("trigger") : " "}
            <Stack className="Top" >
                <Typography variant="v6" color="white" >Hooked</Typography>
            </Stack>
            <Stack direction="row" className="search" >
                <input type="text" onKeyUp={input} placeholder="search your Movie names here" />
                <button onClick={submit_input} >Search</button>
            </Stack>
            <p className={trigger === false && clicked === true ? "nothingfound" : "notfound none"}>No Item Available For this Search</p>

            <hr />
            <span><h3 className='cont'> Sharing a few of your favourite movies</h3></span>
            <div className="appl">
                <Masonry columns={5} spacing={5}>

                    {trigger === true ?
                        list.map((data, idx) => {
                            return (
                                <List key={idx} data={data} />
                            )
                        })
                        : ("")}
                </Masonry>
            </div>

        </>
    )

}

export default Navbar;