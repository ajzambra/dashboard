//import { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Indicator from './components/Indicator';
import Summary from './components/Summary';
import BasicTable from './components/BasicTable';
import WeatherChart from './components/WeatherChart';
import ControlPanel from './components/ControlPanel';



import './App.css'

function App() {
  //const [count, setCount] = useState(0)


  {/* JSX */}
  return (
    <Grid container spacing={5}>
           <Grid xs={12} sm={4} md={3} lg={2}>1</Grid>
           <Grid xs={6} sm={4} md={3} lg={2}>2</Grid>
           <Grid xs={6} sm={4} md={3} lg={2}>3</Grid>
           <Grid xs={12} sm={4} md={3} lg={2}>4</Grid>
           <Grid xs={6} sm={4} md={6} lg={2}>5</Grid>
           <Grid xs={6} sm={4} md={6} lg={2}>6</Grid>
           <Summary></Summary>
           <Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
           <BasicTable />
           <WeatherChart></WeatherChart>
           <Grid xs={12} lg={2}>
             <ControlPanel />
         </Grid>
         <Grid xs={12} lg={10}>
             <WeatherChart></WeatherChart>
         </Grid>
         </Grid>
         
  )
}

export default App
