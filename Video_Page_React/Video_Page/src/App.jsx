import './App.css'
import Main_section from './main_section/main_sec'
import Side_bar from './side_bar/side_bar'
import Top_bar from './top_bar/top_bar'

function App() {
  return (
    <div className='App'>
     
      <Top_bar></Top_bar>
      <div id='content_inner'>
        <Main_section></Main_section>
        <Side_bar></Side_bar>
      </div>
    </div>
    )
}

export default App
