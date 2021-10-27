import './Paginate.scss';

type PaginatePropsType = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
};

export const Paginate = (props: PaginatePropsType) => {
  const { totalCount, pageSize, currentPage, onPageChange } = props;

  //getting the right number of buttons
  const pageCounter = Math.ceil(totalCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCounter; i++) {
    pages.push(i);
  }

  return (
    <div className="paginate">
      {pages.map((page) => (
        <span
          key={page}
          className={currentPage === page ? 'active' : ''}
          onClick={() => {
            onPageChange(page);
          }}
        >
          {page}
        </span>
      ))}
    </div>
  );
};