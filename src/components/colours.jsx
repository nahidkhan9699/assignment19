import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
export const Colours = () => {
  const [clr, setClr] = useState("pink");
  return (
    <Grid container spacing={3} padding={23} style={{backgroundColor:clr,height:"80vh"}}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Grid container spacing={4}>
            <Grid item xs={12} align="center" sx={{fontSize:"30px"}}><b>Assignment-19</b></Grid>
        <Grid item xs={6} >
            <Button variant="contained" fullWidth onClick={()=>setClr("red")}>red</Button>
        </Grid>
        <Grid item xs={6} >
            <Button variant="contained" fullWidth onClick={()=>setClr("Yellow")}>yellow</Button>
        </Grid>
                <Grid item xs={6} >
            <Button variant="contained" fullWidth onClick={()=>setClr("Green")}>Green</Button>
        </Grid>
                <Grid item xs={6} >
            <Button variant="contained" fullWidth onClick={()=>setClr("orange")}>orange</Button>
        </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
