export interface ColumnModel {
  accessor: string;
  Header:string;
}

const Columns = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Birthday",
    accessor: "date_of_birth",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
];
export default Columns;
