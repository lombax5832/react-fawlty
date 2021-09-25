import { Card, CardContent, Grid } from '@mui/material';
import './App.css';
import WebSocketList from './components/websocketlist';

function App() {

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={12}>
          <Card style={{ height: 'auto', overflow: 'auto' }}>
            <CardContent>
              <WebSocketList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
