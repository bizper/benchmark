import Page from './config/Page'
import FSW from './config/FSW'

import './css/App.css'
import 'antd/dist/antd.min.css'

function App() {
  return (
    <div>
      <Page data={FSW}></Page>
    </div>

  );
}

export default App;
