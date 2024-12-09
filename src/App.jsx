import AppHeader from '@/component/app-header'
import AppList from './component/app-list';
import AppBody from './component/app-body';
import AppFooter from './component/app-footer';
import AppContent from './component/app-content';

function App() {
  return (
    <div className="App">
      <AppList/>
      <AppBody>
        <AppHeader/>
        <AppContent/>
        <AppFooter/>
      </AppBody>
    </div>
  );
}

export default App;