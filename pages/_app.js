import Layout from "./components/Layout";

// 로깅 관련 로직은 해당 부분에서 사용 할 수 있다.
const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
};

export default App;
