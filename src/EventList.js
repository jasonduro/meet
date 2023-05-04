import React, { Component } from 'react';
import Event from './Event';
import ReactPaginate from './ReactPaginateWrapper';

class EventList extends Component {
  render() {
    const { events, currentPage, setCurrentPage, itemsPerPage } = this.props;
    console.log('Items per page:', itemsPerPage);

    // Slice the events array to only show the items corresponding to the current page
    const displayedEvents = events.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    return (
      <div className="EventList">
        {displayedEvents.map((event) => (
          <Event key={event.id} event={event} />
        ))}

        <ReactPaginate
          pageCount={Math.ceil(events.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={({ selected }) => setCurrentPage(selected)}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

export default EventList;
