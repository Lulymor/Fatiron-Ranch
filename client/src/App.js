import React from "react";
import Header from "./Header";
import AnimalPage from "./AnimalPage";

function App() {
  return (
    <div className="app">
      <Header />
      <AnimalPage />
    </div>
  );
}

// return (
//   <div className={isDarkMode ? 'App' : 'App.light'}>
//     <Header
//       isDarkMode={isDarkMode}
//       setIsDarkMode={setIsDarkMode}
//       onToggleDarkMode={onToggleDarkMode}
//     />
// //     <Routes>
// //       <Route exact path="/" element={<Home isDarkMode={isDarkMode} />} />

// //         <Route path="/songs" element={<AllSongsGallery songs={songs} setSongs={setSongs} genres={genres} isDarkMode={isDarkMode}/>}/>

// //         <Route path="/songoftheday" element={<SongOfTheDay bestSong={bestSong} setBestSong={setBestSong} />} />

// {/* //         <Route path="/songs/:id/view" element={<SongView songs={songs} setSongs={setSongs} bestSong={bestSong} setBestSong={setBestSong} />}/>
// //       </Routes>
// //       {/* <NewCommentForm 
// //       comments={comments}
// //       setComments={setComments}
// //       /> */}
     
// //   </div> */}
// // );



export default App;
