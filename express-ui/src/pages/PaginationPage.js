import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationPage = () => {
  return (
    <Pagination aria-label="Page navigation example" style={{justifyContent: 'center', position: 'bottom' }}>
    <PaginationItem>
        <PaginationLink first href="/products" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="/products" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/products">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/products">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="/products">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="/products" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="/products" />
      </PaginationItem>
    </Pagination>
  );
}


export default PaginationPage;