import "./Stylings/Pagination.css"

function Pagination({ currentPage, lastPage, setSearchParams}) {
    const handlePageChange = (newPage) => {
        setSearchParams({ page: newPage });
    };

    return (
        <div className="pagination">
            {currentPage > 1 ? (
                    <button className="paging-button" onClick={() => handlePageChange(currentPage - 1)}>
                        <i class="bi bi-chevron-left"></i><span>Prev</span>
                    </button>
                ) : (
                    <p className='hidden'>&nbps;<br/>&nbps;</p>
                )
            }
            <span className="page-number"> Page {currentPage} </span>
            {currentPage < lastPage ? (
                    <button className="paging-button" onClick={() => handlePageChange(currentPage + 1)} >
                        <span>Next</span><i class="bi bi-chevron-right"></i>
                    </button>
                ) : (
                    <p className='hidden'>&nbps;<br/>&nbps;</p>
                )
            }
        </div>
    )
}

export default Pagination