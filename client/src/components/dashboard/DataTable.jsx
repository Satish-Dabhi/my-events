import { DataGrid } from '@mui/x-data-grid';
import './dashboard.css';

const columns = [
  { field: 'id', headerName: 'No.', width: 70 },
  { field: 'name', headerName: 'Event Name', width: 130 },
  { field: 'date', headerName: 'Event Date', width: 130 },
  {
    field: 'totalEntries',
    headerName: 'Total Entries',
    type: 'number',
    width: 130,
  }
];

const rows = [
  { id: 1, name: 'A1 Event', date: '03-05-2023', totalEntries: 200 },
  { id: 2, name: 'Gujju Garba', date: '21-07-2025', totalEntries: 350 },
  { id: 3, name: 'Star Event', date: '13-06-2024', totalEntries: 250 },
  { id: 4, name: 'FF Event', date: '09-11-2023', totalEntries: 500 },
];

export default function DataTable() {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      // checkboxSelection
      />
    </div>
  );
}
