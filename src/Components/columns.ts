import { FiltersInput } from "./Filters/Filters";
import { format } from "date-fns";

export interface ColumnModel {
  accessor: string;
  Header: string;
  Filter: any;
  Footer: string;
}

const Columns = [
  {
    Header: "id",
    Footer: "id",
    accessor: "id",
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Birthday",
    Footer: "Birthday",
    accessor: "date_of_birth",
    Cell: ({ value }: any) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
];

export default Columns;
