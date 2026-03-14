import Card from "./components/Card";

function App() {
  return (
    <div className="app">
      <Card title="Hello" description=" This is Glass card"></Card>
      <Card title="React" description="Component based UI" />
      <Card title="CSS" description="Makes things pretty" />
      <Card title="JS" description="Makes things work" />
    </div>
  );
}

export default App;
