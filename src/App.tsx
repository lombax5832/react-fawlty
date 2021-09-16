import logo from './logo.svg';
import './App.css';
import Page from './components/page'
import { Card, CardContent, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import WebSocketProvider from './components/websocketcomponent';
import WebSocketList from './components/websocketlist';
import WebSocketComponent from './components/websocketcomponent';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(5),
    },
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root} style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item>
          <Card style={{ maxHeight:'90vh', overflow: 'auto' }}>
            <CardContent>
              <WebSocketComponent/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;