import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import View from './component/View';
import TopBar from './component/TopBar';
import InfiniteScroll from "react-infinite-scroll-component";
import apiUrl from './ApiAxios';
function App() {

  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState([])
  const[reff,setReff]=useState("")
  const handlePagination = () => {
    if (images && images.length > 0) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);

  };

  const fetchImages = async () => {
    try {
      let res = await apiUrl.get(`/code/api/post/getall?page=${page}`)
      setImages((prevData) => [...images, ...res.data.posts])
      setIsLoading(res.data.posts)
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchImages();
  }, [page,reff]);


  return (
    <>
       <TopBar setReff={setReff}/>
    <div className="App">
    <InfiniteScroll
          dataLength={images.length}
          next={loadMore}
          hasMore={true}
          loader={<>
            {isLoading?.length !== 0 && (
             <div class="spinner-grow text-danger" role="status">
                <span class="sr-only"></span>
              </div>
            )}

          </>}

        >
          {images.length===0&&<div>No Data Found</div>}
          {images.map((item) => (
   <div style={{  paddingLeft:"494px"}}>
     <View text={item.description} title={item.post_title}/>
    </div>
          ))}
    </InfiniteScroll>
    </div>
    </>
  );
}

export default App;
