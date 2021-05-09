import "./App.css";
import { Button, TextField } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Button variant="outlined" color="primary">
        Test Button
      </Button>
      <form className="form" noValidate autoComplete="off">
        <TextField id="name" label="Name" variant="outlined" />
      </form>
    </div>
  );
}

export default App;
