require('./styles/styles.scss');
var Grid = require('ag-grid-community').Grid;
require('ag-grid-enterprise');


var columnDefs = [{
  headerName: 'Country',
  field: 'country',
  enableRowGroup: true,
  filter: true,
  width: 200,
  rowDrag: true
}]

var rowData = [
  { country: 'United Kingdom' },
  { country: 'Ireland' },
  { country: 'United States' },
  { country: 'India' },
  { country: 'Brazil' },
  { country: 'China' },
  { country: 'Russia' }];


var gridOptions = {
  defaultColDef: {
    enableValue: true
  },
  sideBar: {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
      },
    ],
    defaultToolPanel: 'columns'
  },

  columnDefs: columnDefs,
  rowData: rowData
};


new Grid(document.querySelector('#myGrid'), gridOptions);


