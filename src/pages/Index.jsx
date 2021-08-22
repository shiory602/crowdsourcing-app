import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';

function Home() {
  return (
    <Layout className="App">
      <h2>hello world</h2>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Layout>
  );
}

export default Home;
