import {Table} from "reactstrap";
import './CustomTable.scss'
import {ReactComponent as SortIcon} from './../../assets/images/sort-icon.svg'
import {useSortableData} from "../../hooks/useSortableData";


const columns = [
  {
    name: 'id',
    sortable: true,
    accessor: 'id'
  },
  {
    name: 'Username',
    sortable: true,
    accessor: 'username'
  },
  {
    name: 'Email',
    sortable: true,
    accessor: 'email'
  },
  {
    name: 'Firstname',
    sortable: true,
    accessor: 'first_name'
  },
  {
    name: 'Lastname',
    sortable: true,
    accessor: 'last_name'
  },
  {
    name: 'Pay Status',
    sortable: true,
    accessor: 'pay_status'
  },
  {
    name: 'Profile Link',
    sortable: false,
    accessor: 'profile_link'
  }
]

export const CustomTable = ({users}) => {
  const {items, requestSort, sortConfig} = useSortableData(users);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? `${sortConfig.direction}-sort` : undefined;
  };
  return (
    <Table hover>
      <thead>
      <tr>
        {columns.map(item =>
          item.sortable
          ? <th
            onClick={() => requestSort(item.accessor)}
            className={getClassNamesFor(item.accessor)}
            key={item.accessor}>
              <div className='sorting-cell'>
                <span>{item.name}</span>
                <SortIcon className='sorting-cell__icon'/>
              </div>
            </th>
          : <th key={item.accessor}>{item.name}</th>
        )}
      </tr>
      </thead>
      <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td>
            {item.id}
          </td>
          <td>
            {item.username}
          </td>
          <td>
            {item.email}
          </td>
          <td>
            {item.first_name}
          </td>
          <td>
            {item.last_name}
          </td>
          <td>
            {item.pay_status ? 'paid' : 'not paid'}
          </td>
          <td>
            {item.profile_link}
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}