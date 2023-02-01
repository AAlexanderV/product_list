import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage } from "../features/pagination/paginationSlice";


function Pagination() {
  const dispatch = useDispatch();
  const totalPages = useSelector((state:any) => state.pagination.totalPages);
  const currentPage = useSelector((state:any) => state.pagination.currentPage);
  const filterValue = useSelector((state:any) => state.filter.value);

  if(filterValue){
    return null;
  }else{
    return (
      <div className="pagination">

        <button 
          disabled={(currentPage === 1)} 
          onClick={()=> dispatch(prevPage())}
        >Previous page</button>

        <button 
          disabled={currentPage === totalPages} 
          onClick={()=> dispatch(nextPage())}
        >Next page</button>
        
      </div>
    );
  }
}
  
  export default Pagination;