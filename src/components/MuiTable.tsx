import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from "@mui/material";

function MuiTable() {
    
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
        <Table aria-label='simple table' stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map(row => (
                        <TableRow key={row.id} >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell align='center'>{row.email}</TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData = [{
    "id": 1,
    "first_name": "Harrietta",
    "last_name": "Kenneford",
    "email": "hkenneford0@cloudflare.com",
    "gender": "Female",
    "ip_address": "226.119.185.109"
}, {
    "id": 2,
    "first_name": "Obadiah",
    "last_name": "Stubs",
    "email": "ostubs1@mashable.com",
    "gender": "Male",
    "ip_address": "158.141.61.229"
}, {
    "id": 3,
    "first_name": "Marven",
    "last_name": "Van Driel",
    "email": "mvandriel2@uiuc.edu",
    "gender": "Genderfluid",
    "ip_address": "28.87.216.68"
}, {
    "id": 4,
    "first_name": "Chrisse",
    "last_name": "Genicke",
    "email": "cgenicke3@ameblo.jp",
    "gender": "Non-binary",
    "ip_address": "168.150.1.1"
}, {
    "id": 5,
    "first_name": "Asia",
    "last_name": "Barthelme",
    "email": "abarthelme4@taobao.com",
    "gender": "Polygender",
    "ip_address": "79.78.166.124"
}, {
    "id": 6,
    "first_name": "Laura",
    "last_name": "Morfell",
    "email": "lmorfell5@elegantthemes.com",
    "gender": "Female",
    "ip_address": "51.5.205.81"
}, {
    "id": 7,
    "first_name": "Tibold",
    "last_name": "Diegan",
    "email": "tdiegan6@tiny.cc",
    "gender": "Male",
    "ip_address": "141.248.123.203"
}, {
    "id": 8,
    "first_name": "Hilda",
    "last_name": "Trendle",
    "email": "htrendle7@google.ru",
    "gender": "Female",
    "ip_address": "109.44.110.15"
}, {
    "id": 9,
    "first_name": "Petunia",
    "last_name": "Bensen",
    "email": "pbensen8@shareasale.com",
    "gender": "Female",
    "ip_address": "121.199.61.105"
}, {
    "id": 10,
    "first_name": "Monty",
    "last_name": "Sinkins",
    "email": "msinkins9@youtube.com",
    "gender": "Male",
    "ip_address": "225.74.0.197"
}]
export default MuiTable