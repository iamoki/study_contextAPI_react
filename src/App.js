import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

const App = () => {
  return (
    // Provider로 value 덮어쓰기
    <ColorContext.Provider value={{ color: 'red' }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  )
}

export default App;
