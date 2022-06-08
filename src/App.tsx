import { HomeFeature, HeaderFeature, FooterFeature, PageFeature } from './features'
import { ResetStyles } from './features/global';

function App() {
  return (
    <div>
      <ResetStyles />
        <HeaderFeature />
        <PageFeature>
          <HomeFeature />
        </PageFeature>
        <FooterFeature />
    </div>
  );
}

export default App;
