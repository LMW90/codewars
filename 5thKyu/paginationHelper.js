/* For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1
*/
class PaginationHelper {
	constructor(collection, itemsPerPage) {
    // basic constructor
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
    // return number of array elements
	  return this.collection.length;
	}
	pageCount() {
    // calculate number of started pages
	  return Math.ceil(this.collection.length / this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
    // test for empty array
    if (!this.collection.length) return -1;
    // calculate number of pages
    let pageCount = this.pageCount();
    // test for page out of range
    if (pageIndex + 1 > pageCount || pageIndex < 0) return -1;
    // test for single page array
    if (pageCount === 1) return this.collection.length;
    // if last page calculate number of items on last page and return
    if (pageIndex + 1 === pageCount) return (this.collection.length - ((pageCount - 1) * this.itemsPerPage));
    // return number of items per page
    return this.itemsPerPage;
	}
	pageIndex(itemIndex) {
    // test for empty array
    if (!this.collection.length) return -1;
    // test for item out of range
    if (itemIndex < 0 || itemIndex + 1 > this.collection.length) return -1;
    // calculate page and return
    return Math.floor(itemIndex / this.itemsPerPage);
	}
}