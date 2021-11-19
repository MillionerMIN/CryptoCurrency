import './paginate.scss';

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
  const pages = [];
  for (let i = 1; i <= pageCounter; i++) {
    pages.push(i);
  }

  const curPage = currentPage ? +currentPage.toString()[0] + 1 : 1;

  return (
    <div className="paginate paginate_mb10">
      {pages.map((page) => (
        <span
          key={page}
          className={
            curPage === page
              ? 'paginate__span paginate__span_active'
              : 'paginate__span'
          }
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
