import "./Stylings/Pagination.css"

function Pagination({ currentPage, lastPage, setSearchParams}) {
    const handlePageChange = (newPage) => {
        setSearchParams({ page: newPage });
    };

    return (
        <div className="pagination">
            {currentPage > 1 &&
                <button className="paging-button" onClick={() => handlePageChange(currentPage - 1)}>
                    <i class="bi bi-chevron-left"></i><span>Prev</span>
                </button>
            }
            <span> Page {currentPage} </span>
            {currentPage < lastPage &&
                <button className="paging-button" onClick={() => handlePageChange(currentPage + 1)} >
                    <span>Next</span><i class="bi bi-chevron-right"></i>
                </button>
            }
        </div>
    )
}

export default Pagination