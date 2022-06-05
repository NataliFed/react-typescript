import { HomeFeature, HeaderFeature, FooterFeature, PageFeature } from './features'

function App() {
  return (
    <div>
      <HeaderFeature />
      <PageFeature>
        <HomeFeature />
      </PageFeature>
      <FooterFeature />
    </div>
  );
}

export default App;
