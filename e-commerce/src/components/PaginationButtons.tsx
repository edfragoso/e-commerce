"use client";
import { LisBtn } from "./cart/styledPaginationButton";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { ArrowRightIcon } from "./icons/arrow-right-Icon";

// Em PaginationButton
interface PaginationButtonProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

export function PaginationButton({
  totalPages,
  currentPage,
  handlePageChange,
}: PaginationButtonProps) {
  const renderPageButtons = () => {
    const buttons = [];
    for (let page = 1; page <= totalPages; page++) {
      buttons.push(
        <LisBtn
          selected={page === currentPage}
          disabled={currentPage === page}
          key={page}
          onClick={() => handlePageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </LisBtn>
      );
    }
    return buttons;
  };

  return (
    <div>
      {renderPageButtons()}
      <LisBtn
        selected={currentPage === 1}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ArrowLeftIcon />
      </LisBtn>
      <LisBtn
        selected={currentPage === totalPages}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ArrowRightIcon />
      </LisBtn>
    </div>
  );
  
}
